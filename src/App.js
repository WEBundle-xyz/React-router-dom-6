import { Route, Routes, Navigate, useParams } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';
import Comments from './components/comments/Comments';
import PageNotFound from './components/UI/PageNotFound';

function App() {
  const params = useParams();
  console.log(params.quoteId);

  return (
    <div>
      <Routes>
        <Route path='/*' element={<PageNotFound />}></Route>
        <Route path='/quotes/*' element={<PageNotFound />}></Route>
        <Route path='/' element={<Navigate replace to='/quotes' />}></Route>
        <Route path='/quotes' element={<AllQuotes />}></Route>
        <Route path='/new-quote' element={<NewQuote />}></Route>
        <Route path='/quotes/' element={<QuoteDetail />}>
          <Route path={'/quotes/comments'} element={<Comments />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
