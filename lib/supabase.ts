import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const supabase = createClient(url, anonKey);

// Service-role client for server-side writes (bypasses RLS)
export const supabaseAdmin = serviceKey
  ? createClient(url, serviceKey)
  : supabase;

export type LeadStatus = "new" | "called" | "in_progress" | "closed";

export interface Lead {
  id: string;
  created_at: string;
  full_name: string;
  phone: string;
  email: string | null;
  city: string | null;
  loan_type: string;
  loan_amount: string;
  employment_type: string;
  monthly_income: string | null;
  message: string | null;
  status: LeadStatus;
  notes: string | null;
  source: string | null;
}
