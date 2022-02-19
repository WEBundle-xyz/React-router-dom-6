import React from 'react';
import { Outlet } from 'react-router-dom';

const QuoteDetail = () => {
  return (
    <section>
      <h1>Quote Detaitl Page --> /quotes/first/OUTLET</h1>
      <Outlet />
    </section>
  );
};

export default QuoteDetail;
