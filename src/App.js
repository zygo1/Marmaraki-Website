import './App.css';
import Navigation from './components/Navigation';
import Help from './components/Help';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Meteora from './components/Meteora';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/Meteora' element={<Meteora />} />
          <Route path='/Activities' />
          <Route path='/Restaurants' />
          <Route path='/Help' element={<Help />} />
        </Routes>

      </Router>

    </>
  );
}

export default App;
