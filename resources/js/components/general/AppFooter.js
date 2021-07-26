import React from 'react';
import { Typography } from 'antd';
import Icon from '../../../assets/footer_icon.svg';

const { Text } = Typography;

export default function AppFooter() {
  return (
    <footer className="w-100 d-flex flex-row align-items-center py-3 px-4">
      <img
        src={Icon}
        alt="React Logo"
        style={{ width: 50, height: 'auto' }}
        className=" img-fluid"
      />
      <div className="d-flex flex-column ml-4">
        <Text style={{ letterSpacing: '1px' }}>BOOKWORM</Text>
        <Text>The Nashtech Rookies</Text>
        <Text>2021</Text>
      </div>
    </footer>
  );
}
