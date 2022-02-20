import React from 'react';
import { Routes, Route, useParams, Link } from 'react-router-dom';

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_DATA = [
  {
    id: 'q1',
    author: 'Stef',
    text: 'Good engineers always strive to improve',
  },
  {
    id: 'q2',
    author: 'Bob',
    text: 'Tech companies should always innovate',
  },
  {
    id: 'q3',
    author: 'Morrison',
    text: 'No one gets out of here alive',
  },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found</p>;
  }

  return (
    <section>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <div className='centered'>
        <Link className='btn-flat' to={`${params.quoteId}/comments`}>
          Load Comments
        </Link>
      </div>
      <div>
        <h1>The userId is: {params.quoteId}</h1>
      </div>
      <Routes>
        <Route
          path={`${params.quoteId}/comments`}
          element={<Comments />}
        ></Route>
      </Routes>
    </section>
  );
};

export default QuoteDetail;
