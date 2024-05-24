import React from 'react'
import "./newProfile.css"
import { MdOutlineAccountTree,MdOutlineCall,MdOutlineAccessTime ,MdEmail,MdChairAlt,MdNightlightRound} from "react-icons/md";
import { GoPlusCircle } from "react-icons/go";
import { MdOutlineMessage,MdCall,MdOutlineVideoCall } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { PiArrowsDownUp } from "react-icons/pi";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function NewProfile() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  return (
    <div style={{}}>
    
      <div className='main' style={{display:"flex",gap:"10px",paddingLeft:"85%"}}>
      <MdOutlineMessage  style={{backgroundColor:"white",fontSize:"30px"}}/>
      <MdCall  style={{backgroundColor:"white",fontSize:"30px"}}/>
      <MdOutlineVideoCall style={{backgroundColor:"white",fontSize:"30px"}} />
      <CiStar style={{backgroundColor:"white",fontSize:"30px"}} />

      </div>
      <div style={{width:"100%",height:"25%",backgroundColor:"#eeeeee"}}>
        <div style={{margin:"40px",backgroundColor:"#eeeeee",display:"flex",justifyContent:"space-between"}}>
          <div style={{display:"flex",gap:"20px"}}>

<img style={{width:"150px",height:"150px",position:"relative",top:"-95px"}} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
<h4 style={{marginTop:"60px"}}>S2-Lilly Williams <small>&nbsp; Yet To Check</small> <br />Administrations</h4>
          </div>
          <div style={{padding:"30px"}}>
            <p>Reporting To <br px/> Mitesh Waghmode</p>

          </div>
        </div>
        <hr />
        <div style={{display:"flex",gap:"20px",paddingLeft:"25px"}}>
          <p>Profile</p>
          <p>Reportees</p>
          <p>Department</p>
          <p>Peers</p>
          <p>Related Data</p>

        </div>
      </div>
      <div style={{border:"1px solid black",margin:"20px"}}>
        <div style={{display:"flex",justifyContent:"space-around"}}>
          <div style={{display:"flex",alignItems:"center",padding:"10px"}}>
          <MdOutlineAccountTree  style={{fontSize:"50px",paddingRight:"10px"}}/>
          <p>
Department
<br />
Management</p>
          </div>
          <div style={{display:"flex",alignItems:"center",padding:"10px"}}>
          <MdNightlightRound   style={{fontSize:"50px",paddingRight:"10px"}}/>
          <p>
Shift
<br />
General
</p>
          </div>
          <div style={{display:"flex",alignItems:"center",padding:"10px"}}>
          <MdOutlineAccessTime  style={{fontSize:"50px",paddingRight:"10px"}}/>
          <p>
Time Zone
<br />
(GMT+05:30)
</p>
          </div>
        </div>
        <div style={{display:"flex",justifyContent:"space-around"}}>
          <div style={{display:"flex",alignItems:"center",padding:"10px"}}>
          <MdChairAlt  style={{fontSize:"50px",paddingRight:"10px"}}/>
          <p>

          Seating Location
<br />
FL_EXEC_1</p>
          </div>
          <div style={{display:"flex",alignItems:"center",padding:"10px"}}>
          <MdEmail style={{fontSize:"50px",paddingRight:"10px"}}/>
          <p>
          Email
<br />
abc@gmail.com</p>
          </div>
          <div style={{display:"flex",alignItems:"center",padding:"10px"}}>
          <MdOutlineCall   style={{fontSize:"50px",paddingRight:"10px"}}/>
          <p>
          Work Phone Number
<br />
305-555-1212</p>
          </div>
        </div>
      </div>

     

      <div style={{border:"1px solid black",margin:"20px"}}>
        <div style={{display:"flex",gap:"50%",padding:"15px"}}>
          <p style={{paddingLeft:"30px",fontWeight:"bold"}}>Skills</p>
          <div style={{marginTop:"35px"}}>
          <GoPlusCircle  style={{fontSize:"57px",paddingLeft:"20px"}}/>
          <br />
          <Button variant="primary" onClick={handleShow}>
       ADD SKILLS
      </Button>
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Skills</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <label htmlFor="">Title  </label>
         <br />
         <input type="text" style={{marginBottom:"10px"}}/>
         <br />
         <label htmlFor="">Description  </label>
         <br />
         <input type="text" />
           </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add Skills
          </Button>
        </Modal.Footer>
      </Modal>
          </div>
        </div>
      </div>


      <div style={{border:"1px solid black",margin:"20px"}}>
        <div style={{display:"flex",gap:"50%",padding:"15px"}}>
          <p style={{paddingLeft:"30px",fontWeight:"bold"}}>About</p>
          <div style={{marginTop:"35px"}}>
          <GoPlusCircle  style={{fontSize:"57px",paddingLeft:"20px"}}/>
          <br />
          <Button  variant="primary" onClick={handleShow1}>
       ADD ABOUT
      </Button>
          <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Add About</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="">Description</label>
          <br />
        <textarea name="" id=""></textarea>
           </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose1}>
            Add 
          </Button>
        </Modal.Footer>
      </Modal>
          </div>
        </div>
      </div>

      <div style={{border:"1px solid black",margin:"20px"}}>
        <div style={{padding:"15px"}}>
          <p style={{paddingLeft:"30px",fontWeight:"bold"}}>Work Experience</p>
         <div >
          <table style={{margin:"auto auto"}}>
            <thead>
              <tr>
                <td style={{backgroundColor:"#eeeeee",padding:"15px",paddingRight:"25px"}}>Company Name &nbsp;<PiArrowsDownUp /></td>
                <td style={{backgroundColor:"#eeeeee",padding:"15px",paddingRight:"25px"}}>Job Title &nbsp;<PiArrowsDownUp /></td>
                <td style={{backgroundColor:"#eeeeee",padding:"15px",paddingRight:"25px"}}>From Date &nbsp;<PiArrowsDownUp /></td>
                <td style={{backgroundColor:"#eeeeee",padding:"15px",paddingRight:"25px"}}>To Date &nbsp;<PiArrowsDownUp /></td>
                <td style={{backgroundColor:"#eeeeee",padding:"15px",paddingRight:"25px"}}>Job Description &nbsp;<PiArrowsDownUp /></td>
                <td style={{backgroundColor:"#eeeeee",padding:"15px",paddingRight:"25px"}}>Relavant &nbsp;<PiArrowsDownUp /></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{padding:"15px",paddingRight:"25px",textAlign:"center"}}>Infomax</td>
                <td style={{padding:"15px",paddingRight:"25px",textAlign:"center"}}>Team Lead</td>
                <td style={{padding:"15px",paddingRight:"25px",textAlign:"center"}}>04 Jan 2009</td>
                <td style={{padding:"15px",paddingRight:"25px",textAlign:"center"}}>20 Jan 2011</td>
                <td style={{padding:"15px",paddingRight:"25px",textAlign:"center"}}>-</td>
                <td style={{padding:"15px",paddingRight:"25px",textAlign:"center"}}>Yes</td>
              </tr>
            </tbody>
          </table>
         </div>
        </div>
      </div>

      
      <div style={{border:"1px solid black",margin:"20px"}}>
        <div style={{padding:"15px"}}>
          <p style={{paddingLeft:"30px",fontWeight:"bold"}}>Education Details</p>
         <div>
          <table style={{margin:"auto auto"}}>
            <thead>
              <tr>
                <td style={{backgroundColor:"#eeeeee",padding:"15px",paddingRight:"25px"}}>Institute Name &nbsp;<PiArrowsDownUp /></td>
                <td style={{backgroundColor:"#eeeeee",padding:"15px",paddingRight:"25px"}}>Degree/Diploma &nbsp;<PiArrowsDownUp /></td>
                <td style={{backgroundColor:"#eeeeee",padding:"15px",paddingRight:"25px"}}>Specialization &nbsp;<PiArrowsDownUp /></td>
                <td style={{backgroundColor:"#eeeeee",padding:"15px",paddingRight:"25px"}}> Date Of Completion &nbsp;<PiArrowsDownUp /></td>
               </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{padding:"15px",paddingRight:"25px",textAlign:"center"}}>Crestwood College</td>
                <td style={{padding:"15px",paddingRight:"25px",textAlign:"center"}}>Master</td>
                <td style={{padding:"15px",paddingRight:"25px",textAlign:"center"}}>Cybersecurity</td>
                <td style={{padding:"15px",paddingRight:"25px",textAlign:"center"}}>-</td>
                             </tr>
            </tbody>
          </table>
         </div>
        </div>
      </div>
    </div>
  )
}

export default NewProfile



//https://static.zohocdn.com/zp5/people5/images/home/ms-bg0.60f9344acf91cb5cee8c8e02de6895ef.jpg