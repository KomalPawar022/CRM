import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
export default function CreateLead() {
  const navigate=useNavigate();
  const notify = () => {
    toast.warn("Cant Create On Demo Model", {
      position: toast.POSITION.TOP_RIGHT,
      onClose: () => {
        setTimeout(() => {
          navigate("/Lead");
        }, 2000);
      },
    });
  };
  return (
    <>
     <div className="conatiner-fluid">
       <div className="card m-3">
        <div className="card-body">
        <div className="container-fluid text-start">
        <h2 className='card-title text-start '>Lead Information</h2>
          <div className="row justify-content-between">         
            <div className="col-md-5 ">
              <div className="form-group ">
                <label  className="form-label">Lead Owner</label>
                  <input type="text" className="form-control" placeholder="Enter Name"/>
               </div>
               <div className="form-group">
               <label  className="form-label">First Name</label>
                  <input type="text" className="form-control" placeholder="Enter First Name"/>
               </div>
               <div className="form-group">
               <label  className="form-label">Title</label>
                  <input type="text" className="form-control" placeholder="Enter Title"/>
               </div>
               <div className="form-group">
                
               <label  className="form-label">Phone</label>
                  <input type="text" className="form-control" placeholder="Enter Phone"/>
               </div>
               <div className="form-group">
               <label  className="form-label">Mobile</label>
                  <input type="text" className="form-control" placeholder="Enter Mobile"/>
               </div>
               <div className="form-group">
               <label  className="form-label">Lead Source</label>
                  <input type="text" className="form-control" placeholder="Enter Lead Source"/>
               </div>
               <div className="form-group">
               <label  className="form-label">Industry</label>
                  <input type="text" className="form-control" placeholder="Enter Industry"/>
               </div>
               <div className="form-group">
               <label  className="form-label">Annual Revenue</label>
                  <input type="text" className="form-control" placeholder="Enter Annual Revenue"/>
               </div>
               <div className="form-group">
               <label className="form-check-label" htmlFor="defaultCheck1">
                    Email Opt Out
                    </label>
               </div>           
            </div>
            <div className="col-md-5">
                <div className="form-group ">
                <label  className="form-label">Company</label>
                  <input type="text" className="form-control" placeholder="Enter Company Name"/>
                  </div>
                  <div className="form-label">
                  <label  className="form-label">Last Name</label>
                  <input type="text" className="form-control" placeholder="Enter Last Name"/>
                  </div>
                  <div className="form-label">
                  <label  className="form-label">Email</label>
                  <input type="text" className="form-control" placeholder="Enter Email"/>
                  </div>
                  <div className="form-label">
                  <label  className="form-label">Fax</label>
                  <input type="text" className="form-control" placeholder="Enter Fax"/>
                  </div>
                  <div className="form-label"><label  className="form-label">Website</label>
                  <input type="text" className="form-control" placeholder="Enter Website"/></div>
                  <div className="form-label"> <label  className="form-label">Lead Status</label>
                  <input type="text" className="form-control" placeholder="-None-"/></div>
                  <div className="form-label"><label  className="form-label">No. of Employees</label>
                  <input type="text" className="form-control" placeholder="Enter No.of Employees"/></div>
                  <div className="form-label"><label  className="form-label">Rating</label>
                  <input type="text" className="form-control" placeholder="-None-"/></div>
                  <div className="form-label">
                <label  className="form-label">Skype Id</label>
                  <input type="text" className="form-control" placeholder="Enter Skype Id"/></div>
                  <div className="form-label"><label  className="form-label">Secondary Email</label>
                  <input type="text" className="form-control" placeholder="Enter Secondary Email"/></div>
                  <div className="form-label"><label  className="form-label">Twitter</label>
                  <input type="text" className="form-control" placeholder="@"/></div>
          </div>
            </div>
       </div>
       <div className="container-fluid text-start ">
        <h2 className='card-title'>Address Information</h2>
          <div className="row justify-content-between"> 
          <div className="col-md-5">
              <div className="form-group ">
                <label  className="form-label">Street</label>
                  <input type="text" className="form-control" placeholder="Enter Street"/>
                  </div>
                  <div className="form-label">
                  <label  className="form-label">State</label>
                  <input type="text" className="form-control" placeholder="Enter State"/>
                  </div>
                <div className="form-label">
                <label  className="form-label">Country</label>
                  <input type="text" className="form-control" placeholder="Enter Country"/>
                </div>
            </div>
            <div className="col-md-5">
              <div className="form-group ">
                <label  className="form-label">City</label>
                  <input type="text" className="form-control" placeholder="Enter City"/>
                  </div>
                  <div className="form-label">
                <label  className="form-label">Zip Code</label>
                  <input type="text" className="form-control" placeholder="Enter Zip Code"/>
                  </div>   
            </div>
          </div>
          <div className="container-fluid text-start ">
        <h2 className='card-title'>Description Information</h2>
          <div className="row justify-content between"> 
          <div className="col-md-5">
              <div className="form-group ">
                <label  className="form-label">Description</label>
                  <input type="text" className="form-control" placeholder="Enter Description"/>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-2">
                <button className=" btn btn-primary" style={{width:"30%"}} onClick={()=>{notify()}}>Save</button>
           
          </div>
          </div>
            </div>
        </div>
       </div>

     </div>
    <ToastContainer />
    </>   
  )
}