import { Route, Routes } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/quotes' exact element={<AllQuotes />}></Route>
        <Route path='/quotes/:quoteId' element={<NewQuote />}></Route>
        <Route path='/new-quote' element={<QuoteDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
