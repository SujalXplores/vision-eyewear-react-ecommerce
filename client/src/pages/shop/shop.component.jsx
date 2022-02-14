import { useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import Spinner from '../../components/spinner/spinner.component';
import './shop.styles.css';

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/collections-overview.container')
);

const CollectionPageContainer = lazy(() =>
  import('../collection/collection.container')
);

export const ShopPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div className='shop-page-container'>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route
            path='/'
            element={<CollectionsOverviewContainer />}
          />
          <Route
            path=':collectionId'
            element={<CollectionPageContainer />}
          />
        </Routes>
      </Suspense>
    </div>
  );
};

export default ShopPage;
