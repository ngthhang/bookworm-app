import React from 'react';
import Icon from '../../../assets/bookworm_icon.svg';

export default function AppFooter() {
  return (
    <footer className="w-100 d-flex flex-row align-items-center py-3 px-4">
      <img
        src={Icon}
        alt="React Logo"
        style={{ width: 70, height: 20 }}
        className=" img-fluid"
      />
      <div className="d-flex flex-column ml-4">
        <span>BOOKWORM</span>
        <span>Address</span>
        <span>Code</span>
      </div>
    </footer>
  );
}
