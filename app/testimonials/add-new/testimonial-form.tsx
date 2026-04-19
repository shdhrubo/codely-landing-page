"use client";

import React, { useState } from "react";
import Icon from "@/app/shared/icon/IconComponent";
import { BASE_URL } from "@/app/config/api-config";

export default function TestimonialForm() {
  const [pending, setPending] = useState(false);
  const [state, setState] = useState<{
    success?: boolean;
    message?: string;
    errors?: { rating?: string[]; message?: string[] };
  }>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    setState({});

    const formData = new FormData(e.currentTarget);
    const data = {
      rating: formData.get("rating"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch(`${BASE_URL}/api/testimonials`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        setState({
          success: false,
          errors: result.errors,
          message: result.error,
        });
      } else {
        setState({ success: true, message: result.message });
        (e.target as HTMLFormElement).reset();
      }
    } catch (err) {
      console.error(err);
      setState({ success: false, message: "Network error occurred." });
    } finally {
      setPending(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-[30px] md:p-[40px] rounded-[30px] shadow-[0px_10px_30px_rgba(0,0,0,0.03)] border border-pale-blue"
    >
      {state.success && (
        <div className="mb-6 p-4 bg-[#e8f5e9] text-[#009515] rounded-xl flex items-center gap-2">
          <Icon
            name="check-circled"
            width={20}
            height={20}
            className="text-[#009515]"
          />
          <span className="font-bold">{state.message}</span>
        </div>
      )}

      {state.message && !state.success && !state.errors && (
        <div className="mb-6 p-4 bg-[#ffebee] text-[#d32f2f] rounded-xl flex items-center gap-2">
          <span className="font-bold">{state.message}</span>
        </div>
      )}

      <div className="mb-6">
        <label
          htmlFor="rating"
          className="block text-dark-purple font-bold mb-2"
        >
          Star Rating (1-5)
        </label>
        <div className="relative">
          <input
            type="number"
            id="rating"
            name="rating"
            min="1"
            max="5"
            placeholder="Enter numeric rating (1 to 5)"
            className="h-[55px] rounded-xl bg-[#f6f4ff] px-5 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white border border-[#eae6f7] transition-all duration-300 text-light-black placeholder:text-gray/50"
          />
        </div>
        {state.errors?.rating && (
          <p className="text-[#ff0000] text-sm mt-2 ml-4">
            {state.errors.rating[0]}
          </p>
        )}
      </div>

      <div className="mb-[30px]">
        <label
          htmlFor="message"
          className="block text-dark-purple font-bold mb-2"
        >
          Testimonial Message
        </label>
        <div className="relative">
          <textarea
            id="message"
            name="message"
            placeholder="Enter client testimonial"
            rows={5}
            className="rounded-xl bg-[#f6f4ff] p-5 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white border border-[#eae6f7] resize-none transition-all duration-300 text-light-black placeholder:text-gray/50"
          ></textarea>
        </div>
        {state.errors?.message && (
          <p className="text-[#ff0000] text-sm mt-2 ml-4">
            {state.errors.message[0]}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-orange text-white rounded-xl px-[24px] py-[15px] text-[16px] font-bold uppercase cursor-pointer group flex items-center justify-center transition-all disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg"
      >
        {pending ? "Saving..." : "Save Testimonial"}
        {!pending && (
          <Icon
            name="arrow-right"
            width={20}
            height={22}
            className="inline ml-2 -rotate-45 group-hover:rotate-0 transition-all duration-400"
          />
        )}
      </button>
    </form>
  );
}
