import { useState } from "react";
import classes from "./Slideshow.module.scss";

const Slideshow = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    current === 0
      ? setCurrent(images.length - 1)
      : setCurrent((prev) => prev - 1);
  };

  const nextSlide = () => {
    current === images.length - 1
      ? setCurrent(0)
      : setCurrent((prev) => prev + 1);
  };

  return (
    <>
      <div className={classes.Container}>
        {/* <img src={images[0]} alt="" /> */}
        {images.map((image, index) => (
          <img src={image} alt="" key={index}
          className={`carousel-image ${current === index ? 'active' : ''}`}></img>
        ))}
      </div>
      <button onClick={prevSlide}>←</button>
      <button onClick={nextSlide}>→</button>
    </>
  );
};

export default Slideshow;
