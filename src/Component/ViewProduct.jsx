import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
export default function ViewProduct() {
  const[show,setShow]=useState('1');
  const { Name,Code,Status } = useParams();

  return (
    <>
     <div className="container-fluid">
       <div className="row d-flex justify-content-center  ">
          <button className="btn btn-dark m-2 w-25" onClick={()=>setShow('1')}>OverView</button><button className="btn btn-dark m-2 w-25" onClick={()=>setShow('2')}>TimeLine</button>
       </div>
       {
        show ==='1' ?(
          <OverView {...{ Name,Code,Status }} />
        ) : show==='2' ? (
        <TimeLine/>
         ) :null
       }
     </div>
    </>
   
  )
}
function OverView({  Name,Code,Status }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <Card {...{ Name,Code,Status }} />
        <Information {...{ Name,Code,Status  }} />
        <Information2 />
      </div>
    </div>
  );
}

function TimeLine()
{

  return(
    <>
     <div>
        <div className="card">
          <div className="card-body">
             <table className='table table-striped  '>
              <thead>
                <tr>
                  <th scope='row text-start'>Upcoming Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                   <td rowSpan={4}>No Data Found</td>
                </tr>
              </tbody>
             </table>
          </div>
        </div>
        <div className="card mt-3">
          <div className="card-body">
           <h4 className="card-title text-start">History</h4>
             
             <table>
              <tbody>
              
                <tr>
                  <td colSpan={3}><h4> <span className="badge bg-secondary">Dec 19,2023</span></h4></td>
                  <td colSpan={6} > <span className='m-5 fw-bold'>Product Created By Mitesh</span></td>
                </tr>
              </tbody>
             </table>

          </div>
        </div>
     </div>
    </>
  )
}
const Card = ({ Name,Code,Status }) => {
  // Use the received props
  const cardStyle = {
    textAlign: 'start',
    margin: '20px',
    padding: '15px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    fontFamily: 'Arial, sans-serif',
    fontSize: '18px',
  };

  const cardBodyStyle = {
    color: '#333',
  };

  return (
    <div className="card m-2" style={{ cardStyle }}>
      <div className="card-body">
        <h4 className="card-title">Product Details</h4>
        <table className="table">
          <tbody>
            <tr>
              <td className="fw-bold">Product Name:</td>
              <td>{Name}</td>
            </tr>
            <tr>
              <td className="fw-bold">Product Category</td>
              <td>-</td>
            </tr>
            <tr>
              <td className="fw-bold">Unit Price :</td>
              <td>₹25</td>
            </tr>
            <tr>
              <td className="fw-bold">Vendor Name:</td>
              <td>-</td>
            </tr>
            <tr>
              <td className="fw-bold"> Status:</td>
              <td>
                <select className="form-select" aria-label="Default select example">
                  <option selected>Active</option>
                  <option value="1">Active</option>
                  <option value="2">InActive</option>
                  <option value="3">Pending</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

function Information({  Name,Code,Status  })
{
 
  return(
  <div>
    <div class="accordion mt-3" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Show Detail
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse   " data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div className="card">
      <div className="card-body">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <table className="table">
                <tbody>
                  <tr>
                    <td><strong>Product  Owner</strong></td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td><strong>Product </strong></td>
                    <td>{Code}</td>
                  </tr>
                  <tr>
                    <td><strong>Status</strong></td>
                    <td>{Status}</td>
                  </tr>
                  <tr>
                    <td><strong>Category</strong></td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td><strong>Sales End Date</strong></td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td><strong>Support End Date</strong></td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6">
              <table className="table">
                <tbody>
                  <tr>
                    <td><strong>Name</strong></td>
                    <td>{Name}</td>
                  </tr>
                  <tr>
                    <td><strong>Vendor</strong></td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td><strong>Manufacturer</strong></td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td><strong>Sales Start</strong></td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td><strong>Support Start</strong></td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6">
                <table className="table">
                   <tbody>
                    <tr>
                        <td colSpan='2'>Price</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td colSpan='2'>Tax</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td colSpan='2'>Taxable</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td colSpan='2'>Commission Rate</td>
                        <td>-</td>
                    </tr>
                   </tbody>
                </table>
            </div>
            <div className="col-md-6">
                <table className="table">
                   <tbody>
                    <tr>
                        <td colSpan='2'>Usage Unit</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td colSpan='2'>Quantity In Stock</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td colSpan='2'>Ordered</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td colSpan='2'>Record Level</td>
                        <td>-</td>
                    </tr>
                   </tbody>
                </table>
            </div>
          </div>
          <div className="row">
            <div className="">
              <div className="">
        <h3 className="text-start">Address Information</h3>
        <div className="container">
          <div className="row">
            {/* Left side */}
            <div className="col-md-6">
              <table className="table">
                <tbody>
                  <tr>
                    <td className="fw-bold">Street:</td>
                    <td>123 Main St</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">State:</td>
                    <td>California</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Country:</td>
                    <td>USA</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Gap between sides */}
            <div className="col-md-1"></div>
            {/* Right side */}
            <div className="col-md-5">
              <table className="table">
                <tbody>
                  <tr>
                    <td className="fw-bold">City:</td>
                    <td>San Francisco</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Zip Code:</td>
                    <td>12345</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  )
}

function Information2(){
    return(
        <>
        <div className="container-fluid">
        <div class="accordion" id="accordionExample">
            <div class="accordion-item mt-2">
             <h2 class="accordion-header">
                 <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                   Deal
                </button>
               
             </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <table className="table">
                    <tbody>
                        <tr>

                            <td colSpan={12}>No Data Found</td>
                            <td colSpan={4}><Link to='/CreateDeal' className='btn btn-dark'>Create New</Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
           </div>
           <div class="accordion-item mt-2">
             <h2 class="accordion-header">
                 <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseOne">
                   contact
                </button>
               
             </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <table className="table">
                    <tbody>
                        <tr>

                            <td colSpan={12}>No Data Found</td>
                            <td colSpan={4}><Link to='/CreateContact' className='btn btn-dark'>Create New</Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
           </div>
           <div class="accordion-item mt-2">
             <h2 class="accordion-header">
                 <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseOne">
                   Lead
                </button>
               
             </h2>
            <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <table className="table">
                    <tbody>
                        <tr>

                            <td colSpan={12}>No Data Found</td>
                            <td colSpan={4}><Link to='/CreateLead' className='btn btn-dark'>Create New</Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
           </div>
           <div class="accordion-item mt-2">
             <h2 class="accordion-header">
                 <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseOne">
                   Account
                </button>
               
             </h2>
            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <table className="table">
                    <tbody>
                        <tr>

                            <td colSpan={12}>No Data Found</td>
                            <td colSpan={4}><Link to='/CreateAccount' className='btn btn-dark'>Create New</Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
           </div>
        </div>
        </div>
        </>
    )
}