import React from 'react';
import './App.css';
import {Component} from 'react';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import Navbar from './components/Navbar'
import { Container, Row, Col } from 'reactstrap';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import EditProfile from "./pages/EditProfile";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ErroPage from './pages/Error' ;
import { getProfile} from "./JS/actions/index";
import { getentreprise} from "./JS/actions/indexE";
import PrivateRoute from "./pages/PrivateRoute";
import PrivateEntreprise from "./pages/PrivateEntreprise";
import SignUpCompany from './pages/SignUpCompany';
import LoginEntreprise from "./pages/LoginEntreprise";
import ProfileEntreprise from './pages/ProfileEntreprise';


const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
const isAuthEnt = useSelector((state) => state.entrepriseReducer.isAuthEnt)
  // useEffect(() => {
  //   dispatch(getProfile());
  //   dispatch(getentreprise())

  // }, [isAuth,isAuthEnt]);

    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route exact path="/Register" render={(props) => <Register {...props} />} />
         <Route exact path="/login" render={(props) => <Login {...props} />} />
        <PrivateRoute  exact path="/Home" component={Home} />
        <PrivateEntreprise exact path="/ProfileEntreprise" component={ProfileEntreprise} />
        <Route path="/EditProfile"  component={EditProfile} />
        <Route path="/signupcompany" component={SignUpCompany} />
        <Route path="/LoginEntreprise" component={LoginEntreprise} />

        <Route component={ErroPage}/>
        </Switch>
    
        </BrowserRouter>
        

      </div>
    )
};

export default App;
