import React, { Component } from "react";
import { Carousel, Button, Row, Col } from "antd";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import CardBook from "../general/CardBook";

const contentStyle = {
    height: "300px",
    color: "black",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
};

export default class HomeOnSaleCarousel extends Component {
    render() {
        return (
            <Row className="w-100">
                <Col span={1} className="d-flex align-items-center">
                    <Button
                        className="d-flex justify-content-center align-items-center"
                        size="large"
                        type="default"
                        shape="circle"
                        icon={<CaretLeftOutlined />}
                    />
                </Col>
                <Col span={20} offset={1}>
                    <Carousel className="b-0">
                        <div className="d-flex flex-row align-items-center justify-content-around">
                            <CardBook />
                            <CardBook />
                            <CardBook />
                            <CardBook />
                        </div>
                        <div className="d-flex flex-row align-items-center justify-content-around">
                            <CardBook />
                            <CardBook />
                            <CardBook />
                            <CardBook />
                        </div>
                    </Carousel>
                </Col>
                <Col offset={1} span={1} className="d-flex align-items-center">
                    <Button
                        className="d-flex justify-content-center align-items-center"
                        size="large"
                        type="default"
                        shape="circle"
                        icon={<CaretRightOutlined />}
                    />
                </Col>
            </Row>
        );
    }
}
