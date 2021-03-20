import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

import background from '../src/images/shakil-riders.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Heder from './Components/Heder/Heder';
import Destintion from './Components/Destintion/Destintion';






function App() {



  return (
    <div className="App" style={{ backgroundImage: 'url(' + background + ')' }}>
     {/* <Heder></Heder> */}
   
      <Router>
     
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
          <Route path="/destintioon">
            <Destintion></Destintion>
          </Route>
        </Switch>
      </Router>


     

  </div>
  );
}

export default App;
