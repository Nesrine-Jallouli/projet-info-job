import React from 'react'
import {Link, Redirect, useHistory, withRouter } from 'react-router-dom'
import {Row, Col, Container, Button } from 'reactstrap'
import Logo from './../images/logo-site.png';
import Login from './../pages/Login';
import LoginEntreprise from './../pages/LoginEntreprise'
import Home from './../pages/Home';
import SignUpCompany from './../pages/SignUpCompany';

import {useSelector} from 'react-redux'


const  Navbar =()=> {


  const isAuth = useSelector(state => state.userReducer.isAuth);
  const isAuthEnt = useSelector(state => state.userReducer.isAuthEnt)
  const history=useHistory()


  const removeToken = () => {
    localStorage.removeItem('token')
    history.push('/login')
    history.push('/loginEntreprise')
    window.location.reload()
  }
 
    return (
<nav className="navbar header-nav navbar-expand-lg background-navbar">

  <div className="container">
    <Link to='/' className="navbar-brand font-navbar">INFO JOBS</Link>
    <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    </button>
        <div>(!isAuth || !isAuthEnt )?
        
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
              <li className="nav-item active ">
              <Link to='/findjobs' className="nav-link text-light font-sub-nav">Offres</Link>
              </li>
          </ul>
            <div className="my-2 my-lg-0">
            {/* <Link to='/login'><button className="btn btn-outline-light btn-sm font-login" type="button" value="Login">Login</button></Link> */}
            <Link to='/Register'><input className="btn btn-dark btn-sm font-login" type="button" value="Condidat"></input></Link>
            <Link to='/signupcompany'><input className="btn btn-dark btn-sm font-login" type="button" value="Entreprise"></input></Link>
          </div>  
          </div>
        </div>
        <div> (isAuth? 
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to='/findjobs' className="nav-link text-light font-sub-nav">Offres</Link>
               </li>
              </ul>
            <div className="my-2 my-lg-0">
            <Link to='/Profile' className="btn btn-danger btn-sm font-login">Profile</Link>  
            <Link to='/login'><button className="btn btn-dark btn-sm font-login" type="button" value="Logout" onClick ={removeToken}>Déconnecter</button></Link>
            </div>    
          </div>
        )</div>
       <div>
         
       </div>
        (isAuthEnt ? 
         
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to='/findjobs' className="nav-link text-light font-sub-nav">Nos Offres</Link>
               </li>
              </ul>
            <div className="my-2 my-lg-0">
            <Link to='/ProfileEntreprise' className="btn btn-danger btn-sm font-login">Profile Entreprise</Link>  
            <Link to='/LoginEntreprise'><button className="btn btn-dark btn-sm font-login" type="button" value="Logout" onClick ={removeToken}>Déconnecter</button></Link>
            </div>    
          </div>
        )

        
  </div>
</nav>

    );
}



export default Navbar 