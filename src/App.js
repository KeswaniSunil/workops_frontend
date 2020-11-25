import React,{useEffect,useState} from 'react';
import './App.css';
import { BrowserRouter as Router , Route, Switch, Redirect,useLocation,useHistory } from 'react-router-dom';
import SignIn from './components/SignIn';
import PageNotFound from './components/PageNotFound.jsx';
import SignUp from './components/SignUp';
import Paperbase from './components/Paperbase.js';
import Dashboard from './components/Dashboard.js';
import PrivateRoutes from "./PrivateRoutes.js"
import PublicRoutes from "./PublicRoutes.js"

function App() {

  // const {token}=useSelector(state => state.AuthReducer);
  // let location = useLocation();
  // let history=useHistory();
  // useEffect(()=>{
  //   if(!localStorage.getItem("token")){
  //     history.push("/signin");
  //   }
  // },[location]);  

  return (
    <div className="app">
      <Router>
        <Switch>
          {/* <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/" exact render={() => <Redirect to="/dashboard" />} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/**" component={PageNotFound} /> */}

          {/* Use of excat attribute :
           -suppose you have specified  path="/" component="landingPage" now anytime to provide paths like "/" or "/page2" 
            "/page2/page3" in all this cases it will open landing page only coz it will just see that "/" is present in url.
            Eg 2: 
            suppose you have specified  path="/page" component="landingPage" now anytime to provide paths like "/page" or "/page/page2" 
            "/page/page2/page3" in all this cases it will open landing page only coz it will just see that "/page" is present in url.
            So hence to prevent such behavior and to make it understand that only render landingPage when url is "/page" we use exact attr.
           */}
          <Route path="/" exact render={() => <Redirect to="/signin"/>} />
          <PublicRoutes path="/signin" exact component={SignIn} />          
          <PublicRoutes path="/signup" exact component={SignUp} />
          {/* <PrivateRoutes path="/dashboard" exact component={Paperbase} /> */}
          <PrivateRoutes path="/dashboard" exact component={Paperbase} />
          <PrivateRoutes path="/projects" exact component={Paperbase} />
          <PrivateRoutes path="/backlog" exact component={Paperbase} />
          <PrivateRoutes path="/projectsettings" exact component={Paperbase} />
          <Route path="/*" component={PageNotFound} />
        </Switch>
      </Router>      
    </div>
  );
}

export default App;