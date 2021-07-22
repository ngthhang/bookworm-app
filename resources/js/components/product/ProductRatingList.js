import React, { useEffect, useState } from 'react';
import {
  List,
  Typography,
  Space,
  Divider,
  Rate,
  Empty,
  Pagination
} from 'antd';
import { connect } from 'react-redux';
import { changePageInReview } from '../../actions';
import {
  updateList,
  updateListFirst
} from '../../actions/sortReviewListAction';
import {
  getBookByIdAndQueryStr,
  getBookById
} from '../../services/book.service';
import { getQueryStringForReview } from '../../utils';

const { Text } = Typography;

function ProductRatingList(props) {
  const { sortReviewList, sortReview, id, dispatch } = props;
  const [disabled, setDisabled] = useState(true);

  useEffect(async () => {
    const query = await getQueryStringForReview(sortReview);
    console.log(sortReview);
    console.log(query);
    const resFirst = await getBookById(id);
    const res = await getBookByIdAndQueryStr(id, query);
    if (JSON.stringify(resFirst.data.reviews) !== JSON.stringify({})) {
      dispatch(updateListFirst(resFirst.data.reviews));
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    if (JSON.stringify(res.data.reviews) !== JSON.stringify({})) {
      dispatch(updateList(res.data.reviews));
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [sortReview]);

  if (disabled) {
    return (
      <Empty
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ height: 300 }}
      />
    );
  } else {
    const { reviews } = sortReviewList;
    const { current_page, per_page, data, total } = reviews;
    const page = parseInt(per_page);
    return (
      <div>
        <List
          className="w-100 my-2"
          itemLayout="vertical"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={
                  <Space wrap split={<Divider type="vertical" />}>
                    <Text strong>{item.review_title}</Text>
                    <Rate disabled value={item.rating_start} />
                  </Space>
                }
                description={<Text>{item.review_details}</Text>}
              />
              <Text type="secondary">{item.review_date}</Text>
            </List.Item>
          )}
        />
        <Pagination
          defaultCurrent={1}
          current={current_page}
          pageSize={page}
          total={total}
          onChange={(value) => dispatch(changePageInReview(value))}
          className="d-flex align-items-center justify-content-center"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sortReview: state.sortReview,
  sortReviewList: state.sortReviewList
});

export default connect(mapStateToProps)(ProductRatingList);
