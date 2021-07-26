import React, { useEffect, useState } from 'react';
import {
  Image,
  Row,
  Col,
  Button,
  Typography,
  notification,
  Modal,
  Tooltip
} from 'antd';
import {
  MinusOutlined,
  PlusOutlined,
  CloseOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons';
import PriceTag from '../general/PriceTag';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { deleteFromCart, addQuantity, minusQuantity } from '../../actions/';
import { formatNum, getTotalPriceItems, getImage } from '../../utils/';

const { Title, Text } = Typography;
const { confirm } = Modal;

const btnStyle = {
  width: '100%',
  backgroundColor: '#1f2750',
  borderColor: '#1f2750',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

function CartItem(props) {
  const {
    book_title,
    book_price,
    book_cover_photo,
    discount_price,
    quantity,
    author_name,
    id,
    dispatch,
    cart
  } = props;
  const [redirect, enableRedirect] = useState(false);

  useEffect(async () => {}, []);

  const showNotification = (type, title, message) => {
    notification[type]({
      placement: 'bottomRight',
      message: title,
      description: message,
      duration: 1
    });
  };

  const showDeleteConfirm = () => {
    confirm({
      title: (
        <Text type="secondary">
          Are you sure remove book <Text strong>{book_title}</Text> from cart?
        </Text>
      ),
      icon: <ExclamationCircleOutlined />,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        removeInCart();
      },
      onCancel() {}
    });
  };

  const removeInCart = () => {
    dispatch(deleteFromCart(id));
  };

  const add = () => {
    if (quantity < 8) {
      dispatch(addQuantity(id, 1));
    } else if (quantity === 8) {
      showNotification(
        'warning',
        'Maximum limit to add',
        'Limit to order is between 1 and 8'
      );
    }
  };

  const minus = () => {
    if (quantity !== 1) {
      dispatch(minusQuantity(id));
    } else if (quantity === 1) {
      showDeleteConfirm();
    }
  };

  const viewProduct = () => {
    enableRedirect(true);
  };

  if (redirect) {
    return <Redirect to={`/product/${id}`} />;
  }
  return (
    <>
      <Row
        gutter={[16, 16]}
        className="py-2 d-flex align-items-center justify-content-center"
      >
        <Col span={20} sm={6} md={3} lg={3} xl={3}>
          <Image
            width="100%"
            src={getImage(book_cover_photo)}
            fallback="data:image/png;base64,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"
          />
        </Col>
        <Col span={20} sm={9} md={6} lg={6} xl={6}>
          <Tooltip title="Click to view product details">
            <div onClick={viewProduct} className="link-route-product">
              <h4>{book_title}</h4>
              <span>{author_name}</span>
            </div>
          </Tooltip>
        </Col>
        <Col span={20} sm={9} md={5} lg={4} xl={4}>
          <PriceTag
            discountPrice={discount_price}
            bookPrice={book_price}
            className="d-flex align-items-center"
          />
        </Col>
        <Col
          span={16}
          sm={7}
          md={3}
          lg={4}
          xl={4}
          className="py-2 d-flex align-items-center justify-content-center"
        >
          <Row className="w-100">
            <Col span={7}>
              <Button
                type="primary"
                style={btnStyle}
                onClick={() => minus()}
                icon={<MinusOutlined />}
              ></Button>
            </Col>
            <Col
              span={10}
              className="d-flex align-items-center justify-content-center"
            >
              <Title level={5}>{quantity}</Title>
            </Col>
            <Col span={7}>
              <Button
                type="primary"
                style={btnStyle}
                icon={<PlusOutlined />}
                onClick={() => add()}
              ></Button>
            </Col>
          </Row>
        </Col>
        <Col
          span={22}
          sm={16}
          md={6}
          lg={6}
          xl={6}
          className="d-flex align-items-center justify-content-center"
        >
          <h5>
            Total: $
            {formatNum(
              getTotalPriceItems(book_price, discount_price, quantity)
            )}
          </h5>
        </Col>
        <Col
          span={2}
          sm={1}
          md={1}
          lg={1}
          xl={1}
          className="d-flex align-items-center justify-content-center"
        >
          <Button
            danger
            shape="circle"
            className="d-flex align-items-center justify-content-center"
            icon={<CloseOutlined />}
            onClick={() => showDeleteConfirm()}
          ></Button>
        </Col>
      </Row>
      <hr />
    </>
  );
}

export default connect()(CartItem);
