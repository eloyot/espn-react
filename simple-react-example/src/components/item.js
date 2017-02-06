import React from 'react';

const Item = (props) => {
  return (
      <li>
        <div>
          {props.item}
        </div>
      </li>
  );
};

export default Item;
