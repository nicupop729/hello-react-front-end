import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRandomGreet } from '../redux/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  const greetings = useSelector((state) => state.greetReducer);

  useEffect(() => {
    dispatch(fetchRandomGreet());
  }, [dispatch]);

  return (
    <div>
      <h5>Random greet for you:</h5>
      <h1>
        <em>{greetings.greeting.body}</em>
      </h1>
      <Link to="/">Home of Greets</Link>
    </div>
  );
};

export default Greeting;
