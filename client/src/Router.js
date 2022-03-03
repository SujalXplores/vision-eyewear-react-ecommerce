import { lazy } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import { selectCurrentUser } from './redux/user/user.selectors';
import SignIn from './components/sign-in/sign-in.component';
import SignUp from './components/sign-up/sign-up.component';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const Profile = lazy(() => import('./pages/profile/profile.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const ContactUs = lazy(() => import('./pages/contactus/contactus.component'));
const ConfirmOrder = lazy(() =>
  import('./pages/confimorder/confirmorder.component')
);
const PageNotFound = lazy(() =>
  import('./pages/error404/pagenotfound.component')
);
const SignInAndSignUpPage = lazy(() =>
  import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
);

const Router = () => {
  const location = useLocation();
  const currentUser = useSelector(selectCurrentUser);

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
    <Routes>
      <Route index path='/' element={<HomePage />} />
      <Route path='contactus' element={<ContactUs />} />
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
        path='profile'
        element={
          <ProtectedRoute>
            <Profile />
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
  );
};

export default Router;
