import React, { useEffect, useState } from 'react';
import { Row, Col, Select, Space, Rate, Typography, Divider } from 'antd';
import { connect } from 'react-redux';
import { setShowPage, setFilter, sortByDate, setInit } from '../../actions/';

const { Option } = Select;
const { Title, Text, Link } = Typography;

function ProductRatingFilter(props) {
  const { sortReview, sortReviewList, dispatch, id } = props;
  const { filter, showInPage, currentPage } = sortReview;
  const { reviewsFirst, reviews } = sortReviewList;
  const { total, current_page, per_page } = reviews;
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(true);
    if (JSON.stringify(sortReviewList.reviewsFirst) !== JSON.stringify({})) {
      setDisabled(false);
    }
  }, [id, sortReviewList]);

  const getStart = () => {
    return total > 0 ? (currentPage - 1) * showInPage + 1 : null;
  };

  const getEnd = () => {
    let end = total > 0 ? currentPage * showInPage : null;
    if (end > total) {
      end = total;
    }
    return end;
  };

  const getQuantityRate = (rate) => {
    const { data } = reviewsFirst;
    let result = 0;
    if (data && data.length > 0) {
      data.forEach((item) => {
        if (item.rating_start == rate) {
          result = result + 1;
        }
      });
    }
    return result;
  };

  const calAvgRating = () => {
    let result = 0,
      count = 0;

    [1, 2, 3, 4, 5].forEach((item) => {
      let countRate = getQuantityRate(item);
      result = result + countRate * item;
      count = count + countRate;
    });
    return Math.round(parseFloat(result / count) * 100) / 100;
  };

  const handleShowInPage = (value) => {
    dispatch(setShowPage(value));
  };

  const handleChangeSort = (value) => {
    dispatch(sortByDate(value));
  };

  return (
    <Row gutter={[8, 16]}>
      <Col
        span={24}
        sm={24}
        md={14}
        xl={12}
        lg={14}
        className="d-flex flex-row align-items-center justify-content-start"
      >
        <Title level={4} className="m-0 mr-2">
          Customer Reviews
        </Title>
        <Title level={5} type="secondary" className="mt-2">
          {!disabled && filter !== 'all' ? 'Filtered by' : null}{' '}
          {!disabled && filter !== 'all' ? (
            <Text code strong>
              {filter} Star
            </Text>
          ) : null}
        </Title>
      </Col>
      <Col
        span={24}
        className="d-flex flex-row align-items-center justify-content-start"
      >
        <Title level={4} className="m-0 mr-2">
          {!disabled ? calAvgRating() : 0} Star
        </Title>
        <Rate allowHalf value={calAvgRating()} disabled={true} />
      </Col>
      <Col span={24}>
        <Space split={<Divider type="vertical" />} wrap>
          <Link
            underline
            disabled={disabled}
            onClick={() => dispatch(setFilter('all'))}
          >
            {disabled ? null : reviewsFirst.total}
          </Link>
          {[5, 4, 3, 2, 1].map((item) => (
            <Link
              underline
              key={item}
              disabled={disabled}
              onClick={() => dispatch(setFilter(item))}
            >
              {item} star ({getQuantityRate(item)})
            </Link>
          ))}
        </Space>
      </Col>
      <Col span={24} sm={24} md={10} xl={13} lg={9}>
        <span>
          Showing {getStart()} - {getEnd()} of {!disabled ? reviews.total : 0}{' '}
          reviews
        </span>
      </Col>
      <Col span={24} sm={24} md={14} xl={11} lg={15}>
        <Row
          gutter={[8, 16]}
          className="d-flex align-items-center justify-content-end"
        >
          <Col span={24} sm={17} md={17} xl={16} lg={17}>
            <Select
              disabled={disabled}
              onChange={handleChangeSort}
              defaultValue="NEW_TO_OLD"
              style={{ width: '100%' }}
            >
              <Option value="NEW_TO_OLD">Sort by date: newest to oldest</Option>
              <Option value="OLD_TO_NEW">Sort by date: oldest to newest</Option>
            </Select>
          </Col>
          <Col span={24} sm={7} md={7} xl={8} lg={7}>
            <Select
              disabled={disabled}
              onChange={handleShowInPage}
              defaultValue={showInPage}
              style={{ width: '100%' }}
            >
              <Option value={5}>Show 5</Option>
              <Option value={15}>Show 15</Option>
              <Option value={20}>Show 20</Option>
              <Option value={25}>Show 25</Option>
            </Select>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

const mapStateToProps = (state) => ({
  sortReview: state.sortReview,
  sortReviewList: state.sortReviewList
});

export default connect(mapStateToProps)(ProductRatingFilter);
