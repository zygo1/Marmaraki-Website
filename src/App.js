import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Help from './components/Help';
import Activities from './components/Activities';
import Homepage from './components/Homepage';
import Monasteries from './components/Monasteries';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/Monasteries' element={<Monasteries />} />
          <Route path='/Activities' element={<Activities />} />
          <Route path='/Restaurants' />
          <Route path='/Help' element={<Help />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
