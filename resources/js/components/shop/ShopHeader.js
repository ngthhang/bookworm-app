import React from 'react';
import { Typography, Tag } from 'antd';
import { connect } from 'react-redux';
import {
  filterByAuthor,
  filterByCategory,
  filterByRating
} from '../../actions';
const { Title } = Typography;

function ShopHeader({ sort, dispatch }) {
  const { category, author, rating } = sort;
  const category_name =
    category !== null && category !== undefined ? category.category_name : null;
  return (
    <>
      <div className="d-flex flex-row align-items-center justify-content-start">
        <Title level={2} className="mb-0 mr-2">
          Books
        </Title>
        {category || author || rating ? (
          <Title level={4} className="mt-2 mb-0" type="secondary">
            Filtered by
          </Title>
        ) : null}

        {category !== null && category !== undefined ? (
          <Tag
            closable
            onClose={() => dispatch(filterByCategory(null))}
            color="purple"
            className="mt-2 mx-2 px-2 py-1 d-flex align-items-center"
          >
            Category:{' '}
            {category_name.charAt(0).toUpperCase() + category_name.slice(1)}
          </Tag>
        ) : null}

        {author !== null && author !== undefined ? (
          <Tag
            closable
            onClose={() => dispatch(filterByAuthor(null))}
            color="blue"
            className="mt-2 mx-2 px-2 py-1 d-flex align-items-center"
          >
            Author: {author.author_name}
          </Tag>
        ) : null}

        {rating !== null && rating !== undefined ? (
          <Tag
            closable
            color="gold"
            onClose={() => dispatch(filterByRating(null))}
            className="mt-2 mx-2 px-2 py-1 d-flex align-items-center"
          >
            Rating: {rating} star
          </Tag>
        ) : null}
      </div>
      <hr />
    </>
  );
}

const mapStateToProps = (state) => ({
  sort: state.sort
});

export default connect(mapStateToProps)(ShopHeader);
