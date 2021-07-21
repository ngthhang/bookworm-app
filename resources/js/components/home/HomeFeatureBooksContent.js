import React, { useEffect, useState } from 'react';
import CardBook from '../general/CardBook';
import { Row, Col } from 'antd';
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
    console.log('hello');
    console.log(visibilityFilter);
    if (visibilityFilter === 'SHOW_POPULAR') {
      res = await getPopularBooks();
      console.log(res);
    } else {
      res = await getRecommendedBooks();
      console.log(res);
    }
    setData(res);
    setLoading(false);
  }, [visibilityFilter]);

  console.log(visibilityFilter);

  return (
    <Row
      gutter={[16, 24]}
      className="mt-5 d-flex align-items-center justify-content-center"
    >
      {!loading
        ? data.length > 0 &&
          data.map((item) => (
            <Col
              key={item.id}
              span={24}
              sm={12}
              md={8}
              xl={5}
              lg={6}
              flex={1}
              className="d-flex align-self-stretch h-100"
            >
              <CardBook className="h-100" {...item} />
            </Col>
          ))
        : '...loading'}
    </Row>
  );
}

const mapStateToProps = (state) => ({
  visibilityFilter: state.visibilityFilter
});

export default connect(mapStateToProps)(HomeFeatureBooksContent);
