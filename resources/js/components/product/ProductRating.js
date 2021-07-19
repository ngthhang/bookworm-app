import React from 'react';
import { Card } from 'antd';
import ProductRatingFilter from './ProductRatingFilter';
import ProductRatingList from './ProductRatingList';

export default function ProductRating() {
  return (
    <Card style={{ width: '100%' }}>
      <ProductRatingFilter />
      <ProductRatingList />
    </Card>
  );
}
