import React from 'react';

const formatNum = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

function PriceTag(props) {
  const { discountPrice, normalPrice, className } = props;

  if (discountPrice === null) {
    return <span className="card-price">${formatNum(normalPrice)}</span>;
  } else {
    return (
      <div className={className}>
        <span className="card-line-through mr-2">
          ${formatNum(normalPrice)}
        </span>
        <span className="text-danger card-price">
          ${formatNum(discountPrice)}
        </span>
      </div>
    );
  }
}

export default PriceTag;
