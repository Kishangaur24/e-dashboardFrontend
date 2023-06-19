
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import SignUp from './component/SignUp/SignUp';
import PrivateComponent from './component/PrivateComponent/PrivateComponent';

function App() {
  return (
    <div className="App">

<Navbar/>
 <Routes>
    
    <Route element={<PrivateComponent/>}>
    <Route path='/' element={<h1>product wala page</h1>}/>
    <Route path='/add' element={<h1>add wala page</h1>}/>
    <Route path='/update' element={<h1>update product</h1>}/>
    <Route path='/logout' element={<h1>logout</h1>}/>
    <Route path='/profile' element={<h1>profile wala page</h1>}/>
    </Route>
    <Route path='/signup' element={<SignUp/>}/>
  </Routes>
    <Footer/>
     
    </div>
  );
}

export default App;
