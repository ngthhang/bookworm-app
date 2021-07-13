import React, { Component } from "react";
import { Carousel, Row, Col } from "antd";
import CardBook from "../general/CardBook";
import CarouselNextButton from "./CarouselNextButton";
import CarouselPrevButton from "./CarouselPrevButton";

export default class HomeOnSaleCarousel extends Component {
  constructor(props) {
    super(props);
    this.carousel = React.createRef();
  }

  prev = () =>{
    this.carousel.prev();
  }

  next = () =>{
    this.carousel.next();
  }

  render() {
    const carouselProps = {
      slidesToScroll: 4,
      slidesToShow: 4,
      dots: false,
      autoplay: true,
      infinite: true,
      className: "b-0",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
      <Row className="w-100">
        <Col span={1} className="d-flex align-items-center">
          <CarouselPrevButton onClick={this.prev} />
        </Col>
        <Col span={20} offset={1}>
          <Carousel 
            {...carouselProps}
            ref={node => (this.carousel = node)} 
          >
            <CardBook />
            <CardBook />
            <CardBook />
            <CardBook />
            <CardBook />
            <CardBook />
          </Carousel>
        </Col>
        <Col offset={1} span={1} className="d-flex align-items-center">
          <CarouselNextButton onClick={this.next} />
        </Col>
      </Row>
    );
  }
}
