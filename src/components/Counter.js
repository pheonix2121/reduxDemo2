import classes from './Counter.module.css';
import { useSelector, useDispatch} from 'react-redux';

const Counter = () => {

  const counter = useSelector(state=> state.counter)
  const dispatch = useDispatch();

  function increamentHandle(){
    dispatch({type: 'increament'})
  }
  function decreamentHandle(){
    dispatch({type: 'decreament'})
  }
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={increamentHandle}>Increament By 5</button>
      <button onClick={decreamentHandle}>Decreament By 5</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;