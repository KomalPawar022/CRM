import React ,{useState}from 'react'
import ContactData from '../Data/ContactData'
import LeadData from '../Data/LeadData';
import { Dropdown } from 'react-bootstrap';
import { useNavigate,Link } from 'react-router-dom';
import actions from '../Data/action';
export default function Contact() {
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
  const currentItems = ContactData.slice(startIndex, endIndex);

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
  const totalPages = Math.ceil(ContactData.length / itemsPerPage);
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
  
  const handleViewConatctClick = (name,email,title,phone,Department,company) => {
    navigate(`/ViewContact/${name}/${email}/${title}/${phone}/${Department}/${company}`);
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
         <Link to='/CreateContact' className='btn btn-dark ms-2'><i class="fa-solid fa-plus me-2" ></i>Create Contact</Link>
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
           prop={handleViewConatctClick}
           renderPrevNextButtons={renderPrevNextButtons}
           renderPaginationButtons={renderPaginationButtons}/>:<CardView
           data={currentItems} 
           prop={handleViewConatctClick}
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
    <div className="card mb-2">
      <div className="card-body">
      <div className="container-fluid">
        <div className="table-responsive">
        <table class="table table-hover">
         <thead>
           <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Title</th>
            <th scope='col'>Department</th>
           </tr>
         </thead>
         <tbody>
          {
            data.map((i,index)=>
            <tr key={index} onClick={()=>props.prop(i.name,i.email,i.title,i.phone,i.Department,i.company)} >
              <td>{i.name}</td>
              <td>{i.email}</td>
              <td>{i.title}</td>
              <td>{i.Department}</td>
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
    console.log(data);
    return(
        <>
         <div className="container-fluid">
            <div className="row">
            {
         data.map((i, index) => (
            <div className="col-md-4">
                  <div key={index} className="card mb-3">
                    <div className="card-body text-start">
                     <h5 className="card-title">{i.name}</h5>
                     <p className="card-text">Company: {i.company}</p>
                     <p className="card-text">Email: {i.email}</p>
                     <p className="card-text">Phone: {i.phone}</p>
                     <p className="card-text">Lead Source: {i.leadSource}</p>
                     <button className='btn btn-primary ' >View</button>
                     </div>
                   </div>
            </div>
   
  ))
}
            </div>
     
            <div className="pagination justify-content-center ">
       {props.renderPrevNextButtons()}
        {props.renderPaginationButtons()}

      </div>

         </div>
        </>
    )
}