import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
export default function Action() {
  const [select1,setSelect1]=useState("Search By");
  const [select2,setSelect2]=useState("Sort By");
  const {name}=useParams()
  const[show,setShow]=useState(false)
  const searchBy = ["Annual Revenue", "City", "Company", "Country", "Created By", "Email", "Fax", "First Name", "Last Name", "Lead Conversion", "Lead Owner", "Lead Source", "Lead Status"];
  const filter=["<",">",">=","<=",]
  return (
    <div>
       <div className="container-fluid">
        <div className="card m-2">
            <div className="card-body">
                 <h4 className="card-title">
                     {name}
                 </h4>
            </div>
        </div>
        <div className="card m-2">
          <div className="card-body">
            <h5 className="card-title fw-bold">Criteria</h5>
            <div className="container">
             <div className="row justify-content-center">
                <div className="col-md-12 d-flex ">
                    <Dropdown className='m-2'>
                        <Dropdown.Toggle id="dropdown-basic">{select1}</Dropdown.Toggle>
                        <Dropdown.Menu>
                        {searchBy.map((option) => (
                            <Dropdown.Item key={option} onClick={() => setSelect1(option)}>
                            {option}
                            </Dropdown.Item>
                        ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='m-2'>
                        <Dropdown.Toggle id="dropdown-basic">{select2}</Dropdown.Toggle>
                        <Dropdown.Menu>
                        {filter.map((option) => (
                            <Dropdown.Item key={option} onClick={() => setSelect2(option)}>
                            {option}
                            </Dropdown.Item>
                        ))}
                        </Dropdown.Menu>
                    </Dropdown>
              <Form.Control size="sm" type="text" placeholder="Enter Value" />
                </div>
              
             </div>
             <div className="row justify-content-center mt-2">
                 <Button variant="primary w-25" onClick={()=>setShow(!show)}>Search</Button>&nbsp;
             </div>

            </div>
          
          </div>
        </div>
        {
            show ? TableView():null
        }
      </div>
    </div>
  )
}
function TableView()
{
    return(
        <>
         <div className="card m-2">
             <div className="table-responsive">
                <table className="table table-bordered m-2 ">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                             <th scope='col'>Company</th>
                             <th scope='col'>Phone</th>
                             <th scope='col'>Email</th>
                             <th scope='col'>Lead Status</th>
                             <th scope='col'>Country</th>
                             <th scope='col'>Created Time</th>
                             <th scope='col'>Lead Owner</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={8} className='align-items-center '>No data Found</td>             
                        </tr>
                    </tbody>
                </table>
             </div>
            </div>
        </>
    )
}