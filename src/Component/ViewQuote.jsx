import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function ViewQuote() {
 
  const[show,setShow]=useState('1');
  const {Subject,stages,Total,DealName,Conatct,AcName,Owner} = useParams();

  return (
    <>
     
    <div className="container-fluid">
    <div className="row d-flex justify-content-center  ">
       <button className="btn btn-dark m-2 w-25" onClick={()=>setShow('1')}>OverView</button><button className="btn btn-dark m-2 w-25" onClick={()=>setShow('2')}>TimeLine</button>
    </div>
    {
  show === '1' ? (
    <OverView {...{ Subject,stages,Total,DealName,Conatct,AcName,Owner }} />
  ) : show === '2' ? (
    <TimeLine />
  ) : null
}
  </div>
    </>
  )
}
 function OverView({Subject,stages,Total,DealName,Conatct,AcName,Owner})
 {
    return(
      <>
      <div className="container-fluid">
      <div className="row">
        <Card {...{Subject,stages,Total,DealName,Conatct,AcName,Owner }} />
        <Information {...{Subject,stages,Total,DealName,Conatct,AcName,Owner }} />
        <Product/>
        <AnotherDeatil/>
      </div>
    </div>
      </>
    )
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
                  <td colSpan={6} > <span className='m-5 fw-bold'>Quote Created By Mitesh</span></td>
                </tr>
              </tbody>
             </table>

          </div>
        </div>
     </div>
    </>
  )
}
 function Information({Subject,stages,Total,DealName,Conatct,AcName,Owner})
{
 
  return(
  <div className='container-fluid' >
    <div class="accordion mt-3 " id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-controls="collapseOne">
        Show Detail
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <div className="card">
      <div className="card-body">
        <div className="container">
          <div className="row justify-content-between ">
            <div className="col-md-6">
              <table className="table">
                <tbody>
                  <tr>
                    <td><strong>Quote Owner</strong></td>
                    <td>{Owner}</td>
                  </tr>
                  <tr>
                    <td><strong>Subject</strong></td>
                    <td>{Subject}</td>
                  </tr>
                  <tr>
                    <td><strong>Stage</strong></td>
                    <td>{stages}</td>
                  </tr>
                  <tr>
                    <td><strong>Team</strong></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><strong>Carrier</strong></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><strong>created By</strong></td>
                    <td>Sahil Attar</td>
                  </tr>
                  {/* <tr>
                    <td><strong>Industry</strong></td>
                    <td>{Industry}</td>
                  </tr>
                  <tr>
                    <td><strong>Annual Revenue</strong></td>
                    <td>$1,000,000</td>
                  </tr> */}
                  
                </tbody>
              </table>
            </div>
            <div className="col-md-4">
              <table className="table">
                <tbody>
                  <tr>
                    <td><strong>Deal</strong></td>
                    <td>{DealName}</td>
                  </tr>
                  <tr>
                    <td><strong>Account</strong></td>
                    <td>{AcName}</td>
                  </tr>
                  <tr>
                    <td><strong>Total</strong></td>
                    <td>{Total}</td>
                  </tr>
                  <tr>
                    <td><strong>Conatct</strong></td>
                    <td>{Conatct}</td>
                  </tr>
                  <tr>
                    <td><strong>Modified By</strong></td>
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
const Card = ({Subject,stages,Total,DealName,Conatct,AcName,Owner}) => {
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
        <h4 className="card-title text-start">Quote Details</h4>
        <table className="table">
          <tbody>
          <tr>
              <td className="fw-bold">Quote:</td>
              <td>{Subject}</td>
            </tr>
            <tr>
              <td className="fw-bold">Quote  Owner:</td>
              <td>{Owner}</td>
            </tr>
            <tr>
              <td className="fw-bold">Valid:</td>
              <td>-</td>
            </tr>
            <tr>
              <td className="fw-bold">Account:</td>
              <td>{AcName}</td>
            </tr>
            <tr>
              <td className="fw-bold">Deal:</td>
              <td>{DealName}</td>
            </tr>
            <tr>
              <td className="fw-bold">Total:</td>
              <td>{Total}</td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

function Product ({Subject,stages,Total,DealName,Conatct,AcName,Owner})
{
    return(
        <>
           <div className='container-fluid' >
    <div class="accordion mt-2 " id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-controls="collapseOne">
        Show  Product Detail
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <div className="card">
      <div className="card-body">
        <div className="container">
          <div className="row justify-content-between ">
            <div className="col-md-12">
                <table className="table table-bordered ">
                    <thead>
                       <tr>
                          <th scope='col'>Sr No</th>
                          <th scope='col'>Name</th>
                          <th scope='col'>Quantity</th>
                          <th scope='col'>List Price</th>
                          <th scope='col'>Amount</th>
                          <th scope='col'>Discount</th>
                          <th scope='col'>Tax</th>
                          <th scope='col'>Total</th>
                       </tr>
                    </thead>
                    <tbody>
                         <tr>
                            <td>1</td>
                            <td>Hair Oil</td>
                            <td>1</td>
                            <td>10</td>
                            <td>1200</td>
                            <td>10%</td>
                            <td>120</td>
                            <td>1420</td>
                         </tr>
                         <tr>
                            <td colSpan={6}></td>
                            <td>Sub Total</td>
                            <td>1200</td>
                          
                         </tr>
                         <tr rowSpan={4}>
                            <td colSpan={8}></td>
                         </tr>
                         
                         <tr>
                         <td colSpan={6}></td>
                         <td>Discount</td>
                         <td>120</td>
                         </tr>
                         <tr>
                         <td colSpan={6}></td>
                         <td>Tax</td>
                         <td>120</td>
                         </tr>
                         <tr>
                         <td colSpan={6}></td>
                         <td>Adjustment</td>
                         <td>120</td>
                         </tr>
                         <tr>
                         <td colSpan={6}></td>
                         <td>Grand Total</td>
                         <td>120</td>
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
        </>
    )
}
function AnotherDeatil ()
{
    return(
        <>
            <div className="container-fluid mb-3">
        <div class="accordion" id="accordionExample">
            <div class="accordion-item mt-2">
             <h2 class="accordion-header">
                 <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseOne">
                   Sales
                </button>
               
             </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
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
                 <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="true" aria-controls="collapseOne">
                   Attachment
                </button>
               
             </h2>
            <div id="collapsefour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
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
        </div>
        </div>
        </>
    )
}