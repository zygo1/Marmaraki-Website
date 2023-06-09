import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Help from './components/Help/Help';
import { Activities } from './components/Activities/Activities';
import Homepage from './components/Homepage/Homepage';
import Monasteries from './components/Monasteries/Monasteries';
import Restaurants from './components/Restaurants/Restaurants';


function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/Monasteries' element={<Monasteries />} />
          <Route path='/Activities' element={<Activities />} />
          <Route path='/Restaurants' element={<Restaurants />} />
          <Route path='/Help' element={<Help />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
