import React, { useEffect, useState } from 'react';
import './Slideshow.css';

const Slideshow = () => {
  const [counter, setCounter] = useState(0);
  const images = ['blacktable.png', 'blackcouch.png', 'blackchair.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCounter(index);
  };

  return (
    <div className="slider">
      <div className="slides" style={{ transform: `translateX(-${counter * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={`/${image}`} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="navigation-auto">
        {images.map((_, index) => (
          <div
            key={index}
            className={`auto-btn ${counter === index ? 'active' : ''}`}
            onClick={() => setCounter(index)}
          ></div>
        ))}
      </div>

      <div className="navigation-manual">
        {images.map((_, index) => (
          <label
            key={index}
            htmlFor={`radio${index + 1}`}
            className={`manual-btn ${counter === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></label>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
