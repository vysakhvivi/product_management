import './App.css';
import Home from './components/Home';
import Register from './components/Register'
import Login from './components/Login';
import Addproduct from './components/Addproduct';
import Editproduct from './components/Editproduct';
import ListProduct from './components/Listproduct'
import Product from './components/Product';
import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom' 
import { Switch } from '@mui/material';



function App() {

  return (
    <Router>      
      <Routes>
        
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/addproduct' element={<Addproduct/>}/>
        <Route path='/editproduct/:id' element={<Editproduct/>} />
        <Route path='/listproduct' element={<ListProduct/>} />
        <Route path='/product' element={<Product/>} />
      </Routes>
    
    </Router>
  );
}

export default App;
