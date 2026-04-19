"use client";

import React, { useActionState } from "react";

import Icon from "@/app/shared/icon/IconComponent";
import { createBlogAction, FormState } from "@/app/actions/blog/actions";

const initialState: FormState = {};

export default function BlogForm() {
  const [state, formAction, pending] = useActionState(
    createBlogAction,
    initialState,
  );

  return (
    <form
      action={formAction}
      className="bg-white p-[30px] md:p-[40px] rounded-[30px] shadow-[0px_10px_30px_rgba(0,0,0,0.03)] border border-pale-blue"
    >
      {state?.success && (
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

      <div className="mb-6">
        <label htmlFor="name" className="block text-dark-purple font-bold mb-2">
          Blog Name
        </label>
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter blog name"
            className="h-[55px] rounded-xl bg-[#f6f4ff] px-5 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white border border-[#eae6f7] transition-all duration-300 text-light-black placeholder:text-gray/50"
          />
        </div>
        {state?.errors?.name && (
          <p className="text-[#ff0000] text-sm mt-2 ml-4">
            {state.errors.name[0]}
          </p>
        )}
      </div>

      <div className="mb-[30px]">
        <label
          htmlFor="description"
          className="block text-dark-purple font-bold mb-2"
        >
          Blog Description
        </label>
        <div className="relative">
          <textarea
            id="description"
            name="description"
            placeholder="Enter blog description"
            rows={5}
            className="rounded-xl bg-[#f6f4ff] p-5 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white border border-[#eae6f7] resize-none transition-all duration-300 text-light-black placeholder:text-gray/50"
          ></textarea>
        </div>
        {state?.errors?.description && (
          <p className="text-[#ff0000] text-sm mt-2 ml-4">
            {state.errors.description[0]}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-orange text-white rounded-[25px] px-[24px] py-[15px] text-[16px] font-bold uppercase cursor-pointer group flex items-center justify-center transition-all disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg"
      >
        {pending ? "Saving..." : "Submit"}
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
