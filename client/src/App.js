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
import SignIn from './components/sign-in/sign-in.component';
import SignUp from './components/sign-up/sign-up.component';
import { fetchCollectionsStart } from './redux/shop/shop.actions';
const ConfirmOrder = lazy(() =>
  import('./pages/confimorder/confirmorder.component')
);
const PageNotFound = lazy(() =>
  import('./pages/error404/pagenotfound.component')
);
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() =>
  import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
);
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const ContactUs = lazy(() => import('./pages/contactus/contactus.component'));

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(checkUserSession());
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  const HideLogin = ({ children }) => {
    if (currentUser) {
      return <Navigate to='/' state={{ from: location }} replace />;
    }
    return children;
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/auth/signin' state={{ from: location }} replace />;
    }
    return children;
  };

  return (
    <>
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <main className='main__container'>
            <Routes>
              <Route index path='/' element={<HomePage />} />
              <Route
                path='contactus'
                element={
                  <ProtectedRoute>
                    <ContactUs />
                  </ProtectedRoute>
                }
              />
              <Route path='shop/*' element={<ShopPage />} />
              <Route path='order-confirmed' element={<ConfirmOrder />} />
              <Route
                path='checkout'
                element={
                  <ProtectedRoute>
                    <CheckoutPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path='auth'
                element={
                  <HideLogin>
                    <SignInAndSignUpPage />
                  </HideLogin>
                }
              >
                <Route path='signin' element={<SignIn />} />
                <Route path='signup' element={<SignUp />} />
              </Route>
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </main>
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default App;
