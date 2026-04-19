"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DeleteTestimonialButton({ id }: { id: string | number }) {
  const [isOpen, setIsOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    setPending(true);
    try {
      await fetch(`/api/testimonials/${id}`, { method: "DELETE" });
      router.refresh(); // Tells Next.js to re-fetch the Server Component
    } catch (e) {
      console.error(e);
    } finally {
      setIsOpen(false);
      setPending(false);
    }
  };

  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(true);
        }}
        className="cursor-pointer text-[#ff0000] text-[14px] font-bold uppercase transition-colors hover:opacity-70"
      >
        Delete
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-dark-purple/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl relative translate-y-0 opacity-100 transition-all">
            <h3 className="text-[24px] font-bold text-dark-purple mb-4">Confirm Delete</h3>
            <p className="text-gray text-[16px] leading-[26px] mb-8">
              Are you sure you want to permanently delete this testimonial? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3 font-medium">
              <button
                onClick={() => setIsOpen(false)}
                disabled={pending}
                className="px-6 py-2 rounded-xl text-gray bg-pale-blue hover:bg-[#e4dfef] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={pending}
                className="px-6 py-2 rounded-xl text-white bg-[#ff0000] hover:bg-[#d90000] transition-colors disabled:opacity-50"
              >
                {pending ? "Deleting..." : "Confirm Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
