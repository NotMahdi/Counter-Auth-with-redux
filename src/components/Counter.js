import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter-slice';

const Counter = () => {
  const counter = useSelector(state => state.counter.counterValue);/*the useSelector hook gets the latest state, because every time we use useSelector react-redux
  will set up a subscription to redux store and that makes the whole component to be re-executed to get the latest snapshot of what we need*/
  const showCounter = useSelector(state => state.counter.showCounter)
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }

  const incrementByPayloadHandler = () =>{
    dispatch(counterActions.incrementby5(5)) //{type: Some_Unique_Identifier, payload: 5}
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  const decrementByPayloadHandler = () =>{
    dispatch(counterActions.decrementby5(5))
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
      <button onClick={incrementHandler}>increment</button>
      <button onClick={incrementByPayloadHandler}>increment by 5</button>
      <button onClick={decrementHandler}>decrement</button>
      <button onClick={decrementByPayloadHandler}>decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
