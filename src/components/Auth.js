import classes from './Auth.module.css';
import { authActions } from '../store/auth-slice';
import { useDispatch } from 'react-redux';
import {fireStore} from '../firebase';
import { useRef } from 'react';
import { addDoc, collection } from 'firebase/firestore';
const Auth = () => {

  const emailRef = useRef()
  const PassRef = useRef()
  const dispatch = useDispatch();
  const ref = collection(fireStore, 'users')
  const logInHandler = async (event)=>{
    event.preventDefault();
    console.log(emailRef.current.value, PassRef.current.value)

    let data = {
      email: emailRef.current.value,
      password: PassRef.current.value,
    }

    try{
      addDoc(ref, data)
      dispatch(authActions.logIn())
    }
    catch(error){
      console.log(error);
    }
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={logInHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={emailRef}/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={PassRef} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
