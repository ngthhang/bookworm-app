import React, { useEffect } from 'react';
import { Row, Col, Select, Pagination, Empty } from 'antd';
import CardBook from '../general/CardBook';
import { connect } from 'react-redux';
import {
  setSortType,
  setShowPage,
  sortTypes,
  updateList,
  changeCurrentPage
} from '../../actions/';
import { getBooksByFilter } from '../../services/book.service';
import { getQueryString } from '../../utils';

const { Option } = Select;
const {
  SORT_BY_SALES,
  SORT_BY_POPULAR,
  SORT_BY_LOW_TO_HIGH,
  SORT_BY_HIGH_TO_LOW
} = sortTypes;

function ShopSearchResults({ dispatch, sort, sortList }) {
  const { books, totalBooks } = sortList;
  const { perPage, currentPage, sortType } = sort;
  let start = totalBooks > 0 ? (currentPage - 1) * perPage + 1 : null;
  let end = totalBooks > 0 ? currentPage * perPage + 1 : null;
  if (end > totalBooks) {
    end = totalBooks;
  }

  useEffect(async () => {
    const query = await getQueryString(sort);
    console.log(query);
    const res = await getBooksByFilter(query);
    const { data } = res;
    dispatch(updateList(data));
    console.log(data);
  }, [sort]);

  const handleChangeSort = (value) => {
    dispatch(setSortType(value));
  };

  const handleChangeShowPage = (value) => {
    dispatch(setShowPage(value));
  };

  const onChangePage = (value) => {
    dispatch(changeCurrentPage(value));
  };

  console.log(books);

  return (
    <Row gutter={[8, 16]}>
      <Col span={24} sm={24} md={12} xl={12} lg={12}>
        <span>
          Showing {start} - {end} of {totalBooks} books
        </span>
      </Col>
      <Col span={24} sm={24} md={12} xl={12} lg={12}>
        <Row
          gutter={[8, 0]}
          className="d-flex align-items-center justify-content-end"
        >
          <Col span={14} sm={14} md={14} xl={10} lg={11}>
            <Select
              defaultValue={sortType}
              style={{ width: '100%' }}
              onChange={handleChangeSort}
            >
              <Option value={SORT_BY_SALES}>Sort by on sale</Option>
              <Option value={SORT_BY_POPULAR}>Sort by popularity</Option>
              <Option value={SORT_BY_LOW_TO_HIGH}>Sort by low to high</Option>
              <Option value={SORT_BY_HIGH_TO_LOW}>Sort by high to low</Option>
            </Select>
          </Col>
          <Col span={10} sm={10} md={10} xl={6} lg={7}>
            <Select
              defaultValue={perPage}
              style={{ width: '100%' }}
              onChange={handleChangeShowPage}
            >
              <Option value={5}>Show 5</Option>
              <Option value={15}>Show 15</Option>
              <Option value={20}>Show 20</Option>
              <Option value={25}>Show 25</Option>
            </Select>
          </Col>
        </Row>
      </Col>
      <Col span={24} style={{ minHeight: '100%' }}>
        <Row gutter={[24, 32]}>
          {books && books.length > 0 ? (
            books.map((item) => (
              <Col key={item.id} span={24} sm={12} md={8} xl={6} lg={6}>
                <CardBook {...item} />
              </Col>
            ))
          ) : (
            <Col
              className="d-flex align-items-center justify-content-center"
              style={{ minHeight: '30vh' }}
              span={24}
            >
              <Empty />
            </Col>
          )}
        </Row>
      </Col>
      <Col
        span={24}
        className="d-flex align-items-center justify-content-center mt-3 mb-5 pb-5"
      >
        {totalBooks > 0 ? (
          <Pagination
            showSizeChanger={false}
            current={currentPage}
            defaultCurrent={1}
            total={totalBooks}
            pageSize={perPage}
            onChange={onChangePage}
          />
        ) : null}
      </Col>
    </Row>
  );
}

const mapStateToProps = (state) => ({
  sort: state.sort,
  sortList: state.sortList
});

export default connect(mapStateToProps)(ShopSearchResults);
