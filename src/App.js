import { Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';
import Home from './components/Home';
import './App.css';

const App = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/random_greeting" element={<Greeting />} />
  </Routes>
);

export default App;
