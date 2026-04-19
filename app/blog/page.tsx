import Link from "next/link";
import React from "react";
import Icon from "@/app/shared/icon/IconComponent";

export default function BlogDashboardPage() {
  return (
    <main className="px-[15px]">
      <div className="text-center md:text-left mb-[40px]">
        <h1 className="text-primary text-[30px] leading-9 md:text-[36px] md:leading-[43px] lg:text-[40px] font-bold mb-2">
          Blog <span className="text-dark-purple">Dashboard</span>
        </h1>
        <p className="text-gray text-[16px] leading-[27px] font-normal">
          Manage your blogs, create new ones, and view your published content.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
        {/* My Blogs Card */}
        <Link href="/blog/my-blogs" className="group block h-full">
          <div className="bg-white p-[30px] md:p-[40px] rounded-[30px] shadow-[0px_10px_30px_rgba(0,0,0,0.03)] border border-pale-blue transition-all duration-300 group-hover:shadow-[0px_10px_30px_rgba(0,0,0,0.08)] group-hover:-translate-y-1 flex flex-col items-center text-center h-full">
            <div className="p-4 rounded-full bg-[#f6f4ff] flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <Icon name="navigation-menu" width={32} height={32} />
            </div>
            <h2 className="text-dark-purple text-[24px] font-bold mb-3 group-hover:text-primary transition-colors duration-300">
              My Blogs
            </h2>
            <p className="text-gray text-[16px] leading-[27px]">
              View, edit, and manage all the blogs you have published so far.
            </p>
          </div>
        </Link>

        {/* Add New Blog Card */}
        <Link href="/blog/add-new" className="group block h-full">
          <div className="bg-white p-[30px] md:p-[40px] rounded-[30px] shadow-[0px_10px_30px_rgba(0,0,0,0.03)] border border-pale-blue transition-all duration-300 group-hover:shadow-[0px_10px_30px_rgba(0,0,0,0.08)] group-hover:-translate-y-1 flex flex-col items-center text-center h-full">
            <div className="p-4 rounded-full bg-[#f6f4ff] flex items-center justify-center mb-6 text-orange group-hover:bg-orange group-hover:text-white transition-colors duration-300">
              <Icon name="plus" width={32} height={32} />
            </div>
            <h2 className="text-dark-purple text-[24px] font-bold mb-3 group-hover:text-orange transition-colors duration-300">
              Add New Blog
            </h2>
            <p className="text-gray text-[16px] leading-[27px]">
              Create a brand new blog post with our easy-to-use editor.
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
}
