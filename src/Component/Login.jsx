import React from 'react';
import CRM from '../Images/CRM.png';
import { useNavigate } from 'react-router-dom';

export default function Login() {
 const navigate = useNavigate();

 const navigateToHome = () => {
    navigate('/Home');
 };

 return (
    <div className="container-fluid d-flex align-items-center justify-content-center mt-5">
      <div className="card">
        <div className="card-body">
          <div className="row justify-content-between ">
            <div className="col-md-6">
              <img src={CRM} alt="" className='img-fluid' />
            </div>
            <div className="col-md-5 d-flex align-items-center"> {/* Updated class */}
              <div className="container-fluid align-content-center ">
                <div className="form">
                 <h2 className="mb-3">Login</h2>
                 <div className="form-group mt-2">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" />
                 </div>
                 <div className="form-group mt-2">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" />
                 </div>
                 <button
                    type="submit"
                    className="btn btn-primary form-control mt-2 w-50"
                    onClick={() => navigateToHome()}
                 >
                    Login
                 </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 );
}