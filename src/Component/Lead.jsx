import React from 'react'
import LeadData from '../Data/LeadData';
import { useState } from 'react';
import Select from 'react-select';
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ViewLead from './ViewLead';
export default function Lead() {
  const[show,setShow]=useState(true)

  const handleSelect = (option) => {
    setSelectedOption(option);
    setShow(option.value);
    // Add any additional logic you want to perform when an option is selected
  };
  const options = [
    { value: '1', label: 'Table View', icon: 'fa-list' },
    { value: '2', label: 'Card View', icon: 'fa-table' },
    { value: '3', label: 'Kanban View', icon: 'fa-chart-simple' },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const navigate=useNavigate();
  const createLead=()=>
  {
    navigate('/createLead');
  }
  const handleViewLeadClick = (names, company, email, phone, leadSource, leadOwner,Industry) => {
    navigate(`/ViewLead/${names}/${company}/${email}/${phone}/${leadSource}/${leadOwner}/${Industry}`);
  };
  
  return (
    <div>
       <div className="container-fluid">
           <div className="row justify-content-end mb-2 mt-2">
              <div className="col-md-3 d-flex">
               <Dropdown>
                   <Dropdown.Toggle variant="dark" id="dropdown-basic">
                   <i className={`fa ${selectedOption.icon}`} style={{ marginRight: '8px' }}/> {selectedOption.label}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
              {options.map((option) => (
                <Dropdown.Item key={option.value}  onClick={() => handleSelect(option)}>
                  <i className={`fa ${option.icon}`} style={{ marginRight: '8px' }}></i>
                  {option.label}
                </Dropdown.Item>
              ))}
                  </Dropdown.Menu>
               </Dropdown>
            <button className='btn btn-dark ms-2' onClick={()=>createLead()}><i class="fa-solid fa-plus me-2" ></i>Create Lead</button>
              </div>
           </div>
           {show ? (
          selectedOption.value === '1' ? (
            <TableView prop={handleViewLeadClick} />
          ) : selectedOption.value === '2' ? (
            <CardView prop={handleViewLeadClick} />
          ) : (
            <KanbanView prop={handleViewLeadClick} />
          )
        ) : null}
       </div>
    </div>
  )
}
 function TableView (props)
 {
  const itemsPerPage = 15; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the current page items
  const currentItems = LeadData.slice(startIndex, endIndex);

  // Function to handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const renderPaginationButtons = () => {
    const buttons = [];

    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={i === currentPage ? ' btn btn-success active m-2' : 'btn btn-primary m-2'}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };
  const totalPages = Math.ceil(LeadData.length / itemsPerPage);
  const renderPrevNextButtons = () => (
    <div className="prev-next-buttons">
      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className='btn btn-primary m-2'>
        Prev
      </button>
      <button className='btn btn-primary ' onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
  return(
    <div className="container-fluid">
       <table class="table table-hover">
         <thead>
           <tr>
            <th scope='col'>Lead Name</th>
            <th scope='col'>Company</th>
            <th scope='col'>Email</th>
            <th scope='col'>Phone</th>
            <th scope='col'>Lead Source</th>
            <th scope='col'>Lead Owner</th>
           </tr>
         </thead>
         <tbody>
          {
            currentItems.map((i,index)=>
            <tr key={index} onClick={()=>props.prop(i.name,i.company,i.email,i.phone,i.leadSource,i.leadOwner,i.Industry)}>
              <td>{i.name}</td>
              <td>{i.company}</td>
              <td>{i.email}</td>
              <td>{i.phone}</td>
              <td>{i.leadSource}</td>
              <td>{i.leadOwner}</td>
            </tr>
            )
          }
         </tbody>
       </table>
       <div className="pagination justify-content-center ">
       {renderPrevNextButtons()}
        {renderPaginationButtons()}

      </div>
    </div>
    
  )
 }

 function CardView(props)
 {
  const itemsPerPage = 9; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the current page items
  const currentItems = LeadData.slice(startIndex, endIndex);

  // Function to handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const renderPaginationButtons = () => {
    const buttons = [];

    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={i === currentPage ? ' btn btn-success active m-2' : 'btn btn-primary m-2'}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };
  const totalPages = Math.ceil(LeadData.length / itemsPerPage);
  const renderPrevNextButtons = () => (
    <div className="prev-next-buttons">
      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className='btn btn-primary m-2'>
        Prev
      </button>
      <button className='btn btn-primary ' onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
  return(
    <>
    <div className="container">
      <div className="row">
        {
          currentItems.map((lead,index)=>
          <div className="col-md-4 mb-2" key={index}>
            <div className="card">
              <div className="card-body text-start ">
              <h5 className="card-title">{lead.name}</h5>
        <p className="card-text">
          <strong>Company:</strong> {lead.company}
        </p>
        <p className="card-text">
          <strong>Email:</strong> {lead.email}
        </p>
        <p className="card-text">
          <strong>Phone:</strong> {lead.phone}
        </p>
        <p className="card-text">
          <strong>Lead Source:</strong> {lead.leadSource}
        </p>
        <p className="card-text">
          <strong>Lead Owner:</strong> {lead.leadOwner}
        </p>
        <div className="text-center">
          <button className="btn btn-primary" onClick={()=>props.prop(lead.name,lead.company,lead.email,lead.phone,lead.leadSource,lead.leadOwner,lead.Industry)}>View Details</button>
        </div>

              </div>
            </div>
          </div>
          )
        }
      </div>
      <div className="pagination justify-content-center ">
       {renderPrevNextButtons()}
        {renderPaginationButtons()}

      </div>
    </div>
    </>
  )
 }
 
 function KanbanView(props)
 {
 return(
  <>
  Kanban View
  </>
  )
 }