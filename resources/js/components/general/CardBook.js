import React from 'react';
import { Image } from 'antd';
import PriceTag from './PriceTag';
import BookGeneralInfo from './BookGeneralInfo';

export default function CardBook() {
  return (
    <div className="card-book">
      <Image
        width="100%"
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
      <BookGeneralInfo className="p-3" name="Book Title" author="Author name" />
      <PriceTag
        discountPrice={15000}
        normalPrice={12000}
        className="bg-light p-3"
      />
    </div>
  );
}
