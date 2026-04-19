import React from "react";
import TestimonialForm from "./testimonial-form";
import Link from "next/link";
import Icon from "@/app/shared/icon/IconComponent";

export default function AddNewTestimonialPage() {
  return (
    <main className="px-[15px]">
      <div className="mb-6">
        <Link
          href="/testimonials"
          className="inline-flex items-center text-primary font-medium hover:text-dark-purple transition-colors"
        >
          <Icon name="left-arrow" className="mr-2" width={16} height={16} />
          Back to Dashboard
        </Link>
      </div>

      <div className="text-center md:text-left mb-[40px]">
        <h1 className="text-primary text-[30px] leading-9 md:text-[36px] md:leading-[43px] lg:text-[40px] font-bold mb-2">
          Add New <span className="text-dark-purple">Testimonial</span>
        </h1>
        <p className="text-gray text-[16px] leading-[27px] font-normal">
          Fill out the details below to publish a new testimonial review.
        </p>
      </div>

      <div className="max-w-[700px]">
        <TestimonialForm />
      </div>
    </main>
  );
}
