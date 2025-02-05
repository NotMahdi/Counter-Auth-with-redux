import classes from './Header.module.css';
import { authActions } from '../store/auth-slice';
import { useDispatch,useSelector } from 'react-redux';

const Header = () => {
  const isAuth = useSelector(state=> state.auth.isAuthenticated)
  const dispatch = useDispatch();
  const logOut = ()=>{
    dispatch(authActions.logOut())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isAuth && <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logOut}>Logout</button>
          </li>
        </ul>}
        
      </nav>
    </header>
  );
};

export default Header;
