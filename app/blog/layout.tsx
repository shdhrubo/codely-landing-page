export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#f6f4ff] min-h-screen">
      {/* You can add a blog-specific header or sidebar here if needed */}
      <div className="max-w-[1200px] mx-auto pt-[40px] pb-[70px]">
        {children}
      </div>
    </div>
  );
}
