import { Route, Routes, Navigate, useParams } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';
import Comments from './components/comments/Comments';
import PageNotFound from './components/UI/PageNotFound';
import Layout from './components/layout/Layout';
import Contact from './components/contact/Contact';

function App() {
  let params = useParams();
  console.log(params.userId);

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Navigate replace to='/quotes' />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
        <Route path='/quotes' element={<AllQuotes />}></Route>
        <Route path='/quotes/:userId/' element={<QuoteDetail />}>
          <Route path='comments' element={<Comments />}></Route>
        </Route>
        <Route path='/new-quote' element={<NewQuote />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
