import React, { useState } from 'react';
import { Card, Rate, Form, Input, Button, Typography } from 'antd';

const { TextArea } = Input;
const { Text } = Typography;

export default function ProductReviewForm() {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [rating, setRating] = useState(0);

  const btnStyle = {
    width: '100%',
    backgroundColor: '#1f2750',
    borderColor: '#1f2750',
    color: 'white'
  };

  const bodyCardStype = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start'
  };

  return (
    <Card title="Write a review" bodyStyle={bodyCardStype}>
      <Text>Add a title</Text>
      <Input
        className="my-3"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Text>Details please! Your review helps other shoppers</Text>
      <TextArea
        rows={4}
        className="my-3"
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
      />
      <Text>Select a rating star</Text>
      <Rate
        className="mt-2 mb-3"
        onChange={(value) => setRating(value)}
        value={rating}
      />
      <Button style={btnStyle} type="primary">
        Submit Review
      </Button>
    </Card>
  );
}
