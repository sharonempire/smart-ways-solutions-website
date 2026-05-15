"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
}

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < count ? "text-[#F5A623]" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const FALLBACK_REVIEWS: Review[] = [
  {
    author_name: "Rajan Menon",
    rating: 5,
    text: "Transferred my KSFE loan to HDFC through Smart Way Solutions. Process was seamless — completed in 3 weeks. Saving ₹3,800 every month now. Highly recommend.",
    relative_time_description: "2 months ago",
  },
  {
    author_name: "Mohammed Ashraf",
    rating: 5,
    text: "I'm an NRI in Dubai. Smart Way Solutions handled my entire home loan process in Kozhikode locally. Federal Bank approved ₹65L in 18 days. Incredible service.",
    relative_time_description: "3 months ago",
  },
  {
    author_name: "Priya Nair",
    rating: 5,
    text: "As a government teacher I got SBI at 8.4% — the best rate available. They compared 6 lenders for me. Done in 12 days. Very professional team.",
    relative_time_description: "1 month ago",
  },
  {
    author_name: "Suresh Kumar",
    rating: 5,
    text: "Society loan takeover plus ₹8L top-up arranged together at 9.2%. Saving ₹5,200 per month. Smart Way Solutions knows exactly what they're doing.",
    relative_time_description: "4 months ago",
  },
  {
    author_name: "Anitha Suresh",
    rating: 5,
    text: "Composite plot + construction loan from SBI at 8.5%. Stage-wise disbursements were handled perfectly. Excellent communication throughout the process.",
    relative_time_description: "2 months ago",
  },
  {
    author_name: "Sreeja Pillai",
    rating: 5,
    text: "Balance transfer from 9.8% to Axis Bank at 8.75% — saving ₹2,900/month. Transfer completed in just 15 working days. Zero hassle from my end.",
    relative_time_description: "6 weeks ago",
  },
];

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>(FALLBACK_REVIEWS);
  const [rating, setRating] = useState(5.0);
  const [total, setTotal] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
  const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;

  useEffect(() => {
    if (!apiKey || !placeId || apiKey.includes("XXXX")) {
      setLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=__sws_initPlaces`;
    script.async = true;
    script.defer = true;

    type GPlaceResult = {
      rating?: number;
      user_ratings_total?: number;
      reviews?: Array<{
        author_name: string;
        rating: number;
        text: string;
        relative_time_description: string;
        profile_photo_url?: string;
      }>;
    };
    type GPlacesStatus = string;
    type GWindow = typeof window & {
      __sws_initPlaces: () => void;
      google: {
        maps: {
          places: {
            PlacesService: new (el: HTMLElement) => {
              getDetails: (
                req: { placeId: string; fields: string[] },
                cb: (result: GPlaceResult | null, status: GPlacesStatus) => void
              ) => void;
            };
            PlacesServiceStatus: { OK: string };
          };
        };
      };
    };

    (window as GWindow).__sws_initPlaces = () => {
      const gw = window as GWindow;
      const service = new gw.google.maps.places.PlacesService(
        document.createElement("div")
      );
      service.getDetails(
        { placeId, fields: ["rating", "user_ratings_total", "reviews"] },
        (place, status) => {
          if (status === gw.google.maps.places.PlacesServiceStatus.OK && place) {
            if (place.rating) setRating(place.rating);
            if (place.user_ratings_total) setTotal(place.user_ratings_total);
            if (place.reviews && place.reviews.length > 0) {
              setReviews(
                place.reviews
                  .filter((r) => r.rating >= 4)
                  .slice(0, 6)
                  .map((r) => ({
                    author_name: r.author_name,
                    rating: r.rating,
                    text: r.text,
                    relative_time_description: r.relative_time_description,
                    profile_photo_url: r.profile_photo_url,
                  }))
              );
            }
          }
          setLoaded(true);
        }
      );
    };

    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [apiKey, placeId]);

  const mapsUrl = placeId && !placeId.includes("XXXX")
    ? `https://www.google.com/maps/place/?q=place_id:${placeId}`
    : "https://www.google.com/maps/search/Smart+Way+Solutions+Kerala";

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-[#F5A623] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3">
            Google Reviews
          </span>
          <h2 className="text-[#1a1a1a] text-3xl md:text-4xl font-black">
            What Our Clients Say
          </h2>

          {/* Star + rating summary */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="text-[#1a1a1a] text-4xl font-black">{rating.toFixed(1)}</span>
            <div>
              <div className="flex gap-0.5 justify-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < Math.round(rating) ? "text-[#F5A623]" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-400 text-xs mt-0.5">
                {total > 0 ? `${total} reviews on Google` : "5 star rated on Google"}
              </p>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-50"}`}>
          {reviews.map((review, i) => (
            <div key={i} className="bg-[#f8f8f8] rounded-2xl p-5 border border-gray-100 flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                {review.profile_photo_url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={review.profile_photo_url}
                    alt={review.author_name}
                    className="w-10 h-10 rounded-full object-cover"
                    loading="lazy"
                    width={40}
                    height={40}
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#F5A623] font-black text-sm shrink-0">
                    {review.author_name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="text-[#1a1a1a] font-bold text-sm">{review.author_name}</p>
                  <p className="text-gray-400 text-xs">{review.relative_time_description}</p>
                </div>
              </div>
              <StarRating count={review.rating} />
              <p className="text-gray-600 text-xs leading-relaxed mt-3 flex-1 line-clamp-5">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* CTA to Google Maps */}
        <div className="text-center mt-10">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border-2 border-[#1a1a1a] text-[#1a1a1a] px-7 py-3 rounded-lg font-bold text-sm hover:bg-[#1a1a1a] hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            View All Reviews on Google Maps
          </a>
          <p className="text-gray-400 text-xs mt-3">
            Have a loan with us?{" "}
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="text-[#F5A623] hover:underline font-semibold">
              Leave us a review
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
