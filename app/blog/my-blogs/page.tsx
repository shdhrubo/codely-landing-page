import Link from "next/link";
import React from "react";
import Icon from "@/app/shared/icon/IconComponent";
import { getBlogs } from "@/app/actions/blog/actions";
import DeleteButton from "./delete-button";
export const dynamic = "force-dynamic";
export default async function MyBlogsPage() {
  // Safe server-side fetch using your dedicated Server Action
  const { data: blogs, error } = await getBlogs();

  return (
    <main className="px-[15px]">
      <div className="mb-6 flex justify-between items-center flex-wrap gap-4">
        <Link
          href="/blog"
          className="inline-flex items-center text-primary font-medium hover:text-dark-purple transition-colors"
        >
          <Icon name="left-arrow" className="mr-2" width={16} height={16} />
          Back to Dashboard
        </Link>
        <Link href="/blog/add-new">
          <button className="bg-orange text-white rounded-[25px] px-[24px] py-[9px] text-[15px] font-bold uppercase cursor-pointer group flex items-center shadow-md">
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
          My <span className="text-dark-purple">Blogs</span>
        </h1>
        <p className="text-gray text-[16px] leading-[27px] font-normal">
          Here you can view and manage all your published blogs.
        </p>
      </div>

      {error ? (
        <div className="bg-[#fff0f0] border border-[#ffcccc] p-[30px] rounded-[30px] text-center text-[#d93025]">
          <h3 className="font-bold text-[20px] mb-2">Error Loading Blogs</h3>
          <p>
            Could not load blogs from the database. Please check your setup.
          </p>
        </div>
      ) : blogs && blogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white p-[30px] rounded-[24px] shadow-[0px_5px_15px_rgba(0,0,0,0.04)] border border-pale-blue flex flex-col h-full"
            >
              <h2 className="text-dark-purple text-[22px] font-bold mb-3 leading-tight">
                {blog.Name}
              </h2>
              <p className="text-gray text-[16px] leading-[28px] font-normal flex-grow">
                {blog.Description}
              </p>

              <div className="flex gap-4 mt-6 pt-4 border-t border-pale-blue justify-end items-center">
                <Link
                  href={`/blog/edit/${blog.id}`}
                  className="text-primary text-[14px] font-bold uppercase transition-colors hover:text-dark-purple"
                >
                  Edit
                </Link>
                <DeleteButton blogId={blog.id} />
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
            No blogs found
          </h3>
          <p className="text-gray text-[16px] leading-[27px] max-w-[400px] mx-auto mb-6">
            You have not created any blogs yet. Click the button below to get
            started and write your first post!
          </p>
          <Link href="/blog/add-new">
            <button className="bg-orange text-white rounded-[25px] px-[32px] py-[12px] text-[15px] font-bold uppercase cursor-pointer transition-all hover:shadow-lg inline-flex items-center">
              Create First Blog
            </button>
          </Link>
        </div>
      )}
    </main>
  );
}
