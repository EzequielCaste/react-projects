import React from 'react';

interface Props {
  active: number;
  review: {
    id: number;
    image: string;
    name: string;
    title: string;
    quote: string;
  };
}

export const Slide: React.FC<Props> = ({active, review}) => {
  return (
    <article
      className={
        active === 4 && review.id === 1
          ? 'next-slide'
          : active === review.id
          ? 'active-slide'
          : active + 1 === review.id
          ? 'next-slide'
          : 'prev-slide'
      }
    >
      <img src={review.image} alt={review.name} />
      <div className="info">
        <div className="name">{review.name}</div>
        <div className="title">{review.title}</div>
        <div className="quote">{review.quote}</div>
      </div>
    </article>
  );
};
