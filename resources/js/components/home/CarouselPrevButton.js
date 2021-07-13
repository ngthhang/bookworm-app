import React from 'react';
import { Button } from 'antd';
import { CaretLeftOutlined } from "@ant-design/icons";

export default function CarouselPrevButton(props){
  const { onClick } = props;
  return (
    <Button
      className="d-flex justify-content-center align-items-center"
      size="large"
      type="default"
      onClick={onClick}
      shape="circle"
      icon={<CaretLeftOutlined />}
    />
  );
}