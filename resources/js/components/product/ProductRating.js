import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import ProductRatingFilter from './ProductRatingFilter';
import ProductRatingList from './ProductRatingList';

function ProductRating({ id }) {
  return (
    <Card style={{ width: '100%' }}>
      <>
        <ProductRatingFilter id={id} />
        <ProductRatingList id={id} />
      </>
    </Card>
  );
}

export default ProductRating;
