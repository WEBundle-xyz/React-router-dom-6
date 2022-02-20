import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };
  return <QuoteForm addAddQuote={addQuoteHandler} />;
};

export default NewQuote;
