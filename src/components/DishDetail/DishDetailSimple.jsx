import React from 'react';
import { useParams } from 'react-router-dom';

const DishDetailSimple = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Dish Detail Page</h1>
      <p>Dish ID: {id}</p>
      <p>This is a test page to verify routing is working.</p>
    </div>
  );
};

export default DishDetailSimple;
