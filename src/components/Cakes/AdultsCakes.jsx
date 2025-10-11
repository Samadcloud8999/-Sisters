import { useState } from "react";
import Card from "../Card";

const AdultsCakes = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: "/src/assets/images/Vzrosliicucis/Vzrod1.webp",
      alt: "Торт для взрослых №1",
    },
    {
      src: "/src/assets/images/Vzrosliicucis/Vzrod2.webp",
      alt: "Торт для взрослых №2",
    },
    {
      src: "/src/assets/images/Vzrosliicucis/Vzrod3.webp",
      alt: "Торт для взрослых №3",
    },
    {
      src: "/src/assets/images/Vzrosliicucis/Vzrod4.webp",
      alt: "Торт для взрослых №4",
    },
    {
      src: "/src/assets/images/Vzrosliicucis/Vzrod5.webp",
      alt: "Торт для взрослых №5",
    },
    {
      src: "/src/assets/images/Vzrosliicucis/Vzrod6.webp",
      alt: "Торт для взрослых №6",
    },
    {
      src: "/src/assets/images/Vzrosliicucis/Vzrod7.webp",
      alt: "Торт для взрослых №7",
    },
    {
      src: "/src/assets/images/Vzrosliicucis/Vzrod8.webp",
      alt: "Торт для взрослых №8",
    },
    {
      src: "/src/assets/images/Vzrosliicucis/Vzrod9.webp",
      alt: "Торт для взрослых №9",
    },
    {
      src: "/src/assets/images/Vzrosliicucis/Vzrod10.webp",
      alt: "Торт для взрослых №10",
    },
    {
      src: "/src/assets/images/Vzrosliicucis/Vzrod11.webp",
      alt: "Торт для взрослых №11",
    },
    {
      src: "/src/assets/images/Vzrosliicucis/Vzrod12.webp",
      alt: "Торт для взрослых №12",
    },
    {
      src: "/src/assets/images/Vzrosliicucis/Vzrod13.webp",
      alt: "Торт для взрослых №13",
    },
    {
      src: "/src/assets/images/Vzrosliicucis/Vzrod14.webp",
      alt: "Торт для взрослых №14",
    },
    {
      src: "/src/assets/images/Vzrosliicucis/Vzrod15.webp",
      alt: "Торт для взрослых №15",
    },
    {
      src: "/src/assets/images/Vzrosliicucis/Vzrod16.webp",
      alt: "Торт для взрослых №16",
    },
    {
      src: "/src/assets/images/Vzrosliicucis/Vzrod17.webp",
      alt: "Торт для взрослых №17",
    },
  ];

  return (
    <>
     

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {images.map((img, i) => (
          <Card
            key={i}
            imageSrc={img.src}
            alt={img.alt}
            onClick={() => setSelectedImage(img.src)}
          />
        ))}
      </div>
    </>
  );
};

export default AdultsCakes;
