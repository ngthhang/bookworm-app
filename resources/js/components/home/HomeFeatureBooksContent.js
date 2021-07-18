import React, { Component } from 'react';
import CardBook from '../general/CardBook';
import { Row, Col } from 'antd';

export default function HomeFeatureBooksContent() {
  const children = [];
  for (let i = 0; i < 31; i++) {
    children.push(
      <Col key={i} key={i} span={24} sm={12} md={8} xl={5} lg={6}>
        <CardBook />
      </Col>
    );
  }

  return (
    <Row
      gutter={[16, 24]}
      className="mt-5 d-flex align-items-center justify-content-center"
    >
      {children}
    </Row>
  );
}
