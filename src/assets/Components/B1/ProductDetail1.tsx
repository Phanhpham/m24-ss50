import React from 'react';
import { useParams } from 'react-router-dom';
const ProductDetail = () => {
  const{id} = useParams();

  return (
    <div>
      <p>ID: {id}</p>
    </div>
  );
};

export default ProductDetail;