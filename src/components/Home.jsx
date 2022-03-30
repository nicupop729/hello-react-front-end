import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = () => (
  <div>
    <h1>Home of Greetings</h1>
    <Link to="/random_greeting">Get a Random Greet</Link>
  </div>
);

export default Greeting;
