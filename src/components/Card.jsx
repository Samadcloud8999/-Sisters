const Card = ({ imageSrc, alt, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer overflow-hidden rounded-xl shadow-lg hover:scale-105 transition"
    >
      <img
        src={imageSrc}
        alt={alt}
        className="w-full h-56 object-cover"
        loading="lazy"
      />
    </div>
  );
};

export default Card;
