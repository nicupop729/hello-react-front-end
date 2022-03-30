import { Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';
import './App.css';

const App = () => (
  <Routes>
    <Route exact path="/" element={<h1>Home of greetings</h1>} />
    <Route exact path="/random_greeting" element={<Greeting />} />
  </Routes>
);

export default App;
