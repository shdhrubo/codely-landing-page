import Link from "next/link";
import React from "react";
import Icon from "@/app/shared/icon/IconComponent";
import DeleteTestimonialButton from "./delete-button";

export default async function AllTestimonialsPage() {
  let testimonials: { id: string; Rating: number; Message: string }[] = [];
  let error = null;

  try {
    const res = await fetch(`http://localhost:3000/api/testimonials`, {
      cache: "no-store",
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.error || "Failed to load");
    testimonials = json.data;
  } catch (err: unknown) {
    error = err instanceof Error ? err.message : "Unknown error";
  }

  return (
    <main className="px-[15px]">
      <div className="mb-6 flex justify-between items-center flex-wrap gap-4">
        <Link
          href="/testimonials"
          className="inline-flex items-center text-primary font-medium hover:text-dark-purple transition-colors"
        >
          <Icon name="left-arrow" className="mr-2" width={16} height={16} />
          Back to Dashboard
        </Link>
        <Link href="/testimonials/add-new">
          <button className="bg-orange text-white rounded-xl px-6 py-3 text-[15px] font-bold uppercase cursor-pointer group flex items-center shadow-md">
            Add New
            <Icon
              name="plus"
              width={20}
              height={22}
              className="inline ml-1 transition-all duration-400 group-hover:scale-110"
            />
          </button>
        </Link>
      </div>

      <div className="text-center md:text-left mb-[40px]">
        <h1 className="text-primary text-[30px] leading-9 md:text-[36px] md:leading-[43px] lg:text-[40px] font-bold mb-2">
          All <span className="text-dark-purple">Testimonials</span>
        </h1>
        <p className="text-gray text-[16px] leading-[27px] font-normal">
          Here you can view and manage all client testimonials.
        </p>
      </div>

      {error ? (
        <div className="bg-[#fff0f0] border border-[#ffcccc] p-[30px] rounded-2xl text-center text-[#d93025]">
          <h3 className="font-bold text-[20px] mb-2">
            Error Loading Testimonials
          </h3>
          <p>
            Could not load testimonials from the database. Please check your
            setup.
          </p>
        </div>
      ) : testimonials && testimonials.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {testimonials.map((testi) => (
            <div
              key={testi.id}
              className="bg-white p-[30px] rounded-[24px] shadow-[0px_5px_15px_rgba(0,0,0,0.04)] border border-pale-blue flex flex-col h-full"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Icon
                    key={index}
                    name="star-icon"
                    width={20}
                    height={20}
                    className={
                      index < testi.Rating ? "text-[#FFD700]" : "text-[#e0e0e0]"
                    }
                  />
                ))}
              </div>
              <p className="text-gray text-[16px] leading-[28px] font-normal flex-grow italic mb-4">
                &quot;{testi.Message}&quot;
              </p>

              <div className="flex gap-4 mt-auto pt-4 border-t border-pale-blue justify-end items-center">
                <Link
                  href={`/testimonials/edit/${testi.id}`}
                  className="text-primary text-[14px] font-bold uppercase transition-colors hover:text-dark-purple"
                >
                  Edit
                </Link>
                <DeleteTestimonialButton id={testi.id} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white p-[40px] rounded-[30px] shadow-[0px_10px_30px_rgba(0,0,0,0.03)] border border-pale-blue text-center">
          <div className="w-[80px] h-[80px] rounded-full bg-[#f6f4ff] flex items-center justify-center mx-auto mb-6 text-primary">
            <Icon name="rocket" width={32} height={32} />
          </div>
          <h3 className="text-dark-purple text-[24px] font-bold mb-3">
            No testimonials found
          </h3>
          <p className="text-gray text-[16px] leading-[27px] max-w-[400px] mx-auto mb-6">
            You have not recorded any testimonials yet.
          </p>
          <Link href="/testimonials/add-new">
            <button className="bg-orange text-white rounded-xl px-8 py-3 text-[15px] font-bold uppercase cursor-pointer transition-all hover:shadow-lg inline-flex items-center">
              Add First Testimonial
            </button>
          </Link>
        </div>
      )}
    </main>
  );
}
