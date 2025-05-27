import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import HomePage from './pages/HomePage.js';
import CartPage from './pages/CartPage.js';

const App = () => {
  return <>
  <Navbar/>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/cart' element={<CartPage/>}/>
  </Routes>
  </>;
};

export default App;
