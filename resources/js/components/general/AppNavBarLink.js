import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';

const { Text } = Typography;

export default function AppNavBarLink(props) {
  const { className, currentLocation, typeLocation, route, totalCart } = props;
  const isCurrentLocation = currentLocation === typeLocation;
  const textStyle =
    typeLocation.charAt(0).toUpperCase() + typeLocation.slice(1);
  return (
    <Link to={route} className={className}>
      <Text
        strong={isCurrentLocation}
        type={isCurrentLocation ? 'default' : 'secondary'}
      >
        {typeLocation === 'cart'
          ? textStyle + '(' + totalCart + ')'
          : textStyle}
      </Text>
    </Link>
  );
}
