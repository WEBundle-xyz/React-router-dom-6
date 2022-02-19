import { Route, Routes, Navigate } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';
import Comments from './components/comments/Comments';
import PageNotFound from './components/UI/PageNotFound';
import Layout from './components/layout/Layout';
import Contact from './components/contact/Contact';

function App() {
  // const params = useParams();
  // console.log(params.userId);

  return (
    <Layout>
      <Routes>
        <Route path='/*' element={<PageNotFound />}></Route>
        <Route path='/quotes/*' element={<PageNotFound />}></Route>
        <Route path='/' element={<Navigate replace to='/quotes' />}></Route>
        <Route path='/quotes' element={<AllQuotes />}></Route>
        <Route path='/new-quote' element={<NewQuote />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/quotes/:userId/*' element={<QuoteDetail />}>
          <Route path='comments' element={<Comments />}></Route>
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
