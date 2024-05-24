import React,{useState} from 'react'
import { useParams } from 'react-router-dom';


export default function ViewCall() {
    const[show,setShow]=useState('1');
    const {subject,CallType,CallStartTime,CallDuration,relatedTo,ConatactName,CallOwner}=useParams();
  return (
    <>
    <div className="container mt-2">
        <div className="card">
            <div className="card-body">
             <OverView {...{subject,CallType,CallStartTime,CallDuration,relatedTo,ConatactName,CallOwner}}/>
            </div>
        </div>

    </div>
    </>
    
  )
}
function OverView({subject,CallType,CallStartTime,CallDuration,relatedTo,ConatactName,CallOwner }) {
    return (
      <div className="container-fluid mt-2">
        <div className="row">
          <Card {...{subject,CallType,CallStartTime,CallDuration,relatedTo,ConatactName,CallOwner }} />
          <Information {...{ subject,CallType,CallStartTime,CallDuration,relatedTo,ConatactName,CallOwner}} />
        </div>
      </div>
    );
  }
  
  const Card = ({ subject,CallType,CallStartTime,CallDuration,relatedTo,ConatactName,CallOwner}) => {
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
          <h4 className="card-title">Call Details</h4>
          <table className="table">
            <tbody>
            <tr>
                <td className="fw-bold">Call TO:</td>
                <td>{ConatactName}</td>
              </tr>
            <tr>
                <td className="fw-bold">Subject:</td>
                <td>{subject}</td>
              </tr>
              <tr>
                <td className="fw-bold">Call Start:</td>
                <td>{CallStartTime}</td>
              </tr>
              <tr>
                <td className="fw-bold">Duration:</td>
                <td>{CallDuration}</td>
              </tr>
              <tr>
                <td className="fw-bold">Call Owner:</td>
                <td>{CallOwner}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  function Information({subject,CallType,CallStartTime,CallDuration,relatedTo,ConatactName,CallOwner})
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
                      <td><strong>Call Owner</strong></td>
                      <td>{CallOwner}</td>
                    </tr>
                    <tr>
                      <td><strong>Subject</strong></td>
                      <td>{subject}</td>
                    </tr>
                    <tr>
                      <td><strong>Call Type</strong></td>
                      <td>{CallType}</td>
                    </tr>
                    <tr>
                      <td><strong>Call Duration:</strong></td>
                      <td>{CallDuration}</td>
                    </tr>
                    <tr>
                      <td><strong>Contact</strong></td>
                      <td>{ConatactName}</td>
                    </tr>
                    <tr>
                      <td><strong>Created By</strong></td>
                      <td>{CallOwner}</td>
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
  