import React from 'react'
import LeadData from '../Data/LeadData';
import actions from '../Data/action';
import { useState } from 'react';
import Select from 'react-select';
import { Dropdown } from 'react-bootstrap';
import {useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Lead2() {
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
    const naviagteto=loc=>navigate(`/Action/${loc}`)
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
  return (
    <div>
    <div className="container-fluid">
        <div className="row justify-content-end mb-2 mt-2">
           <div className="col-md-8 d-flex justify-content-end ">
            <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                <i className={`fa ${selectedOption.icon}`} style={{ marginRight: '8px' }}/>  {selectedOption.label}
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
           <Dropdown>
           <Dropdown.Toggle variant="dark" className='ms-2' id="dropdown-basic">
                  Action
               </Dropdown.Toggle>
               <Dropdown.Menu>
                 {actions.map((i)=>(
                  <Dropdown.Item key={i.id} onClick={()=>naviagteto(i.name)}>
                    {i.name}
                  </Dropdown.Item>
                 ))}
               </Dropdown.Menu>
           </Dropdown>
           </div>
        </div>
        {show ? (
       selectedOption.value === '1' ? (
        <TableView
        prop={handleViewLeadClick}
        renderPrevNextButtons={renderPrevNextButtons}
        renderPaginationButtons={renderPaginationButtons}
        data={currentItems}
      />
       ) : selectedOption.value === '2' ? (
         <CardView prop={handleViewLeadClick} renderPrevNextButtons={renderPrevNextButtons}
         renderPaginationButtons={renderPaginationButtons}
         data={currentItems}/>
       ) : (
         <KanbanView prop={handleViewLeadClick} renderPrevNextButtons={renderPrevNextButtons}
         renderPaginationButtons={renderPaginationButtons}
         data={currentItems} />
       )
     ) : null}
    </div>
  </div>
  )
}
function TableView (props)
{
    const {data}=props;
 return(
   <div className="container-fluid">
    <div className="card mb-2">
      <div className="card-body">
        <div className="table-responsive">
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
           data.map((i,index)=>
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
        </div>
      
      <div className="pagination justify-content-center ">
      {props.renderPrevNextButtons()}
       {props.renderPaginationButtons()}

     </div>
      </div>
    </div>
      
   </div>
   
 )
}

function CardView(props)
{
    const {data}=props;
 return(
   <>
   <div className="container-fluid">
    <div>
      <div>
      <div className="row">
       {
         data.map((lead,index)=>
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
     {props.renderPrevNextButtons()}
       {props.renderPaginationButtons()}

     </div>
      </div>
    </div>
     
   </div>
   </>
 )
}

function KanbanView(props) {
  const { data } = props;
  

  const stages = {
    New: data.filter((item) => item.stages === 'New'),
    Contacted: data.filter((item) => item.stages === 'Contacted'),
    Qualified: data.filter((item) => item.stages === 'Qualified'),
    Proposal_Sent: data.filter((item) => item.stages === 'Proposal Sent'),
    Negotiation: data.filter((item) => item.stages === 'Negotiation'),
    Closed_Won: data.filter((item) => item.status === 'Closed_Won'),
    Closed_Lost: data.filter((item) => item.status === 'Closed_Lost'),
  };

  const Styles = {
    card: {
      height: '100%',
      overflow: 'auto',
      background: 'milkywhite',
      Height:'650px',
      margin: '10px',
      maxHeight:'650px',
      minHeight:'650px'
    },
  };

  const yourSliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    vertical: false, // Ensure horizontal display
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container-fluid">
      <Slider {...yourSliderSettings}>
        {Object.entries(stages).map(([stage, stageData]) => (
          <div key={stage} className="card" style={Styles.card}>
            <div className="card-body">
              <h5 className="card-title text-start fw-bold text-success ">{stage}</h5>
              <hr />
              <div style={Styles.card}>
                {stageData.map((lead) => (
                  <div key={lead.id} className="card bg-light mb-3 text-start border-top-primary">
                    <div onClick={() => props.prop(lead.name, lead.company, lead.email, lead.phone, lead.leadSource, lead.leadOwner, lead.Industry)}>
                      <div className="card-header bg-primary text-white">{lead.name}</div>
                      <div className="card-body">
                        <p className="card-text">
                          <strong>Phone:</strong> {lead.phone}
                        </p>
                        <p className="card-text">
                          <strong>Stage:</strong> {lead.stages}
                        </p>
                        <button className="btn btn-success">Edit</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

