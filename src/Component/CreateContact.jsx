import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function CreateContact() {
    const navigate=useNavigate();
    const notify = () => {
      toast.warn("Cant Create On Demo Model", {
        position: toast.POSITION.TOP_RIGHT,
        onClose: () => {
          setTimeout(() => {
            navigate("/Contact");
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
        <h2 className='card-title'>Contact Information</h2>
          <div className="row justify-content-between">         
            <div className="col-md-5 ">
              <div className="form-group ">
                <label  className="form-label">Contact Owner</label>
                  <input type="text" className="form-control" placeholder="Enter Name"/>
               </div>
               <div className="form-group">
               <label  className="form-label">Account Name</label>
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
               <label  className="form-label">Other Phone</label>
                  <input type="text" className="form-control" placeholder="Enter Other Phone"/>
               </div>
               <div className="form-group">
               <label  className="form-label">Mobile</label>
                  <input type="text" className="form-control" placeholder="Enter Mobile"/>
               </div>
               <div className="form-group">
               <label  className="form-label">Assistant</label>
                  <input type="text" className="form-control" placeholder="Enter Assistant"/>
               </div>       
            </div>
            <div className="col-md-5">
                <div className="form-group ">
                <label  className="form-label">Lead Source</label>
                  <input type="text" className="form-control" placeholder="Enter Lead Source"/>
                  </div>
                  <div className="form-label">
                  <label  className="form-label">Last Name</label>
                  <input type="text" className="form-control" placeholder="Enter Last Name"/>
                  </div>
                  <div className="form-label">
                  <label  className="form-label">Vendor Name</label>
                  <input type="text" className="form-control" placeholder="Enter Vendor Name"/>
                  </div>
                  <div className="form-label">
                  <label  className="form-label">Title</label>
                  <input type="text" className="form-control" placeholder="Enter Title"/>
                  </div>
                  <div className="form-label"><label  className="form-label">Department</label>
                  <input type="text" className="form-control" placeholder="Enter Department"/></div>
                  <div className="form-label"> <label  className="form-label">Home Phone</label>
                  <input type="text" className="form-control" placeholder="Enter Home Phone"/></div>
                  <div className="form-label"><label  className="form-label">Fax</label>
                  <input type="text" className="form-control" placeholder="Enter Fax"/></div>
                  <div className="form-label"><label  className="form-label">Date Of Birth</label>
                  <input type="text" className="form-control" placeholder="Enter Date Of Birth"/></div>
                  <div className="form-label">
                <label  className="form-label">Asst Phone</label>
                  <input type="text" className="form-control" placeholder="Enter Asst Phone"/></div>
                  <div className="form-label">
                  <label className="form-check-label" for="gridCheck">
                        Email Opt Out
                     </label>
                  </div>
                  <div className="form-label"><label  className="form-label">Skype Id</label>
                  <input type="text" className="form-control" placeholder="Enter Skype Id"/></div>
                  <div className="form-label"><label  className="form-label">Secondary Email</label>
                  <input type="text" className="form-control" placeholder="Enter Secondary Email"/></div>
                  <div className="form-label"><label  className="form-label">Twitter</label>
                  <input type="text" className="form-control" placeholder="@"/></div>
                  <div className="form-label"><label  className="form-label">Reporting To</label>
                  <input type="text" className="form-control" placeholder=""/></div>
          </div>
            </div>
       </div>
       <div className="container">
          <div className="row justify-content-between"> 
          <div className="btntitle d-flex justify-content-between">
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