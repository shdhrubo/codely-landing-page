export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#f6f4ff] min-h-screen py-[70px]">
      <div className="max-w-[1200px] mx-auto overflow-hidden">
        {children}
      </div>
    </div>
  );
}
