import React from 'react';

function BookGeneralInfo(props) {
  const { name, author, className } = props;
  return (
    <div className={className} style={{ height: '100%' }}>
      <h4>{name}</h4>
      <span>{author}</span>
    </div>
  );
}

export default BookGeneralInfo;
