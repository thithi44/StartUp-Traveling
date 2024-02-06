import './App.css';
import Navbar from './Components/Assets/Navbar/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import Home from './Pages/Home';
import Packages from './Pages/Packages';
import Guiders from './Pages/Guiders';
import ContactUs from './Pages/ContactUs';
import LoginSignup from './Pages/LoginSignup';
import HomeB1 from './Components/Assets/HomeB1/HomeB1';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <HomeB1/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/AboutUs' element={<AboutUs/>}/>
      <Route path='/Packages' element={<Packages/>}/>
      <Route path='/Guiders' element={<Guiders/>}/>
      <Route path='/ContactUs' element={<ContactUs/>}/>
      <Route path='/LoginSignup' element={<LoginSignup/>}/>
    </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
