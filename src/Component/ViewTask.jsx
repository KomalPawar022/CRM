import React,{useState} from 'react'
import { useParams } from 'react-router-dom';

export default function ViewTask() {
    const[show,setShow]=useState('1');
    const {subject,dueDate,status,priority,relatedTo,contactName,TaskOwner}=useParams();
  return (
    <>
    <div className="container-fluid">
      <OverView {...{subject,dueDate,status,priority,relatedTo,contactName,TaskOwner}}/>
  </div>
    </>
    
  )
}
function OverView({ subject,dueDate,status,priority,relatedTo,contactName,TaskOwner }) {
    return (
      <div className="container-fluid mt-2">
        <div className="row">
          <Card {...{subject,dueDate,status,priority,relatedTo,contactName,TaskOwner }} />
          <Information {...{ subject,dueDate,status,priority,relatedTo,contactName,TaskOwner }} />
        </div>
      </div>
    );
  }
  
  const Card = ({ subject,dueDate,status,priority,relatedTo,contactName,TaskOwner }) => {
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
      <div className="card w-100" style={{ cardStyle }}>
        <div className="card-body">
          <h4 className="card-title">Task Details</h4>
          <table className="table">
            <tbody>
              <tr>
                <td className="fw-bold">Priority:</td>
                <td>{priority}</td>
              </tr>
              <tr>
                <td className="fw-bold">Due Date:</td>
                <td>{dueDate}</td>
              </tr>
              <tr>
                <td className="fw-bold">Task Owner:</td>
                <td>{TaskOwner}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  function Information({subject,dueDate,status,priority,relatedTo,contactName,TaskOwner})
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
      <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div class="accordion-body">
        <div className="card">
        <div className="card-body">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <table className="table">
                  <tbody>
                    <tr>
                      <td><strong>Task Owner</strong></td>
                      <td>{TaskOwner}</td>
                    </tr>
                    <tr>
                      <td><strong>Subject</strong></td>
                      <td>{subject}</td>
                    </tr>
                    <tr>
                      <td><strong>Due Date:</strong></td>
                      <td>{dueDate}</td>
                    </tr>
                    <tr>
                      <td><strong>Contact</strong></td>
                      <td>{contactName}</td>
                    </tr>
                    <tr>
                      <td><strong>Status</strong></td>
                      <td>{status}</td>
                    </tr>
                    <tr>
                      <td><strong>Priority</strong></td>
                      <td>{priority}</td>
                    </tr>
                    <tr>
                      <td><strong>Created By</strong></td>
                      <td>{TaskOwner}</td>
                    </tr>
                    <tr>
                      <td><strong>Modified By</strong></td>
                      <td>Mitesh</td>
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
    )
  }
  