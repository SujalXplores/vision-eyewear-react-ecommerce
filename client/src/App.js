import '@stripe/stripe-js';
import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import Footer from './components/footer/footer.component';

const PageNotFound = lazy(() =>
  import('./pages/error404/pagenotfound.component')
);
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() =>
  import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
);
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const location = useLocation();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  const HideLogin = ({ children }) => {
    if (currentUser) {
      return <Navigate to='/' state={{ from: location }} replace />;
    }
    return children;
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/login' state={{ from: location }} replace />;
    }
    return children;
  };

  return (
    <>
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/shop/*' element={<ShopPage />} />
            <Route
              path='/checkout'
              element={
                <ProtectedRoute>
                  <CheckoutPage />
                </ProtectedRoute>
              }
            />
            <Route
              path='/signin'
              element={
                <HideLogin>
                  <SignInAndSignUpPage />
                </HideLogin>
              }
            />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default App;
