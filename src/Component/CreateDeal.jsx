import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function CreateDeal() {
    const navigate=useNavigate();
    const notify = () => {
      toast.warn("Cant Create On Demo Model", {
        position: toast.POSITION.TOP_RIGHT,
        onClose: () => {
          setTimeout(() => {
            navigate("/Deal");
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
        <h2 className='card-title'>Deal Information</h2>
          <div className="row justify-content-between">         
            <div className="col-md-5 ">
              <div className="form-group ">
                <label  className="form-label">Deal Owner</label>
                  <input type="text" className="form-control" placeholder="Enter Name"/>
               </div>
               <div className="form-group">
               <label  className="form-label">Deal Name</label>
                  <input type="text" className="form-control" placeholder="Enter Account Name"/>
               </div>
               <div className="form-group">
               <label  className="form-label">Account Name</label>
                  <input type="text" className="form-control" placeholder="Enter Email"/>
               </div>
               <div className="form-group">
                
               <label  className="form-label">Type</label>
                  <input type="text" className="form-control" placeholder="Enter Phone"/>
               </div>
               <div className="form-group">
               <label  className="form-label">Next step</label>
                  <input type="text" className="form-control" placeholder="Enter Other Phone"/>
               </div>
               <div className="form-group">
               <label  className="form-label">Lead Source</label>
                  <input type="text" className="form-control" placeholder="Enter Mobile"/>
               </div>
               <div className="form-group">
               <label  className="form-label">Contact Name</label>
                  <input type="text" className="form-control" placeholder="Enter Assistant"/>
               </div>       
            </div>
            <div className="col-md-5">
                <div className="form-group ">
                <label  className="form-label">Amount</label>
                  <input type="text" className="form-control" placeholder="Enter Lead Source"/>
                  </div>
                  <div className="form-label">
                  <label  className="form-label">Closing Date</label>
                  <input type="text" className="form-control" placeholder="Enter Last Name"/>
                  </div>
                  <div className="form-label">
                  <label  className="form-label">Stage</label>
                  <input type="text" className="form-control" placeholder="Enter Vendor Name"/>
                  </div>
                  <div className="form-label">
                  <label  className="form-label">Probability</label>
                  <input type="text" className="form-control" placeholder="Enter Title"/>
                  </div>
          </div>
            </div>
       </div>
       <div className="container">
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