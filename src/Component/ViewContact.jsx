import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
export default function ViewContact() {
 
  const[show,setShow]=useState('1');
  const { name, email, title, phone, Department,company } = useParams();

  return (
    <>
     
    <div className="container-fluid">
    <div className="row d-flex justify-content-center  ">
       <button className="btn btn-dark m-2 w-25" onClick={()=>setShow('1')}>OverView</button><button className="btn btn-dark m-2 w-25" onClick={()=>setShow('2')}>TimeLine</button>
    </div>
    {
  show === '1' ? (
    <OverView {...{ name, email, title, phone, Department, company }} />
  ) : show === '2' ? (
    <TimeLine />
  ) : null
}
  </div>
    </>
  )
}
 function OverView({name,email,title,phone,Department,company})
 {
    return(
      <>
      <div className="container-fluid">
      <div className="row">
        <Card {...{ name,email,title,phone,Department,company }} />
        <Deal{...{name}}/>
        <Information {...{name,email,phone,Department,company,title }} />
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
                  <td colSpan={3}><h4> <span className="badge bg-secondary">Dec 22,2023</span></h4></td>
                  <td colSpan={6} > <span className='m-5 fw-bold'>Positive Prospective</span></td>
                </tr>
                <tr>
                  <td colSpan={3}><h4> <span className="badge bg-secondary">Dec 20,2023</span></h4></td>
                  <td colSpan={6} > <span className='m-5 fw-bold'>Call Not recieved</span></td>
                </tr>
                <tr>
                  <td colSpan={3}><h4> <span className="badge bg-secondary">Dec 19,2023</span></h4></td>
                  <td colSpan={6} > <span className='m-5 fw-bold'>Lead Created By Mitesh</span></td>
                </tr>
              </tbody>
             </table>

          </div>
        </div>
     </div>
    </>
  )
}
 function Information({name,email,phone,Department,company,title})
{
 
  return(
  <div className='card mt-2' >
    <div class="accordion mt-3 mb-3 " id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Show Detail
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <div className="card">
      <div className="card-body">
        <div className="container">
          <div className="row justify-content-between ">
            <div className="col-md-6">
              <table className="table">
                <tbody>
                  <tr>
                    <td><strong>Contact Owner</strong></td>
                    <td>{name}</td>
                  </tr>
                  <tr>
                    <td><strong>Title</strong></td>
                    <td>{title}</td>
                  </tr>
                  <tr>
                    <td><strong>Phone</strong></td>
                    <td>{phone}</td>
                  </tr>
                  <tr>
                    <td><strong>Mobile</strong></td>
                    <td>{phone}</td>
                  </tr>
                  {/* <tr>
                    <td><strong>Industry</strong></td>
                    <td>{Industry}</td>
                  </tr>
                  <tr>
                    <td><strong>Annual Revenue</strong></td>
                    <td>$1,000,000</td>
                  </tr> */}
                  <tr>
                    <td><strong>Modified By</strong></td>
                    <td>Mitesh</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-4">
              <table className="table">
                <tbody>
                  <tr>
                    <td><strong>Company</strong></td>
                    <td>{company}</td>
                  </tr>
                  <tr>
                    <td><strong>Lead Name</strong></td>
                    <td>{name}</td>
                  </tr>
                  <tr>
                    <td><strong>Email</strong></td>
                    <td>{email}</td>
                  </tr>
                  <tr>
                    <td><strong>Fax</strong></td>
                    <td>(123) 456-7899</td>
                  </tr>
                  <tr>
                    <td><strong>Website</strong></td>
                    <td>www.{company}.com</td>
                  </tr>
                  <tr>
                    <td><strong>Lead Status</strong></td>
                    <td>In Progress</td>
                  </tr>
                  <tr>
                    <td><strong>No of Employees</strong></td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <td><strong>Created By</strong></td>
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
const Card = ({ name,email,phone,Department}) => {
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
        <h4 className="card-title text-start">Contact Details</h4>
        <table className="table">
          <tbody>
            <tr>
              <td className="fw-bold">Contact  Owner:</td>
              <td>{name}</td>
            </tr>
            <tr>
              <td className="fw-bold">Email:</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td className="fw-bold">Phone:</td>
              <td>{phone}</td>
            </tr>
            <tr>
              <td className="fw-bold">Mobile:</td>
              <td>{phone}</td>
            </tr>
            <tr>
              <td className="fw-bold">Department:</td>
              <td>{Department}</td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Deal=({name})=>
{
  return(
    <>
       <div className="card mt-2">
        <div className="card-body">
          <table className='table '>
            <thead>
              <th scope='col'></th>
              <th scope='col'></th>
            </thead>
            <tbody>
              <tr>
                <td className='fw-bold text-primary '>Deals</td>
                <td></td>
                <td className=' fw-bold text-primary'>Next Action</td>
                <td></td>
              </tr>
              <tr>
                 <td>{name}</td>
                 <td><h6><span class="badge bg-primary">₹60000</span></h6></td>
                 <td><span className='badge bg-primary '>05/01/2024</span></td>
                 <td>Registraion For New Event</td>
              </tr>
              <tr>
                <td>Negotiation</td>
                <td> 07/01/2024</td>
                <td><span className='badge bg-primary '>DEC 21,2023 </span></td>
                <td>Get Approval From Manager</td>
              </tr>
            </tbody>
          </table>
        </div>
       </div>
    </>
  )
 
}