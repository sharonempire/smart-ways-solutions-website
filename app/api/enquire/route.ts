import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { supabaseAdmin } from "@/lib/supabase";

const COMPANY_EMAIL = process.env.COMPANY_EMAIL ?? "loans@smartwaysolutions.com";
const FROM_EMAIL = process.env.FROM_EMAIL ?? "enquiries@smartwaysolutions.com";

// Escape all HTML special characters before interpolating user input into email HTML
function esc(s: unknown): string {
  if (s == null || s === "") return "—";
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY ?? "placeholder");
  try {
    const body = await req.json();
    const { fullName, phone, email, city, loanType, loanAmount, employmentType, monthlyIncome, message, source } = body;

    // Required field check
    if (!fullName || !phone || !loanType || !loanAmount || !employmentType) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // Field length caps — prevent oversized inputs reaching email or DB
    if (
      String(fullName).length > 100 ||
      String(phone).length > 20 ||
      String(loanType).length > 100 ||
      String(loanAmount).length > 50 ||
      String(employmentType).length > 100 ||
      (city && String(city).length > 100) ||
      (monthlyIncome && String(monthlyIncome).length > 50) ||
      (message && String(message).length > 2000)
    ) {
      return NextResponse.json({ error: "One or more fields exceed the allowed length." }, { status: 400 });
    }

    // Email format validation — also guards the `to:` address used in auto-reply
    if (email && !EMAIL_RE.test(String(email))) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const submittedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    // Email to company — all user values escaped
    await resend.emails.send({
      from: `Smart Way Solutions Enquiry <${FROM_EMAIL}>`,
      to: [COMPANY_EMAIL],
      subject: `New Loan Enquiry — ${esc(loanType)} — ${esc(fullName)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1a1a1a; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #F5A623; margin: 0; font-size: 20px;">New Loan Enquiry</h1>
            <p style="color: #999; margin: 4px 0 0; font-size: 13px;">Received: ${submittedAt} IST</p>
          </div>
          <div style="background: #f8f8f8; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e5e5; border-top: none;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              ${[
                ["Full Name",        fullName],
                ["Phone",            phone],
                ["Email",            email],
                ["City / District",  city],
                ["Loan Type",        loanType],
                ["Loan Amount",      loanAmount],
                ["Employment Type",  employmentType],
                ["Monthly Income",   monthlyIncome],
                ["Additional Details", message],
              ]
                .map(
                  ([label, value]) => `
                <tr>
                  <td style="padding: 10px 12px; background: #fff; border: 1px solid #e5e5e5; font-weight: bold; color: #1a1a1a; width: 40%;">${esc(label)}</td>
                  <td style="padding: 10px 12px; background: #fff; border: 1px solid #e5e5e5; color: #444;">${esc(value)}</td>
                </tr>`
                )
                .join("")}
            </table>
            <div style="margin-top: 20px; padding: 16px; background: #FFF8EC; border: 1px solid #F5A623; border-radius: 6px;">
              <p style="margin: 0; color: #1a1a1a; font-size: 13px;">
                📞 <strong>Call ${esc(fullName)} now:</strong> <a href="tel:${esc(phone)}" style="color: #F5A623;">${esc(phone)}</a>
              </p>
            </div>
          </div>
        </div>
      `,
    });

    // Auto-reply to customer (only if email provided)
    if (email) {
      await resend.emails.send({
        from: `Smart Way Solutions <${FROM_EMAIL}>`,
        to: [String(email)],
        subject: "We received your loan enquiry — Smart Way Solutions",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #1a1a1a; padding: 24px; border-radius: 8px 8px 0 0;">
              <h1 style="color: #F5A623; margin: 0; font-size: 20px;">Smart Way Solutions</h1>
              <p style="color: #999; margin: 4px 0 0; font-size: 13px;">Kerala&#x27;s Trusted Loan Partner</p>
            </div>
            <div style="background: #ffffff; padding: 28px; border-radius: 0 0 8px 8px; border: 1px solid #e5e5e5; border-top: none;">
              <p style="color: #1a1a1a; font-size: 15px;">Hi <strong>${esc(fullName)}</strong>,</p>
              <p style="color: #444; font-size: 14px; line-height: 1.6;">
                Thank you for your enquiry about a <strong>${esc(loanType)}</strong>. We have received your details and our loan advisor will call you at <strong>${esc(phone)}</strong> within 24 hours.
              </p>
              <div style="background: #FFF8EC; border: 1px solid #F5A623; border-radius: 6px; padding: 16px; margin: 20px 0;">
                <p style="margin: 0 0 8px; color: #1a1a1a; font-weight: bold; font-size: 13px;">What happens next?</p>
                <ol style="margin: 0; padding-left: 18px; color: #555; font-size: 13px; line-height: 1.8;">
                  <li>Our advisor calls you within 24 hours</li>
                  <li>We compare offers from 16+ banks and NBFCs</li>
                  <li>You get the best rate with full documentation support</li>
                  <li>Loan sanctioned in 7–15 working days</li>
                </ol>
              </div>
              <p style="color: #444; font-size: 13px;">
                In the meantime, you can reach us on WhatsApp:<br/>
                <a href="https://wa.me/919000000000" style="color: #F5A623; font-weight: bold;">Chat on WhatsApp →</a>
              </p>
              <p style="color: #999; font-size: 12px; margin-top: 24px; border-top: 1px solid #eee; padding-top: 16px;">
                Smart Way Solutions | Kerala, India<br/>
                This is an automated confirmation. Please do not reply to this email.
              </p>
            </div>
          </div>
        `,
      });
    }

    // Save lead to Supabase — parameterized insert, not affected by HTML injection
    await supabaseAdmin.from("leads").insert({
      full_name: fullName,
      phone,
      email: email || null,
      city: city || null,
      loan_type: loanType,
      loan_amount: loanAmount,
      employment_type: employmentType,
      monthly_income: monthlyIncome || null,
      message: message || null,
      source: source || null,
      status: "new",
    });

    // Forward to Google Sheets webhook
    if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
      await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          submittedAt,
          fullName,
          phone,
          email: email || "",
          city: city || "",
          loanType,
          loanAmount,
          employmentType,
          monthlyIncome: monthlyIncome || "",
          message: message || "",
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Enquiry API error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
