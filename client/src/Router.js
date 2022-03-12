import { lazy } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate, useLocation, Outlet } from 'react-router-dom';

import { selectCurrentUser } from './redux/user/user.selectors';
import SignIn from './components/sign-in/sign-in.component';
import SignUp from './components/sign-up/sign-up.component';
import ProductDetails from './pages/product-details/product-details';

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
const CollectionsOverviewContainer = lazy(() =>
  import('./components/collections-overview/collections-overview.container')
);
const CollectionPage = lazy(() =>
  import('./pages/collection/collection.component')
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

  const ProtectedRoute = () => {
    if (!currentUser) {
      return <Navigate to='/auth/signin' state={{ from: location }} replace />;
    }
    return <Outlet />;
  };

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/contactus' element={<ContactUs />} />
      <Route path='/shop' element={<ShopPage />}>
        <Route index element={<CollectionsOverviewContainer />} />
        <Route path='category/:collectionId' element={<CollectionPage />} />
        <Route
          path='category/:collectionId/:productId'
          element={<ProductDetails />}
        />
        <Route path=':productId' element={<ProductDetails />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/order-confirmed' element={<ConfirmOrder />} />
      </Route>
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
