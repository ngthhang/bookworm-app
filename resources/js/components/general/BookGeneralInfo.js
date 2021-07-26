import React from 'react';

function BookGeneralInfo(props) {
  const { name, author, className } = props;
  const strimStr =
    name !== undefined && name !== null ? name.substring(0, 30) + '...' : null;
  return (
    <div className={className}>
      <h4 className="text-wrap">
        {name && name.length > 33 ? strimStr : name}
      </h4>
      <span>{author}</span>
    </div>
  );
}

export default BookGeneralInfo;
