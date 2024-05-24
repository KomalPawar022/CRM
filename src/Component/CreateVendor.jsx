import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function CreateVendor() {
    const navigate=useNavigate();
    const notify = () => {
      toast.warn("Cant Create On Demo Model", {
        position: toast.POSITION.TOP_RIGHT,
        onClose: () => {
          setTimeout(() => {
            navigate("/Vendor");
          }, 2000);
        },
      });
    };
  return (
    <>
    <div className='container-fluid'>
      <div className="card m-2">
        <div className="card-body">
        <div className="container-fluid">
        <h2 className='card-title'>Vendor Information</h2>
          <div className="row justify-content-between">         
            <div className="col-md-5 ">
              <div className="form-group ">
                <label  className="form-label">Vendor Owner</label>
                  <input type="text" className="form-control" placeholder="Enter Name"/>
               </div>
               <div className="form-group">
               <label  className="form-label">Vendor Name</label>
                  <input type="text" className="form-control" placeholder="Enter Account Name"/>
               </div>
               <div className="form-group">
               <label  className="form-label">Email</label>
                  <input type="text" className="form-control" placeholder="Enter Email"/>
               </div>
               <div className="form-group">
                
               <label  className="form-label">Phone</label>
                  <input type="text" className="form-control" placeholder="Enter Phone"/>
               </div>
               <div className="form-group">
               <label  className="form-label">Category</label>
                  <input type="text" className="form-control" placeholder="Enter Other Phone"/>
               </div>       
            </div>
            <div className="col-md-5">
                <div className="form-group ">
                <label  className="form-label">GL Account</label>
                  <input type="text" className="form-control" placeholder="Enter Lead Source"/>
                  </div>
                  <div className="form-label">
                  <label className="form-check-label" for="gridCheck">
                        Email Opt Out
                     </label>
                  </div>
          </div>
            </div>
       </div>
       <div className="container-fluid">
          <div className="row justify-content-between"> 
          <div className="d-flex justify-content-between">
          <h2 className='card-title'>Address Information</h2>
        <button className="btn btn-primary"> Copy Address </button>
        </div>
        
          <div className="col-md-5">
              <div className="form-group ">
                <label  className="form-label">Mailing Street</label>
                  <input type="text" className="form-control" placeholder="Enter Mailing Street"/>
                  </div>
              <div className="form-group ">
                <label  className="form-label">Mailing City</label>
                  <input type="text" className="form-control" placeholder="Enter Mailing City"/>
                  </div>
                  <div className="form-label">
                  <label  className="form-label">Mailing State</label>
                  <input type="text" className="form-control" placeholder="Enter Mailing State"/>
                  </div>
                  <div className="form-label">
                  <label  className="form-label">Mailing Zip</label>
                  <input type="text" className="form-control" placeholder="Enter Mailing Zip"/>
                  </div>
                <div className="form-label">
                <label  className="form-label">Mailing Country</label>
                  <input type="text" className="form-control" placeholder="Enter Mailing Country"/>
                </div>
            </div>
            <div className="col-md-5">
              <div className="form-group ">
                <label  className="form-label">Other Street</label>
                  <input type="text" className="form-control" placeholder="Enter Other Street"/>
                  </div>
              <div className="form-group ">
                <label  className="form-label">Other City</label>
                  <input type="text" className="form-control" placeholder="Enter Other City"/>
                  </div>
              <div className="form-group ">
                <label  className="form-label">Other State</label>
                  <input type="text" className="form-control" placeholder="Enter Other State"/>
                  </div>
                  <div className="form-label">
                <label  className="form-label">Other Zip</label>
                  <input type="text" className="form-control" placeholder="Enter Other Zip"/>
                  </div>   
                  <div className="form-label">
                <label  className="form-label">Other Country</label>
                  <input type="text" className="form-control" placeholder="Enter Other Country"/>
                  </div>   
            </div>
          </div>
          <div className="container">
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
    <ToastContainer/>  
    </>
  )
}