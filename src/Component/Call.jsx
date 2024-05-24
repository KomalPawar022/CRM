import React ,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom';
import CallData from '../Data/CallData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dropdown } from 'react-bootstrap';
import { Button, Modal } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import actions from '../Data/action';
export default function Call() {
    const[show,setShow]=useState(1)
    const [showModal, setShowModal] = useState(false);
    const naviagteto=loc=>navigate(`/Action/${loc}`)
    const notify = () => {
      toast.warn("Cant Create On Demo Model", {
        position: toast.POSITION.TOP_RIGHT,
        onClose: () => {
          setTimeout(() => {
            navigate("/Call");
          }, 2000);
        },
      });
    };

  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);
    const navigate=useNavigate();    
    const handleSelect = (option) => {
      setSelectedOption(option);
      setShow(option.value);
      // Add any additional logic you want to perform when an option is selected
    };
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
    const currentItems = CallData.slice(startIndex, endIndex);
  
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
    const totalPages = Math.ceil(CallData.length / itemsPerPage);
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
   
    
    const handleViewTaskClick = (subject,CallType,CallStartTime,CallDuration,relatedTo,ConatactName,CallOwner) => {
      navigate(`/ViewCall/${subject}/${CallType}/${CallStartTime}}/${CallDuration}/${relatedTo}/${ConatactName}/${CallOwner}`);
    };
    console.log(currentItems)
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
            <Button className='btn btn-dark ms-2' onClick={handleModalShow}>
               <i className="fa-solid fa-plus me-2"></i>Create Call
            </Button>
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
      prop={handleViewTaskClick}
      renderPrevNextButtons={renderPrevNextButtons}
      renderPaginationButtons={renderPaginationButtons}
      data={currentItems}
    />
  ) : (
    selectedOption.value === '2' ? (
      <CardView
        prop={handleViewTaskClick}
        renderPrevNextButtons={renderPrevNextButtons}
        renderPaginationButtons={renderPaginationButtons}
        data={currentItems}
      />
    ) : null
  )
) : null}
    </div>
    <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Call</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label className="form-label">Call To</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label className="form-label">Related To</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label className="form-label">Call Type</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label className="form-label">Outgoing Call Status</label>
            <input type="text" className="form-control" value="Completed " disabled  />
          </div>
          <div className="form-group">
            <label className="form-label">Call Duration</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label className="form-label">Subject</label>
            <input type="text" className="form-control" />
          </div>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={notify}>
            Submit
          </Button>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          {/* Add any additional buttons or actions here */}
        </Modal.Footer>
      </Modal>
      <ToastContainer/>
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
        <table className="table table-hover ">
        <thead>
          <tr>
             <th scope='col'>Subject</th>
             <th scope='col'>Call Type</th>
             <th scope='col'>Call Start Time</th>
             <th scope='col'>Call Duration</th>
             <th scope='col'>Related To</th>
             <th scope='col'>Contact Name</th>
             <th scope='col'>Call Owner</th>
          </tr>
        </thead>
        <tbody>
         {
           data.map((i,index)=>   
           <tr key={index} onClick={()=>props.prop(i.subject,i.CallType,i.CallStartTime,i.CallDuration,i.relatedTo,i.ConatactName,i.CallOwner)}>
             <td>{i.subject}</td>
             <td>{i.CallType}</td>
             <td>{i.CallStartTime}</td>
             <td>{i.CallDuration}</td>
             <td>{i.relatedTo}</td>
             <td>{i.ConatactName}</td>
             <td>{i.CallOwner}</td>
           </tr>
           )
         }
        </tbody>
        </table>
        </div>
      </div>
      <div className="pagination justify-content-center ">
      {props.renderPrevNextButtons()}
       {props.renderPaginationButtons()}

     </div>
      </div>
    </div>
     
   
 )
}

function CardView(props)
{
  const { data } = props;

  // Organize data into different stages
  const stages = {
    Customer: data.filter((item) => item.status === "Customer"),
    Open_Deal: data.filter((item) => item.status === "Open Deal"),
    Lead: data.filter((item) => item.status === "Lead"),
    other: data.filter((item) => item.status === "Others")
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
    <>
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
                    <div onClick={() => props.prop(i.subject,i.CallType,i.CallStartTime,i.CallDuration,i.relatedTo,i.ConatactName,i.CallOwner)}>
                      <div className="card-header bg-primary text-white">{i.subject}</div>
                      <div className="card-body">
                        <p className="card-text">
                          <strong>Call Type:</strong> {i.CallType}
                        </p>
                        <p className="card-text">
                          <strong>Call Start Time:</strong> {i.CallStartTime}
                        </p>
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
    </>
  );
}





























const styles = {
  card: {
    border: "1px solid #21252933",
    boxShadow: "0 3px 4px 0 rgba(0, 0, 0, 0.3)",
    textAlign: "start",
    margin: "5px",
    transition: "all 0.3s ease-in-out",
    borderRadius: "6px",
  },
  cardTable: {
    border: "1px solid #21252933",
    boxShadow: "3px 4px 4px 0 rgba(0, 0, 0, 0.3)",
    textAlign: "start",
    borderRadius: "6px",
    height: "400px",
    background: "#fff",
    marginBottom: "25px",
  },
  icon: {
    fontSize: "25px",
    color: "orange",
    marginRight:"5px"
  },
  cardTable2: {
    border: "1px solid #21252933",
    boxShadow: "3px 4px 4px 0 rgba(0, 0, 0, 0.3)",
    textAlign: "start",
    borderRadius: "6px",
    overflow: "auto",
    background: "#fff",
    marginBottom: "25px",
    height: "350px",
  },
  col: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px', // Add space below each column
  },
  targetStyle: {
    color: '#28a745', // Set color for target
  },
  completedStyle: {
    color: '#007bff', // Set color for completed
  },
  title: {
    color: '#28a745', // Set title color
    fontSize: '1.5rem', // Increase font size
    marginBottom: '15px', // Add space below the title
  },

};