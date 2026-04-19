import React from "react";
import BlogForm from "./blog-form";
import Link from "next/link";
import Icon from "@/app/shared/icon/IconComponent";

export default function AddNewBlogPage() {
  return (
    <main className="px-[15px]">
      <div className="mb-6">
        <Link
          href="/blog"
          className="inline-flex items-center text-primary font-medium hover:text-dark-purple transition-colors"
        >
          <Icon name="left-arrow" className="mr-2" width={16} height={16} />
          Back to Dashboard
        </Link>
      </div>

      <div className="text-center md:text-left mb-[40px]">
        <h1 className="text-primary text-[30px] leading-9 md:text-[36px] md:leading-[43px] lg:text-[40px] font-bold mb-2">
          Create a New <span className="text-dark-purple">Blog</span>
        </h1>
        <p className="text-gray text-[16px] leading-[27px] font-normal">
          Fill in the details below to add a new blog entry. This data will be
          saved to your database later.
        </p>
      </div>

      <div className="max-w-[700px]">
        <BlogForm />
      </div>
    </main>
  );
}
