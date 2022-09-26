import './App.css';
import Home from './components/Home';
import Register from './components/Register'
import Login from './components/Login';
import Addproduct from './components/Addproduct';
import Editproduct from './components/Editproduct';
import ListProduct from './components/Listproduct'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom' 



function App() {

  return (
    <Router>      
      <Routes>
        
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/add' element={<Addproduct/>}/>
        <Route path='./edit' element={<Editproduct/>} />
        <Route path='./list' element={<ListProduct/>} />
      </Routes>
    
    </Router>
  );
}

export default App;
