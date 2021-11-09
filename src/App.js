import { Route, Switch } from 'react-router-dom';
import SignUp from './Components/signup.jsx';
import { ProtectedRoute } from './Routes/ProtecedRoutes';
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

      <Switch>
        
        {/* <Route path='/dashboard' exact component={Dashboard }  ></Route> */}
        <ProtectedRoute path='/dashboard' exact component={Dashboard }  ></ProtectedRoute>
        <Route path='/signup' exact component={SignUp } ></Route>
        <Route path='/' component={Home }  ></Route>
        
      </Switch>

      {/* <Redirect from="/" to="/src/App.js" /> */}

    </>
  );
}

export default App;
