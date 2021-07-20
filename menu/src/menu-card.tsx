import React from 'react';

interface Props {
  menu: {
    id: number;
    title: string;
    category: string;
    price: number;
    img: string;
    desc: string;
  };
}

export const MenuCard: React.FC<Props> = ({menu}) => {
  const {title, img, price, desc} = menu;
  return (
    <div className="menu-card">
      <img src={img} alt={title} />
      <div>
        <header>
          <h5 className="menu-title">{title}</h5>
          <span className="menu-price">${price.toFixed(0)}</span>
        </header>
        <p className="menu-description">{desc}</p>
      </div>
    </div>
  );
};
