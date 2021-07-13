import React, { Component } from 'react';
import CardBook from '../general/CardBook';
import { Row, Col } from 'antd';

export default class HomeFeatureBooksContent extends Component {
  render() {
    return (
      <Row className='mt-5 d-flex align-items-center justify-content-center'>
        <Col span={24} sm={12} md={8} xl={5} lg={6}>
          <CardBook />
        </Col>
        <Col span={24} sm={12} md={8} xl={5} lg={6}>
          <CardBook />
        </Col>
        <Col span={24} sm={12} md={8} xl={5} lg={6}>
          <CardBook />
        </Col>
        <Col span={24} sm={12} md={8} xl={5} lg={6}>
          <CardBook />
        </Col>
        <Col span={24} sm={12} md={8} xl={5} lg={6}>
          <CardBook />
        </Col>
        <Col span={24} sm={12} md={8} xl={5} lg={6}>
          <CardBook />
        </Col>
        <Col span={24} sm={12} md={8} xl={5} lg={6}>
          <CardBook />
        </Col>
        <Col span={24} sm={12} md={8} xl={5} lg={6}>
          <CardBook />
        </Col>
      </Row>
    )
  }
};
