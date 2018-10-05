import React from 'react';

const ItemDetail = ({itemId, items}) => {
  const item = items[itemId];
  return (
    <div>
      <li>Name: {item.name}</li>
      <li>Price: {item.name}</li>
      <li>Happiness: {item.name}</li>
    </div>
  );
};

export default ItemDetail;
