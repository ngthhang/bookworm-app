import React from 'react';
import { List, Typography, Space, Divider, Rate } from 'antd';

const { Text } = Typography;

const data = [
  {
    title: 'Ant Design Title 1'
  },
  {
    title: 'Ant Design Title 2'
  },
  {
    title: 'Ant Design Title 3'
  },
  {
    title: 'Ant Design Title 4'
  }
];

export default function ProductRatingList() {
  return (
    <List
      className="w-100 my-2"
      itemLayout="vertical"
      pagination={{
        responsive: true,
        total: 50,
        pageSize: 20,
        style: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={
              <Space wrap split={<Divider type="vertical" />}>
                <Text strong>{item.title}</Text>
                <Rate disabled defaultValue={5} />
              </Space>
            }
            description={
              <Text>
                Ant Design, a design language for background applications, is
                refined by Ant UED Team
              </Text>
            }
          />
          <Text type="secondary">July 5th</Text>
        </List.Item>
      )}
    />
  );
}
