import { stringify } from "querystring";
import React , {useEffect} from "react";
import { useSelector ,useDispatch } from "react-redux";
import {getentreprise} from "../JS/actions/indexE"
import {Link} from 'react-router-dom'
import Footer from "../components/Footer";
import './Profile.css'
const ProfileEntreprise = () => {
  const entreprise = useSelector((state) => state.userReducer.entreprise);
  const loading = useSelector((state) => state.userReducer.loading);

const dispatch=useDispatch()
  const isAuthEnt = useSelector((state) => state.userReducer.isAuthEnt);

  useEffect(() => {
    dispatch(getentreprise());
  }, [isAuthEnt]);

 

  return (
    <div>{loading ? <h1>Please wait </h1> : 

      <div className="row gutters-sm">
      <div className="col-md-4 mb-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-column align-items-center text-center">
              <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
              <div className="mt-3">
                <h4>{entreprise.name}</h4>
                {/* <p className="text-secondary mb-1">{entreprise.}</p>
                <p className="text-muted font-size-sm">{JSON.stringify(user.adresse)}</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card mb-3">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Nom</h6>
              </div>
              <div className="col-sm-9 text-secondary">
             {entreprise.name}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Email</h6>
              </div>
              <div className="col-sm-9 text-secondary">
              {entreprise.email}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Phone</h6>
              </div>
              <div className="col-sm-9 text-secondary">
              {entreprise.phoneNumber}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Mobile</h6>
              </div>
              <div className="col-sm-9 text-secondary">
              {entreprise.mobileNumber}
              </div>
            </div>
            <hr />

 
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Adress</h6>
              </div>
              <div className="col-sm-9 text-secondary">
              {entreprise.adress}
              </div>
            </div>

            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Raison Social</h6>
              </div>
              <div className="col-sm-9 text-secondary">
              {entreprise.raisonSocial}
              </div>
            </div>

            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Logo</h6>
              </div>
              <div className="col-sm-9 text-secondary">
              {entreprise.logo}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Nombre d'employé</h6>
              </div>
              <div className="col-sm-9 text-secondary">
              {entreprise.nbreEmploye}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Description</h6>
              </div>
              <div className="col-sm-9 text-secondary">
              {entreprise.description}
              </div>
            </div>
          </div>
        </div>
        
        <div className="bt">
          <Link to='/EditProfile'><button className="btn btn-primary">Modifier</button></Link>
        </div>
      </div>
    </div>

}
<br/>
  <Footer/>
    

    </div>


    
  );
};

export default ProfileEntreprise;
