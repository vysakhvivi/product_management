import './App.css';
import Home from './components/Home';
import Register from './components/Register'
import Login from './components/Login';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom' 

function App() {
  return (
    <Router>

      <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
      </Routes>
    
    </Router>
  );
}

export default App;
