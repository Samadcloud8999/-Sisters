// ImageCard.jsx
import React from "react";

const ImageCard = ({ src, alt, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-200"
      role="button"
      aria-label={`open ${alt}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-48 object-cover"
        loading="lazy"
        draggable={false}
      />
    </div>
  );
};

export default ImageCard;
