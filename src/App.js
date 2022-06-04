import logo from './logo.svg';
import './App.css';
import Admin from "./pages/Admin/Admin"
import Home from "./pages/Home/Home"
import Signin from "./pages/SignIn/Signin"
import Userinfo from "./pages/UserInfo/Userinfo"
import Contact from "./pages/Contact/Contact"
import About from "./pages/About/About"
import Content from "./pages/Content/Content"
import {Routes,Route} from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
       <Route path='/' exact element={<Home/>}/>
       <Route path='/admin' exact element={<Admin/>}/>
       <Route path='/signin' exact element={<Signin/>}/>
       <Route path='/about' exact element={<About/>}/>
       <Route path='/content' exact element={<Content/>}/>
       <Route path='/contact' exact element={<Contact/>}/>
       <Route path='/Userinfo' exact element={<Userinfo/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
