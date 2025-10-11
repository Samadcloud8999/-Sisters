import { useState } from "react";
import Card from "../Card";

const imagesImport = import.meta.glob("/src/assets/images/Vzrosliicucis/*.webp", {
  eager: true,
});

const adultsImages = Object.values(imagesImport).map((mod) => mod.default || mod);

const AdultsCakes = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = adultsImages.map((src, index) => ({
    src,
    alt: `Торт для взрослых №${index + 1}`,
  }));

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, i) => (
          <Card
            key={i}
            imageSrc={img.src}
            alt={img.alt}
            onClick={() => setSelectedImage(img.src)}
          />
        ))}
      </div>
    </div>
  );
};

export default AdultsCakes;
