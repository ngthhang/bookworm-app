import React from 'react';
import {Image} from 'antd';

export default function CardBook(){
  return(
    <div className='card-book'>
      <Image
        width="100%"
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
      <div className="p-3">
        <h4>Book Title</h4>
        <span>Author name</span>
      </div>
      <div className="bg-light p-3">
        <span className="card-line-through mr-2">$1.09</span>
        <span className="card-price">$1.09</span>
      </div>
    </div>
  )
};