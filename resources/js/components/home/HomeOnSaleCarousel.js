import React, { Component } from 'react';
import { Carousel, Row, Col, Spin } from 'antd';
import CardBook from '../general/CardBook';
import CarouselNextButton from './CarouselNextButton';
import CarouselPrevButton from './CarouselPrevButton';
import { getBooksOnSale } from '../../services/book.service';

export default class HomeOnSaleCarousel extends Component {
  constructor(props) {
    super(props);
    this.carousel = React.createRef();
    this.state = {
      booksOnSale: [],
      isLoading: true
    };
  }

  async componentDidMount() {
    const data = await getBooksOnSale();
    this.setState({
      booksOnSale: data,
      isLoading: false
    });
  }

  prev = () => {
    this.carousel.prev();
  };

  next = () => {
    this.carousel.next();
  };

  render() {
    const { booksOnSale, isLoading } = this.state;
    const carouselProps = {
      slidesToScroll: 4,
      slidesToShow: 4,
      dots: false,
      autoplay: true,
      infinite: true,
      className: 'b-0 my-3',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 910,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <Row gutter={[16, 0]}>
        <Col span={2} className="d-flex align-items-center">
          <CarouselPrevButton onClick={this.prev} />
        </Col>
        <Col span={20}>
          {!isLoading ? (
            <Carousel
              dots={false}
              {...carouselProps}
              ref={(node) => (this.carousel = node)}
            >
              {booksOnSale.length > 0 &&
                booksOnSale.map((item) => (
                  <CardBook className="mx-2" {...item} key={item.id} />
                ))}
            </Carousel>
          ) : (
            <div
              className="d-flex align-items-center justify-content-center w-100"
              style={{ height: 400 }}
            >
              <Spin size="large" />
            </div>
          )}
        </Col>
        <Col
          span={2}
          className="d-flex align-items-center justify-content-center"
        >
          <CarouselNextButton onClick={this.next} />
        </Col>
      </Row>
    );
  }
}
