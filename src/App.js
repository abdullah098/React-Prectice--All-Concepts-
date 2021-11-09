import { Route, Routes } from 'react-router-dom';
import Navbar from './Layouts/Navbar/navbar.jsx';
import OpctionBar from './Components/optionBar.jsx';
import Hero from './Components/hero.jsx';
import Awards from './Components/awards.jsx';
import Pictures from './Components/pictures';
import SignUp from './Components/signup.jsx';

import './App.css';
import Dashboard from './Components/dashboard.jsx';
import Home from './Components/home.jsx';


function App() {


  var modal = document.getElementById("myModal");
  window.onclick = function (event) {




    if (!event.target.matches('.abc')) {
      var dropdowns = document.getElementById("myDropdown");
      dropdowns.style.display = 'none';

    }

    if (!event.target.matches('.search') && !event.target.matches('.unsplash-input')) {
      document.getElementById("search").style.display = "none";
    }


    if (event.target === modal) {
      modal.style.display = "none";
    }
  }





  return (
    <>

      <Routes>
        <Route path='/' element={<Home />}  ></Route>
        <Route path='/dashboard' element={<Dashboard />}  ></Route>
        <Route exact path='/signup' element={<SignUp />} ></Route>
      </Routes>

      {/* <Redirect from="/" to="/src/App.js" /> */}

    </>
  );
}

export default App;
