import React from 'react';
import { useParams } from 'react-router-dom';
const Student = () => {
  const{name} = useParams();

  return (
    <div>
      <p>Name: {name}</p>
    </div>
  );
};

export default Student;