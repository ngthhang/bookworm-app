import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Button, Empty, Typography } from 'antd';
import { CaretDownFilled, CaretUpFilled } from '@ant-design/icons';
import { connect } from 'react-redux';
import {
  filterByAuthor,
  filterByCategory,
  filterByRating
} from '../../actions';
import { getAllAuthors } from '../../services/author.service';
import { getAllCategories } from '../../services/category.service';

const { Text, Link } = Typography;

const cardStyle = {
  width: '100%'
};

const btnCardHeaderStyle = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: 'black'
};

const bodyCardStyle = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  alignItems: 'flex-start',
  justifyContent: 'center'
};

const bodyCardHiding = {
  display: 'none'
};

function ShopFilter({ dispatch }) {
  const [hideAuthor, toggleHidingAuthor] = useState(true);
  const [hideRating, toggleHidingRating] = useState(true);
  const [hideCategory, toggleHidingCategory] = useState(true);
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    const authorData = await getAllAuthors();
    const categoriesData = await getAllCategories();
    setAuthors(authorData);
    setCategories(categoriesData);
  }, []);

  return (
    <Row type="flex" gutter={[8, 16]} className="pb-4">
      <Col span={24}>
        <span>Filter By</span>
      </Col>
      <Col span={24} sm={24} md={8} xl={24} lg={24}>
        <Card
          size="small"
          title={
            <Button
              onClick={() => toggleHidingCategory(!hideCategory)}
              style={btnCardHeaderStyle}
              type="link"
            >
              <Text strong>Category</Text>
              {hideCategory ? <CaretDownFilled /> : <CaretUpFilled />}
            </Button>
          }
          bodyStyle={!hideCategory ? bodyCardStyle : bodyCardHiding}
          style={cardStyle}
        >
          {categories && categories.length > 0 ? (
            categories.map((item) => (
              <Button
                type="link"
                className="d-flex"
                key={item.id}
                onClick={() => dispatch(filterByCategory(item))}
              >
                <Link className="text-wrap">{item.category_name}</Link>
              </Button>
            ))
          ) : (
            <Empty />
          )}
        </Card>
      </Col>
      <Col span={24} sm={16} md={8} xl={24} lg={24}>
        <Card
          size="small"
          title={
            <Button
              onClick={() => toggleHidingAuthor(!hideAuthor)}
              style={btnCardHeaderStyle}
              type="link"
            >
              <Text strong>Author</Text>
              {hideAuthor ? <CaretDownFilled /> : <CaretUpFilled />}
            </Button>
          }
          bodyStyle={!hideAuthor ? bodyCardStyle : bodyCardHiding}
          style={cardStyle}
        >
          {authors && authors.length > 0 ? (
            authors.map((item) => (
              <Button
                type="link"
                key={item.id}
                className="my-1"
                onClick={() => dispatch(filterByAuthor(item))}
              >
                <Link className="text-wrap">{item.author_name}</Link>
              </Button>
            ))
          ) : (
            <Empty />
          )}
        </Card>
      </Col>
      <Col span={24} sm={8} md={8} xl={24} lg={24}>
        <Card
          size="small"
          title={
            <Button
              onClick={() => toggleHidingRating(!hideRating)}
              style={btnCardHeaderStyle}
              type="link"
            >
              <Text strong>Rating Reviews</Text>
              {hideRating ? <CaretDownFilled /> : <CaretUpFilled />}
            </Button>
          }
          bodyStyle={!hideRating ? bodyCardStyle : bodyCardHiding}
          style={cardStyle}
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <Button
              key={item}
              type="link"
              onClick={() => dispatch(filterByRating(item))}
            >
              {item} Star
            </Button>
          ))}
        </Card>
      </Col>
    </Row>
  );
}

export default connect()(ShopFilter);
