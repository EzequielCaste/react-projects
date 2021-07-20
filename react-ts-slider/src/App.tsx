import React, {useEffect, useState} from 'react';
import './App.css';
import {Footer} from './footer';

import reviews from './reviews.json';
import {Slide} from './slide';

const App: React.FC = () => {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((active) => active + 1);
    }, 5000);
    return () => window.clearInterval(id);
  }, []);

  if (active === 5) {
    setActive(1);
  }

  const nextSlide = () => {
    if (active === 4) {
      setActive(1);
    } else {
      setActive((prev) => prev + 1);
    }
  };
  const prevSlide = () => {
    if (active === 1) {
      setActive(4);
    } else {
      setActive((prev) => prev - 1);
    }
  };

  return (
    <div className="App">
      <h1>
        <span>/</span> Reviews
      </h1>
      <div className="slider-container">
        {reviews.map((review) => (
          <Slide key={review.id} active={active} review={review} />
        ))}

        <div onClick={prevSlide} className="prev">
          {'<'}
        </div>
        <div onClick={nextSlide} className="next">
          {'>'}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
