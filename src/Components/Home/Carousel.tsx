import React, { FC, useEffect, useState } from "react";
import "./Carousel.scss";
import { MdArrowBackIos } from "react-icons/md";

type Props = {
  images: string[];
  interval: number;
};

const Carousel: FC<Props> = ({ images, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      <button
        className="carousel__button carousel__button--prev"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <div className="carousel__slide">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button
        className="carousel__button carousel__button--next"
        onClick={nextSlide}
      >
        &#10095;
      </button>
      <div className="carousel__dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`carousel__dot ${
              index === currentIndex ? "carousel__dot--active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
