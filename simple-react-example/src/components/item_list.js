import React from 'react';
import Item from './item';

const ItemList = (props) => {
  let keyValue = 0;
  
  const items = props.items.map((item) => {
    return <Item item={item} key={keyValue++} />
  });

  return (
    <ul>
      {items}
    </ul>
  );
};

export default ItemList;
