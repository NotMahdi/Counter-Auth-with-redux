import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect,Fragment } from 'react';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';

let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector(state=> state.cart);
  const notification = useSelector(state => state.ui.notification)

  //you can do this useEffect in any component you want
  useEffect(()=>{
    
    const SendCartData = async () =>{
     
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'sending...',
        message: 'sending cart data!'
      })
      );
      
      const response = await fetch('https://react-backend-3fc50-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart) // here we send our cart as part of the request to put into database
      });
      
      if(!response.ok){
        throw new Error('sending cart data failed');
      }
      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'sent cart data successfully!'
      })
      );
      
    };
    

    if (isInitial) {
      isInitial = false;
      return;
    }
    
    SendCartData().catch(error =>{
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'error!',
        message: 'sending cart data failed!'
      })
      );
    });
  }, [cart, dispatch]);//the PUT request to firebase database posts data into it and diffrence to "POST" method is the new data will not be added in a List of data but it will override existing data 
// the good thing is that useSelector that sets up a subscription to redux, so when our our redux store changes this App component will be re-executed and we will get the lates state(cart)

  return (
    <Fragment>
    { notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
    <Layout>
      {showCart && <Cart /> /*for some reason showCart should come first before <cart/> */}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
