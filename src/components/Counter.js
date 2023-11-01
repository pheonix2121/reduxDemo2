import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/reduxFile';

const Counter = () => {

  
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.showCounter)

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  const incrementCounterHandler = () => {
    dispatch(counterActions.increment())
  }

  const increaseCounterHandler = () => {
    dispatch(counterActions.increase(5))
  }

  const decrementCounterHandler = () => {
    dispatch(counterActions.decrement())
  }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementCounterHandler}>Decreament</button>
        <button onClick={increaseCounterHandler}>Increase By 5</button>
        <button onClick={incrementCounterHandler}>Increament</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;