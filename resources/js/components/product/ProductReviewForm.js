import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Card,
  Rate,
  notification,
  Input,
  Button,
  Typography,
  Form
} from 'antd';
import { updateListReview } from '../../actions';
import { submitReview } from '../../services/review.service';

const { TextArea } = Input;
const { Text } = Typography;

function ProductReviewForm(props) {
  const [form] = Form.useForm();
  const { id, dispatch, sortReview } = props;
  const [redirect, enableRedirect] = useState(false);

  const btnStyle = {
    width: '100%',
    backgroundColor: '#1f2750',
    borderColor: '#1f2750',
    color: 'white'
  };

  const bodyCardStype = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start'
  };

  const showNotification = (type, title, message) => {
    notification[type]({
      placement: 'bottomRight',
      message: title,
      description: message
    });
  };

  const onFinish = async (data) => {
    const request = {
      ...data,
      review_details:
        data.review_details !== undefined ? data.review_details : null,
      book_id: id
    };

    console.log(request);

    const res = await submitReview(request);
    showNotification(
      'success',
      'Submit review successfully',
      'Your review has been submitted'
    );
    let temp = sortReview.updateReview;
    onReset();
    dispatch(updateListReview(!temp));
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Card title="Write a Review" bodyStyle={bodyCardStype}>
      <Form
        initialValues={{
          review_title: null,
          review_details: null,
          rating_start: null
        }}
        layout="vertical"
        form={form}
        onFinish={onFinish}
        className="w-100"
      >
        <Form.Item
          label="Add a title"
          name="review_title"
          rules={[
            { required: true, message: 'Please add your review title!' },
            { max: 120, message: 'Title must be maximum 120 characters.' }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Details please! Your review helps other shoppers"
          name="review_details"
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label="Select a rating star"
          name="rating_start"
          className="mb-4"
          rules={[{ required: true, message: 'Please select rating star' }]}
        >
          <Rate />
        </Form.Item>
        <Form.Item>
          <Button style={btnStyle} htmlType="submit" type="primary">
            Submit Review
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

const mapStateToProps = (state) => ({
  sortReview: state.sortReview
});

export default connect(mapStateToProps)(ProductReviewForm);
