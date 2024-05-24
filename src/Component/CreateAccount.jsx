import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
export default function CreateAccount() {
    const navigate=useNavigate();
    const notify = () => {
      toast.warn("Cant Create On Demo Model", {
        position: toast.POSITION.TOP_RIGHT,
        onClose: () => {
          setTimeout(() => {
            navigate("/Account");
          }, 2000);
        },
      });
    };
  return (
    <div>
      <div className="container-fluid">
        <div className="card m-2">
            <div className="card body">
            <div className="container m-2">
        <h5 className='card-title'>Account Information</h5>
          <div className="row justify-content-between">         
            <div className="col-md-5 ">
              <div className="form-group ">
                <label  className="form-label">Account Owner</label>
                  <input type="text" className="form-control" placeholder="Enter Name"/>
               </div>
               <div className="form-group">
               <label  className="form-label">Account Name</label>
                  <input type="text" className="form-control" placeholder="Enter Account Name"/>
               </div>
               <div className="form-group">
               <label  className="form-label">Account Site</label>
                  <input type="text" className="form-control" placeholder="Enter Account Site"/>
               </div>
               <div className="form-group">
                
               <label  className="form-label">Parent Account</label>
                  <input type="text" className="form-control" placeholder="Enter Parent Account"/>
               </div>
               <div className="form-group">
               <label  className="form-label">Account Number</label>
                  <input type="text" className="form-control" placeholder="Enter Account Number"/>
               </div>
               <div className="form-group">
               <label  className="form-label">Account Type</label>
                  <input type="text" className="form-control" placeholder="Enter Mobile"/>
               </div>
               <div className="form-group">
               <label  className="form-label">Industry</label>
                  <input type="text" className="form-control" placeholder="Enter Industry"/>
               </div>  
               <div className="form-label"><label  className="form-label">Annual Revenue</label>
                  <input type="text" className="form-control" placeholder="$"/></div>     
            </div>
            <div className="col-md-5">
                <div className="form-group ">
                <label  className="form-label">Rating</label>
                  <input type="text" className="form-control" placeholder="Enter Rating"/>
                  </div>
                  <div className="form-label">
                  <label  className="form-label">Phone</label>
                  <input type="text" className="form-control" placeholder="Enter Phone"/>
                  </div>
                  <div className="form-label">
                  <label  className="form-label">Fax</label>
                  <input type="text" className="form-control" placeholder="Enter Fax"/>
                  </div>
                  <div className="form-label">
                  <label  className="form-label">Website</label>
                  <input type="text" className="form-control" placeholder="Enter Website"/>
                  </div>
                  <div className="form-label"><label  className="form-label">Ticker Symbol</label>
                  <input type="text" className="form-control" placeholder="Enter Ticker Symbol"/></div>
                  <div className="form-label"> <label  className="form-label">Ownership</label>
                  <input type="text" className="form-control" placeholder="Enter Ownership"/></div>
                  <div className="form-label"><label  className="form-label">Employees</label>
                  <input type="text" className="form-control" placeholder="Enter Employees"/></div>
                  <div className="form-label"><label  className="form-label">SIC Code</label>
                  <input type="text" className="form-control" placeholder="Enter SIC Code"/></div>
                 </div>
            </div>
       </div>
       <div className="container m-2">
          <div className="row justify-content-between"> 
        
          <h6 className='card-title'>Address Information</h6>
        
          <div className="col-md-5">
              <div className="form-group ">
                <label  className="form-label">Billing Street</label>
                  <input type="text" className="form-control" placeholder="Enter Billing Street"/>
                  </div>
              <div className="form-group ">
                <label  className="form-label">Billing City</label>
                  <input type="text" className="form-control" placeholder="Enter Billing City"/>
                  </div>
                  <div className="form-label">
                  <label  className="form-label">Billing State</label>
                  <input type="text" className="form-control" placeholder="Enter Billing State"/>
                  </div>
                  <div className="form-label">
                  <label  className="form-label">Billing Code</label>
                  <input type="text" className="form-control" placeholder="Enter Billing Code"/>
                  </div>
                <div className="form-label">
                <label  className="form-label">Billing Country</label>
                  <input type="text" className="form-control" placeholder="Enter Billing Country"/>
                </div>
            </div>
            <div className="col-md-5">
              <div className="form-group ">
                <label  className="form-label">Shipping Street</label>
                  <input type="text" className="form-control" placeholder="Enter Shipping Street"/>
                  </div>
              <div className="form-group ">
                <label  className="form-label">Shipping City</label>
                  <input type="text" className="form-control" placeholder="Enter Shipping City"/>
                  </div>
              <div className="form-group ">
                <label  className="form-label">Shipping State</label>
                  <input type="text" className="form-control" placeholder="Enter Shipping State"/>
                  </div>
                  <div className="form-label">
                <label  className="form-label">Shipping Code</label>
                  <input type="text" className="form-control" placeholder="Enter Shipping Code"/>
                  </div>   
                  <div className="form-label">
                <label  className="form-label">Shipping Country</label>
                  <input type="text" className="form-control" placeholder="Enter Shipping Country"/>
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
                <button className=" btn btn-primary mb-2" style={{width:"30%"}} onClick={()=>{notify()}}>Save</button>
          </div>
          </div>
       </div>
            </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}
