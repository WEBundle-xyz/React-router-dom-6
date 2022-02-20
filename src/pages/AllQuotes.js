import React from 'react';
import QuoteList from '../components/quotes/QuoteList';

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

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_DATA} />;
};

export default AllQuotes;
