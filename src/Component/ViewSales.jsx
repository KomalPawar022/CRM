import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
export default function ViewSales() {
  const[show,setShow]=useState('1');
  const {Subject,stages,Total,Deal,Account,ContactName,Owner  } = useParams();

  return (
    <>
     <div className="container-fluid">
       <div className="row d-flex justify-content-center  ">
          <button className="btn btn-dark m-2 w-25" onClick={()=>setShow('1')}>OverView</button><button className="btn btn-dark m-2 w-25" onClick={()=>setShow('2')}>TimeLine</button>
       </div>
       {
        show ==='1' ?(
          <OverView {...{Subject,stages,Total,Deal,Account,ContactName,Owner }} />
        ) : show==='2' ? (
        <TimeLine/>
         ) :null
       }
     </div>
    </>
   
  )
}
function OverView({  Subject,stages,Total,Deal,Account,ContactName,Owner }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <Card {...{ Subject,stages,Total,Deal,Account,ContactName,Owner }} />
        <Information {...{ Subject,stages,Total,Deal,Account,ContactName,Owner  }} />
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
                  <td colSpan={6} > <span className='m-5 fw-bold'>Sales Order Created By Mitesh</span></td>
                </tr>
              </tbody>
             </table>

          </div>
        </div>
     </div>
    </>
  )
}
const Card = ({ Subject,stages,Total,Deal,Account,ContactName,Owner }) => {
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
        <h4 className="card-title">Sales Details</h4>
        <table className="table">
          <tbody>
            <tr>
              <td className="fw-bold">Sales Name:</td>
              <td>{Subject}</td>
            </tr>
            <tr>
              <td className="fw-bold">Carrier</td>
              <td>{stages}</td>
            </tr>
            <tr>
              <td className="fw-bold">Due Date:</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

function Information({  Subject,stages,Total,Deal,Account,ContactName,Owner  })
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
                    <td><strong>Sales Owner</strong></td>
                    <td>{Owner}</td>
                  </tr>
                  <tr>
                    <td><strong>Subject </strong></td>
                    <td>{Subject}</td>
                  </tr>
                  <tr>
                    <td><strong>Stage</strong></td>
                    <td>-</td>
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
                    <td><strong>Deal</strong></td>
                    <td>{Deal}</td>
                  </tr>
                  <tr>
                    <td><strong>Account</strong></td>
                    <td>{Account}</td>
                  </tr>
                  <tr>
                    <td><strong>Conatact Name</strong></td>
                    <td>{ContactName}</td>
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
                   Ordered Items
                </button>
               
             </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <table className="table">
                    <thead>
                        <th scope='col'>S.No</th>
                        <th scope='col'>Product Name</th>
                        <th scope='col'>Quantity</th>
                        <th scope='col'>List Price</th>
                        <th scope='col'>Amount</th>
                        <th scope='col'>Discount</th>
                        <td scope='col'>Tax</td>
                    </thead>
                    <tbody>
                        <tr>
                             <td>1</td>
                             <td>Hair Oil</td>
                             <td>1</td>
                             <td>100</td>
                             <td>₹100</td>
                             <td>₹ 0.0</td>
                             <td>₹ 0.0</td>
                        </tr>
                        <tr>
                            <td colSpan={5}></td>
                            <td>Sub Total</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td colSpan={5}></td>
                            <td>Discount</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td colSpan={5}></td>
                            <td>Tax</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td colSpan={5}></td>
                            <td>Adjustment</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td colSpan={5}></td>
                            <td>Grand Total</td>
                            <td>100</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
           </div>
           <div class="accordion-item mt-2">
             <h2 class="accordion-header">
                 <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseOne">
                   Notes
                </button>
               
             </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <table className="table">
                    <tbody>
                        <tr>

                            <td colSpan={12}>No Data Found</td>
                            <td colSpan={4}><Link to='/Sales' className='btn btn-dark'>Create New</Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
           </div>
           <div class="accordion-item mt-2">
             <h2 class="accordion-header">
                 <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseOne">
                   Invoices
                </button>
               
             </h2>
            <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <table className="table">
                    <tbody>
                        <tr>

                            <td colSpan={12}>No Data Found</td>
                            <td colSpan={4}><Link to='/CreateQuote' className='btn btn-dark'>Create New</Link></td>
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