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

function ShopFilter({ dispatch, sort }) {
  const { category, author, rating } = sort;
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
  }, [sort]);

  const onFilterCategory = (item) => {
    dispatch(filterByCategory(item));
  };

  const onFilterAuthor = (item) => {
    dispatch(filterByAuthor(item));
  };

  const onFilterRating = (item) => {
    dispatch(filterByRating(item));
  };

  return (
    <Row type="flex" gutter={[8, 8]} className="pb-4">
      <Col span={24}>
        <Text strong>Filter By</Text>
      </Col>
      <Col span={24} sm={24} md={8} xl={24} lg={24}>
        <Card
          size="small"
          headStyle={{ backgroundColor: '#F9F0FF', borderColor: '#d3adf7' }}
          title={
            <Button
              onClick={() => toggleHidingCategory(!hideCategory)}
              style={btnCardHeaderStyle}
              type="link"
            >
              <Text style={{ color: '#531dab' }} strong>
                Category
              </Text>
              {hideCategory ? (
                <CaretDownFilled style={{ color: '#531dab' }} />
              ) : (
                <CaretUpFilled style={{ color: '#531dab' }} />
              )}
            </Button>
          }
          bodyStyle={!hideCategory ? bodyCardStyle : bodyCardHiding}
          style={cardStyle}
        >
          {categories && categories.length > 0 ? (
            categories.map((item) => {
              let cate = item.category_name;
              let cateFirstUpperCase =
                cate.charAt(0).toUpperCase() + cate.slice(1);
              return (
                <Button
                  type="link"
                  className="d-flex"
                  key={item.id}
                  disabled={
                    category !== null &&
                    category !== undefined &&
                    item.category_name === category.category_name
                  }
                  onClick={() => onFilterCategory(item)}
                >
                  <Link className="text-wrap">{cateFirstUpperCase}</Link>
                </Button>
              );
            })
          ) : (
            <Empty />
          )}
        </Card>
      </Col>
      <Col span={24} sm={16} md={8} xl={24} lg={24}>
        <Card
          size="small"
          headStyle={{ backgroundColor: '#e6f7ff', borderColor: '#91d5ff' }}
          title={
            <Button
              onClick={() => toggleHidingAuthor(!hideAuthor)}
              style={btnCardHeaderStyle}
              type="link"
            >
              <Text style={{ color: '#096dd9' }} strong>
                Author
              </Text>
              {hideAuthor ? (
                <CaretDownFilled style={{ color: '#096dd9' }} />
              ) : (
                <CaretUpFilled style={{ color: '#096dd9' }} />
              )}
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
                disabled={
                  author !== null &&
                  author !== undefined &&
                  item.author_name === author.author_name
                }
                onClick={() => onFilterAuthor(item)}
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
          headStyle={{ backgroundColor: '#fffbe6', borderColor: '#ffe58f' }}
          title={
            <Button
              onClick={() => toggleHidingRating(!hideRating)}
              style={btnCardHeaderStyle}
              type="link"
            >
              <Text strong style={{ color: '#d48806' }}>
                Rating Review
              </Text>
              {hideRating ? (
                <CaretDownFilled style={{ color: '#d48806' }} />
              ) : (
                <CaretUpFilled style={{ color: '#d48806' }} />
              )}
            </Button>
          }
          bodyStyle={!hideRating ? bodyCardStyle : bodyCardHiding}
          style={cardStyle}
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <Button
              key={item}
              disabled={
                rating !== null && rating !== undefined && item === rating
              }
              type="link"
              onClick={() => onFilterRating(item)}
            >
              {item} Star
            </Button>
          ))}
        </Card>
      </Col>
    </Row>
  );
}

const mapStateToProps = (state) => ({
  sort: state.sort
});

export default connect(mapStateToProps)(ShopFilter);
