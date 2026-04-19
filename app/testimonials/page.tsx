import Link from "next/link";
import React from "react";
import Icon from "@/app/shared/icon/IconComponent";

export default function TestimonialsDashboard() {
  return (
    <main className="px-[15px]">
      <div className="text-center mb-[50px]">
        <h1 className="text-primary text-[36px] md:text-[42px] lg:text-[48px] font-bold mb-4">
          Testimonials <span className="text-dark-purple">Dashboard</span>
        </h1>
        <p className="text-gray text-[16px] leading-[28px] max-w-[600px] mx-auto">
          Manage all your client testimonials. Add new modern reviews or securely delete outdated ones.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] max-w-[800px] mx-auto">
        <Link href="/testimonials/all" className="group block">
          <div className="bg-white p-[40px] rounded-[30px] shadow-[0px_10px_30px_rgba(0,0,0,0.03)] border border-pale-blue transition-all duration-300 hover:shadow-[0px_10px_30px_rgba(106,73,243,0.1)] hover:-translate-y-2 text-center h-full">
            <div className="w-[80px] h-[80px] rounded-full bg-[#f6f4ff] flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-[#6a49f3] group-hover:text-white transition-colors duration-500">
              <Icon name="rocket" width={32} height={32} />
            </div>
            <h2 className="text-dark-purple text-[24px] font-bold mb-3">
              All Testimonials
            </h2>
            <p className="text-gray text-[15px] leading-[26px]">
              View, edit, and safely delete your existing real-world client testimonials.
            </p>
          </div>
        </Link>
        <Link href="/testimonials/add-new" className="group block">
          <div className="bg-white p-[40px] rounded-[30px] shadow-[0px_10px_30px_rgba(0,0,0,0.03)] border border-pale-blue transition-all duration-300 hover:shadow-[0px_10px_30px_rgba(106,73,243,0.1)] hover:-translate-y-2 text-center h-full">
            <div className="w-[80px] h-[80px] rounded-full bg-[#f6f4ff] flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-[#ff7133] group-hover:text-white transition-colors duration-500">
              <Icon name="plus" width={32} height={32} />
            </div>
            <h2 className="text-dark-purple text-[24px] font-bold mb-3">
              Add Testimonial
            </h2>
            <p className="text-gray text-[15px] leading-[26px]">
              Create and publish a brand new client testimonial with integrated star ratings.
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
}
