import React from 'react';
import { Row, Col, Typography, Image } from 'antd';

const { Title, Paragraph, Text } = Typography;

export default function ProductInfo() {
  return (
    <Row gutter={[32, 8]}>
      <Col
        span={24}
        sm={9}
        md={8}
        xl={8}
        lg={8}
        className="d-flex flex-column align-items-end justify-content-start"
      >
        <Image
          width="100%"
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        <Text type="secondary" className="pt-3">
          By (author) <Text strong>ngthhang</Text>
        </Text>
      </Col>
      <Col span={24} sm={15} md={16} xl={16} lg={16}>
        <Typography>
          <Title level={2}>Book Title</Title>
          <Paragraph>
            In the process of internal desktop applications development, many
            different design specs and implementations would be involved, which
            might cause designers and developers difficulties and duplication
            and reduce the efficiency of development.
          </Paragraph>
          <Paragraph>
            After massive project practice and summaries, Ant Design, a design
            language for background applications, is refined by Ant UED Team,
            which aims to
            <Text strong>
              uniform the user interface specs for internal background projects,
              lower the unnecessary cost of design differences and
              implementation and liberate the resources of design and front-end
              development
            </Text>
            .
          </Paragraph>
          <Paragraph>
            We supply a series of design principles, practical patterns and high
            quality design resources (<Text code>Sketch</Text> and{' '}
            <Text code>Axure</Text>), to help people create their product
            prototypes beautifully and efficiently.
          </Paragraph>
        </Typography>
      </Col>
    </Row>
  );
}
