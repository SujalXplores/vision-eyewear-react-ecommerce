import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { firestore } from '../../firebase/firebase.utils';
// import styles from './oder-history.module.css';

const OrderHistory = () => {
  const currentUser = useSelector(selectCurrentUser);
  const [state, setState] = useState([]);

  useEffect(() => {
    const q = query(
        collection(firestore, 'orders'),
        where('email', '==', currentUser.email)
    );

    const unsubscribeOrders = onSnapshot(q, (snapshot) => {
        let orders = [];
        snapshot.forEach((doc) => orders.push(doc.data()));
        console.log('Orders of ' + currentUser.email, orders);
        setState(orders);
    }, (error) => {
        console.log(error, 'Error fetching orders!!');
    });

    return unsubscribeOrders;
  }, [currentUser.email]);

  return (
    <div>{state && 'Check Console '}</div>
  )
}

export default OrderHistory;