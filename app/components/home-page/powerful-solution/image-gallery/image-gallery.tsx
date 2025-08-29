import Image from "next/image";
import { AppImages } from "@/app/shared/image/image";

const ImageGallery = () => {
  const images = [
    AppImages.Powerful_Solution_1,
    AppImages.Powerful_Solution_2,
    AppImages.Powerful_Solution_3,
    AppImages.Powerful_Solution_4,
    AppImages.Powerful_Solution_5,
    AppImages.Powerful_Solution_6,
    AppImages.Powerful_Solution_7,
    AppImages.Powerful_Solution_8,
    AppImages.Powerful_Solution_9,
  ];

  // Predefine how images should be split per breakpoint
  const layout = {
    mobile: [images], // 1 column
    sm: [images.slice(0, 4), images.slice(4)], // 2 columns
    md: [
      images.slice(0, 2),
      images.slice(2, 5),
      images.slice(5, 7),
      images.slice(7, 9),
    ], // 4 columns
  };

  return (
    <div className="flex flex-col sm:flex-row md:flex-row gap-x-6 ">
      {/* Mobile view (1 col) */}
      <div className="flex flex-col sm:hidden mx-auto">
        {layout.mobile[0].map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt={`powerful-${idx + 1}`}
            className="mt-[30px] px-[15px] "
          />
        ))}
      </div>

      {/* Small view (2 cols) */}
      <div className="hidden sm:flex md:hidden flex-1 justify-center">
        {layout.sm.map((col, colIdx) => (
          <div key={colIdx} className="flex flex-col  ">
            {col.map((src, idx) => (
              <Image
                key={`${colIdx}-${idx}`}
                src={src}
                alt={`powerful-${idx + 1}`}
                className="mt-[30px] px-[15px] "
              />
            ))}
          </div>
        ))}
      </div>

      {/* Medium+ view (4 cols) */}
      <div className="hidden md:flex flex-1">
        {layout.md.map((col, colIdx) => (
          <div key={colIdx} className="flex flex-col flex-1">
            {col.map((src, idx) => (
              <Image
                key={`${colIdx}-${idx}`}
                src={src}
                alt={`powerful-${idx + 1}`}
                className="mt-[30px] px-[15px] "
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
