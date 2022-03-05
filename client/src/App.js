import '@stripe/stripe-js';
import { useEffect, Suspense } from 'react';
import { useDispatch } from 'react-redux';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { checkUserSession } from './redux/user/user.actions';
import Footer from './components/footer/footer.component';
import { fetchCollectionsStart } from './redux/shop/shop.actions';
import Router from './Router';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <>
      <Header />
      <ErrorBoundary>
        <main className='main__container'>
          <Suspense fallback={<Spinner />}>
            <Router />
          </Suspense>
        </main>
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default App;
