import React from 'react';
import { useParams, Outlet } from 'react-router-dom';

const QuoteDetail = () => {
  const params = useParams();
  return (
    <section>
      <h1>Quote Detaitl Page --> /quotes/first/OUTLET</h1>
      <p style={{ color: 'red', margin: '6rem', fontSize: '4rem' }}>
        {params.userId}
      </p>
      <Outlet />
    </section>
  );
};

export default QuoteDetail;
