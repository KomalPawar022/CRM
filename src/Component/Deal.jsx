import React,{useState} from 'react';
import { Dropdown } from 'react-bootstrap';
import { useNavigate,Link } from 'react-router-dom';
import DealsData from '../Data/DealData.js';
import actions from '../Data/action.js';
export default function Deal() {
    const[show,setShow]=useState(true)
  const navigate=useNavigate();
  const handleSelect = (option) => {
    setSelectedOption(option);
    setShow(selectedOption.value === '2');
    // Add any additional logic you want to perform when an option is selected
  };
  const naviagteto=loc=>navigate(`/Action/${loc}`)
  const options = [
    { value: '1', label: 'Table View', icon: 'fa-table' },
    { value: '2', label: 'List View', icon: 'fa-list' },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const itemsPerPage = 15; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the current page items
  const currentItems = DealsData.slice(startIndex, endIndex);

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
  const totalPages = Math.ceil(DealsData.length / itemsPerPage);
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
  
  const handleViewDealClick = (Name,Amount,Stage,ClosingDate,Account,ContactName,DealOwner) => {
    navigate(`/ViewDeal/${Name}/${Amount}/${Stage}/${ClosingDate}/${Account}/${ContactName}/${DealOwner}`);
  };
  return (
    <div>
    <div className="container-fluid">
        <div className="row justify-content-end mb-2 mt-2">
           <div className="col-md-6 d-flex justify-content-end ">
            <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                <i className={`fa ${selectedOption.icon}`} style={{ marginRight: '8px' }}></i> {selectedOption.label}
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
         <Link to='/CreateAccount' className='btn btn-dark ms-2'><i class="fa-solid fa-plus me-2" ></i>Create Deal</Link>
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
        {
         show?<TableView data={currentItems}
           prop={handleViewDealClick}
           renderPrevNextButtons={renderPrevNextButtons}
           renderPaginationButtons={renderPaginationButtons}/>:<CardView
           data={currentItems} 
           prop={handleViewDealClick}
           renderPrevNextButtons={renderPrevNextButtons}
           renderPaginationButtons={renderPaginationButtons}
         />
        }
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
        <table class="table table-hover ">
        <thead>
          <tr>
             <th scope='col'>Name</th>
             <th scope='col'>Amount</th>
             <th scope='col'>Stage</th>
             <th scope='col'>Closing Date</th>
             <th scope='col'>Account Owner</th>
             <th scope='col'>Contact </th>
             <th scope='col'>Deal Owner</th>
          </tr>
        </thead>
        <tbody>
         {
           data.map((i,index)=>
           <tr key={index} onClick={()=>props.prop(i.Name,i.Amount,i.Stage,i.ClosingDate,i.Account,i.ContactName,i.DealOwner)}>
             <td>{i.Name}</td>
             <td>{i.Amount}</td>
             <td>{i.Stage}</td>
             <td>{i.ClosingDate}</td>
             <td>{i.Account}</td>
             <td>{i.ContactName}</td>
             <td>{i.DealOwner}</td>
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
             <h5 className="card-title">{i.Name}</h5>
       <p className="card-text">
         <strong>Amount:</strong> ₹{i.Amount}
       </p>
       <p className="card-text">
         <strong>Stage:</strong> {i.Stage}
       </p>
       <p className="card-text">
         <strong>Clsing Date:</strong> {i.ClosingDate}
       </p>
       <p className="card-text">
         <strong>Account:</strong> {i.Account}
       </p>
       <p className="card-text">
         <strong>Contact Name:</strong> {i.ContactName}
       </p>
       <div className="text-center">
         <button className="btn btn-primary" onClick={()=>props.prop(i.Name,i.Amount,i.Stage,i.ClosingDate,i.Account,i.ContactName,i.DealOwner)}>View Details</button>
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

function KanbanView(props)
{
const {data}=props;
const Styles={
    card:{
        height:"450px",
        overflow:'auto'
    }
}
return(
 <>
  <div className="container-fluid">
  <div className="card" >
  <div className="card-body">
  <h2 className="card-title text-start">New</h2>
    <div className="row">
      <div className="col-md-4">
        <div className="card" style={Styles.card}>
          <div className="card-body">
            {data
              .filter((i) => i.stages === "New")
              .map((filteredItem) => (
                <div key={filteredItem.id} className="card bg-light mb-3 text-start">
                  <div className="card-header bg-primary text-white">{filteredItem.name}</div>
                  <div className="card-body">
                    <p className="card-text">
                      <strong>Phone:</strong> {filteredItem.phone}
                    </p>
                    <p className="card-text">
                      <strong>Stage:</strong> {filteredItem.stages}
                    </p>
                    <button className="btn btn-success">Edit</button>
                    <button className="btn btn-danger ms-2">Delete</button>
                  </div>
                </div>
              ))}
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