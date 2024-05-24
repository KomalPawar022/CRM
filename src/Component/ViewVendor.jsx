import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
export default function ViewVendor() {
  const[show,setShow]=useState('1');
  const {name,email,phone,owner} = useParams();

  return (
    <>
     <div className="container-fluid">
       <div className="row d-flex justify-content-center  ">
          <button className="btn btn-dark m-2 w-25" onClick={()=>setShow('1')}>OverView</button><button className="btn btn-dark m-2 w-25" onClick={()=>setShow('2')}>TimeLine</button>
       </div>
       {
        show ==='1' ?(
          <OverView {...{name,email,phone,owner }} />
        ) : show==='2' ? (
        <TimeLine/>
         ) :null
       }
     </div>
    </>
   
  )
}
function OverView({ name,email,phone,owner }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <Card {...{ name,email,phone,owner }} />
        <Information {...{ name,email,phone,owner  }} />
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
const Card = ({ name,email,phone,owner }) => {
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
    <div className="card" style={{ cardStyle }}>
      <div className="card-body">
        <h4 className="card-title">Vendor Details</h4>
        <table className="table">
          <tbody>
            <tr>
              <td className="fw-bold">Email:</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td className="fw-bold">Phone</td>
              <td>{phone}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

function Information({  name,email,phone,owner })
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
                    <td><strong>vendor  Owner</strong></td>
                    <td>{owner}</td>
                  </tr>
                  <tr>
                    <td><strong>Phone </strong></td>
                    <td>{phone}</td>
                  </tr>
                  <tr>
                    <td><strong>Website</strong></td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td><strong>Category</strong></td>
                    <td>WholeSale</td>
                  </tr>
                  <tr>
                    <td><strong>Modified By</strong></td>
                    <td>Mitesh</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6">
              <table className="table">
                <tbody>
                  <tr>
                    <td><strong>Name</strong></td>
                    <td>{name}</td>
                  </tr>
                  <tr>
                    <td><strong>email</strong></td>
                    <td>{email}</td>
                  </tr>
                  <tr>
                    <td><strong>GL Account</strong></td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td><strong>Created by</strong></td>
                    <td>Mitesh</td>
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
                   Products
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
                   Purchase Order
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
                   Contact
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
                   Open Activities
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