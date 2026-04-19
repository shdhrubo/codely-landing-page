import React from "react";
import Link from "next/link";
import Icon from "@/app/shared/icon/IconComponent";
import EditTestimonialForm from "./edit-form";

export default async function EditTestimonialPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let testimonial = null;
  let error = null;

  try {
    const res = await fetch(`http://localhost:3000/api/testimonials/${id}`);
    const json = await res.json();
    if (!res.ok) throw new Error(json.error || "Failed to load");
    testimonial = json.data;
  } catch (err: unknown) {
    error = err instanceof Error ? err.message : "Unknown error";
  }

  if (error || !testimonial) {
    return (
      <main className="px-[15px] pt-10">
        <h1 className="text-[#ff0000] text-[24px] font-bold text-center">
          Testimonial not found
        </h1>
      </main>
    );
  }

  return (
    <main className="px-[15px]">
      <div className="mb-6">
        <Link
          href="/testimonials/all"
          className="inline-flex items-center text-primary font-medium hover:text-dark-purple transition-colors"
        >
          <Icon name="left-arrow" className="mr-2" width={16} height={16} />
          Back to Testimonials
        </Link>
      </div>

      <div className="text-center md:text-left mb-[40px]">
        <h1 className="text-primary text-[30px] leading-9 md:text-[36px] md:leading-[43px] lg:text-[40px] font-bold mb-2">
          Edit <span className="text-dark-purple">Testimonial</span>
        </h1>
        <p className="text-gray text-[16px] leading-[27px] font-normal">
          Update the details of your existing client review and rating below.
        </p>
      </div>

      <div className="max-w-[700px]">
        <EditTestimonialForm testimonial={testimonial} />
      </div>
    </main>
  );
}
