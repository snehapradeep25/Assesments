import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Route,Routes}
from 'react-router-dom';
import ProductPage from './ProductPage';
import AddProducts from './AddProducts';
import Header from './Header';
import Footer from './Footer';




function App() {
  return (
  <>
  <Header/>
<ProductPage/>
  
  <Routes>
  <Route path='/Product' element={<ProductPage/>}></Route>
    <Route path='/AddProducts' element={<AddProducts/>}></Route>
   <Route path='/Products' element={<ProductPage/>}></Route>
 
   </Routes>
  
  <Footer/>
  </>
  );
}

export default App;