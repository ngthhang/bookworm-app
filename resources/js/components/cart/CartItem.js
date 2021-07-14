import React from 'react';
import { Image, Row, Col, Button, InputNumber } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import PriceTag from '../general/PriceTag';
import BookGeneralInfo from '../general/BookGeneralInfo';

function CartItem() {
  return (
    <>
      <Row className="py-2 d-flex align-items-center justify-content-center">
        <Col span={7} sm={6} md={3} lg={3} xl={3}>
          <Image
            width="100%"
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Col>
        <Col span={8} sm={9} md={6} lg={6} xl={6}>
          <BookGeneralInfo
            name="Book Title"
            author="Author name"
            className="mx-3"
          />
        </Col>
        <Col span={9} sm={9} md={5} lg={4} xl={4}>
          <PriceTag
            discountPrice={120000}
            normalPrice={12000}
            className="d-flex align-items-center justify-content-center"
          />
        </Col>
        <Col
          span={7}
          sm={7}
          md={3}
          lg={4}
          xl={4}
          className="py-2 d-flex align-items-center justify-content-center"
        >
          <Row className="d-flex align-items-center justify-content-center">
            <Col span={24} sm={12} md={24} lg={12} xl={12}>
              <span>Quantity:</span>
            </Col>
            <Col span={24} sm={12} md={24} lg={12} xl={12}>
              <InputNumber
                min={0}
                max={10}
                size="large"
                defaultValue={3}
                keyboard={false}
                bordered={true}
              />
            </Col>
          </Row>
        </Col>
        <Col
          span={16}
          sm={16}
          md={6}
          lg={6}
          xl={6}
          className="d-flex align-items-center justify-content-center"
        >
          <h5>Total: $12.000</h5>
        </Col>
        <Col
          span={1}
          sm={1}
          md={1}
          lg={1}
          xl={1}
          className="d-flex align-items-center justify-content-center"
        >
          <Button
            type="primary"
            danger
            shape="circle"
            className="d-flex align-items-center justify-content-center"
            icon={<MinusOutlined />}
          ></Button>
        </Col>
      </Row>
      <hr />
    </>
  );
}

export default CartItem;
