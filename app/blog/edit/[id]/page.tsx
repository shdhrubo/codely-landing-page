import React from "react";
import Link from "next/link";
import Icon from "@/app/shared/icon/IconComponent";
import { getBlogById } from "@/app/actions/blog/actions";
import EditForm from "./edit-form";

export const dynamic = "force-dynamic";

export default async function EditBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data: blog, error } = await getBlogById(id);

  if (error || !blog) {
    return (
      <main className="px-[15px] pt-10">
        <h1 className="text-red-500 text-2xl font-bold text-center">
          Blog not found
        </h1>
      </main>
    );
  }

  return (
    <main className="px-[15px]">
      <div className="mb-6">
        <Link
          href="/blog/my-blogs"
          className="inline-flex items-center text-primary font-medium hover:text-dark-purple transition-colors"
        >
          <Icon name="left-arrow" className="mr-2" width={16} height={16} />
          Back to My Blogs
        </Link>
      </div>

      <div className="text-center md:text-left mb-[40px]">
        <h1 className="text-primary text-[30px] leading-9 md:text-[36px] md:leading-[43px] lg:text-[40px] font-bold mb-2">
          Edit <span className="text-dark-purple">Blog</span>
        </h1>
        <p className="text-gray text-[16px] leading-[27px] font-normal">
          Update the details of your existing blog entry below.
        </p>
      </div>

      <div className="max-w-[700px]">
        <EditForm blog={blog} />
      </div>
    </main>
  );
}
