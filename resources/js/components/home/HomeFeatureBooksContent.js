import React, { Component } from 'react';
import CardBook from '../general/CardBook';
import { Row, Col } from 'antd';

export default class HomeFeatureBooksContent extends Component {
  render() {
    return (
      <Row className='w-100 mt-5' align='center'>
        <Col span={20}>
          <div className="d-flex flex-row align-items-center justify-content-around">
            <CardBook />
            <CardBook />
            <CardBook />
            <CardBook />
          </div>
          <div className="d-flex flex-row align-items-center justify-content-around">
            <CardBook />
            <CardBook />
            <CardBook />
            <CardBook />
          </div>
        </Col>
      </Row>
    )
  }
};
