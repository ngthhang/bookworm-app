import React from 'react';

const formatNum = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

function PriceTag(props) {
  const { discountPrice, bookPrice, className } = props;
  if (discountPrice === null || discountPrice === undefined) {
    return (
      <div className={className}>
        <span className="card-price">${formatNum(bookPrice)}</span>
      </div>
    );
  } else {
    return (
      <div className={className}>
        <span className="card-line-through mr-2">${formatNum(bookPrice)}</span>
        <span className="text-danger card-price">
          ${formatNum(discountPrice)}
        </span>
      </div>
    );
  }
}

export default PriceTag;
