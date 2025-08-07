import { useState } from "react";
import arrowLeft from "../assets/img/arrow-left.png";
import arrowRight from "../assets/img/arrow-right.png";

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? pictures.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === pictures.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel">
      {/* on définit l'existence des arrows seulement s'il y a plus d'une image */}
      {pictures.length > 1 && (
        <>
          <button className="carousel-arrow left" onClick={prevSlide}>
            <img src={arrowLeft} alt="Flèche gauche" />
          </button>
          <button className="carousel-arrow right" onClick={nextSlide}>
            <img src={arrowRight} alt="Flèche droite" />
          </button>
        </>
      )}
      <div className="carousel-wrapper">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {pictures.map((img, index) => (
            <img
              key={index}
              src={img}
              className="slide-image"
              alt={`slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      {/* on définit l'existence du compteur seulement s'il y a plus d'une image */}
      {pictures.length > 1 && (
        <p className="carousel-count">
          {currentIndex + 1} / {pictures.length}
        </p>
      )}
    </div>
  );
};

export default Carousel;
