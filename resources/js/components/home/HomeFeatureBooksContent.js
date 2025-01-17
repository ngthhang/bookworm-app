import React, { useEffect, useState } from 'react';
import CardBook from '../general/CardBook';
import { Row, Col, Spin } from 'antd';
import { connect } from 'react-redux';
import {
  getPopularBooks,
  getRecommendedBooks
} from '../../services/book.service';

function HomeFeatureBooksContent({ visibilityFilter }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    let res;
    setLoading(true);
    if (visibilityFilter === 'SHOW_POPULAR') {
      res = await getPopularBooks();
    } else {
      res = await getRecommendedBooks();
    }
    setData(res);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [visibilityFilter]);

  return (
    <Row
      gutter={[16, 24]}
      className="mt-5 d-flex align-items-center justify-content-center"
    >
      {!loading ? (
        data.length > 0 &&
        data.map((item) => (
          <Col
            key={item.id}
            span={22}
            sm={12}
            md={8}
            xl={5}
            lg={6}
            flex={1}
            className="d-flex align-items-center justify-content-center"
          >
            <CardBook {...item} />
          </Col>
        ))
      ) : (
        <Col
          span={24}
          style={{ height: 500 }}
          className="d-flex align-items-center justify-content-center"
        >
          <Spin size="large" />
        </Col>
      )}
    </Row>
  );
}

const mapStateToProps = (state) => ({
  visibilityFilter: state.visibilityFilter
});

export default connect(mapStateToProps)(HomeFeatureBooksContent);
