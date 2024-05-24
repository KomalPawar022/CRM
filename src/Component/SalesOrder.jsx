import React from 'react'
import SalesOrderData from '../Data/SalesOrder';
import actions from '../Data/action';
import { useState } from 'react';
import Select from 'react-select';
import { Dropdown } from 'react-bootstrap';
import {useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SalesOrder() {
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
    const handleViewLeadClick = (Subject,stages,Total,Deal,Account,ContactName,Owner) => {
      navigate(`/ViewSales/${Subject}/${stages}/${Total}/${Deal}/${Account}/${ContactName}/${Owner}`);
    };
    const naviagteto=loc=>navigate(`/Action/${loc}`)
    const itemsPerPage = 15; // Number of items to display per page
    const [currentPage, setCurrentPage] = useState(1);

 // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

 // Get the current page items
    const currentItems = SalesOrderData.slice(startIndex, endIndex);

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
 const totalPages = Math.ceil(SalesOrderData.length / itemsPerPage);
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
         <button className='btn btn-dark ms-2' onClick={()=>createLead()}><i class="fa-solid fa-plus me-2" ></i>Create Sales Order</button>
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
           <th scope='col'>Subject</th>
           <th scope='col'>Total</th>
           <th scope='col'>Deal</th>
           <th scope='col'>Account</th>
           <th scope='col'>ContactName</th>
           <th scope='col'>Owner</th>
          </tr>
        </thead>
        <tbody>
         {
           data.map((i,index)=>
           <tr key={index} onClick={()=>props.prop(i.Subject,i.stages,i.Total,i.Deal,i.Account,i.ContactName,i.Owner)}>
             <td>{i.Subject}</td>
             <td>{i.Total}</td>
             <td>{i.Deal}</td>
             <td>{i.Account}</td>
             <td>{i.ContactName}</td>
             <td>{i.Owner}</td>
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
         data.map((i,index)=>
         <div className="col-md-4 mb-2" key={index}>
           <div className="card">
             <div className="card-body text-start ">
             <h5 className="card-title">{i.Subject}</h5>
       <p className="card-text">
         <strong>Contact:</strong> {i.ContactName}
       </p>
       <p className="card-text">
         <strong>Account:</strong> {i.Account}
       </p>
       <p className="card-text">
         <strong>Sales Owner:</strong> {i.Owner}
       </p>
       <div className="text-center">
         <button className="btn btn-primary" onClick={()=>props.prop(i.Subject,i.stages,i.Total,i.Deal,i.Account,i.ContactName,i.Owner)}>View Details</button>
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
    FedEX: data.filter((item) => item.stages === 'FedEx'),
    UPS: data.filter((item) => item.stages === 'UPS'),
    USPS: data.filter((item) => item.stages === 'USPS'),
    DHL: data.filter((item) => item.stages === 'DHL'),
    BlueDart: data.filter((item) => item.stages === 'BlueDart')
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
                {stageData.map((i) => (
                  <div key={i.id} className="card bg-light mb-3 text-start border-top-primary">
                    <div onClick={() => props.prop(i.Subject,i.stages,i.Total,i.Deal,i.Account,i.ContactName,i.Owner)}>
                      <div className="card-header bg-primary text-white">{i.Subject}</div>
                      <div className="card-body">
                        <p className="card-text">
                          <strong>Total:</strong> {i.Total}
                        </p>
                        <p className="card-text">
                          <strong>Account:</strong> {i.Account}
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

