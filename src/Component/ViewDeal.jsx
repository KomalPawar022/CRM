import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
export default function ViewDeal() {
  const[show,setShow]=useState('1');
  const { Name,Amount,Stage,ClosingDate,Account,ContactName,DealOwner} = useParams();
    const calculateProbability = () => {
      // Generate a random number between 0 and 1
      const randomValue = Math.random();
  
      // Convert the random value to a percentage (0% to 100%)
      const probabilityPercentage = Math.floor(randomValue * 100);
  
      return probabilityPercentage;
    };
   const Probability=calculateProbability();
  return (
    <>
     <div className="container-fluid">
       <div className="row d-flex justify-content-center  ">
          <button className="btn btn-dark m-2 w-25" onClick={()=>setShow('1')}>OverView</button><button className="btn btn-dark m-2 w-25" onClick={()=>setShow('2')}>TimeLine</button>
       </div>
       {
        show ==='1' ?(
          <OverView {...{Name,Amount,Stage,ClosingDate,Account,ContactName,DealOwner,Probability}} />
        ) : show==='2' ? (
        <TimeLine {...{Probability}}/>
         ) :null
       }
     </div>
    </>
   
  )
}
function OverView( { Name,Amount,Stage,ClosingDate,Account,ContactName,DealOwner,Probability})
{
   return(
     <>
     <div className="container-fluid">
     <div className="row">
       <Card {...{ Name,Amount,Stage,ClosingDate,Account,ContactName,DealOwner,Probability}} />
       <Deal {... { Name,Amount,Stage,ClosingDate,Account,ContactName,Probability}}/>
       <Information {... { Name,Amount,Stage,ClosingDate,Account,ContactName,DealOwner,Probability}}/>
       <Competitors/>
     </div>
   </div>
     </>
   )
}

function TimeLine({Probability})
{

 return(
   <>
    <div>
       <div className="card">
         <div className="card-body">
            <table className='table table-striped  '>
             <thead>
               <tr>
                 <th scope='row text-start'>Upcoming Actions</th>
               </tr>
             </thead>
             <tbody>
               <tr>
                  <td rowSpan={4}>No Data Found</td>
               </tr>
             </tbody>
            </table>
         </div>
       </div>
       <div className="card mt-3">
         <div className="card-body">
          <h4 className="card-title text-start">History</h4>
            
            <table>
             <tbody>
               <tr>
                 <td colSpan={3}><h4> <span className="badge bg-secondary">Dec 19,2023</span></h4></td>
                 <td colSpan={6} > <span className='m-5 fw-bold'>
                    Probability  was updated from {Probability-10}% to {Probability}%
                    Expected Revenue was updated from null to 
                    Stage was updated from Identify Decision Makers to Value Proposition
                    by sahil attar Dec 19, 2023</span></td>
               </tr>
             </tbody>
            </table>

         </div>
       </div>
    </div>
   </>
 )
}
function Information( { Name,Amount,Stage,ClosingDate,Account,ContactName,DealOwner,Probability})
{

 return(
 <div className='card mt-2' >
   <div class="accordion mt-3 mb-3 " id="accordionExample">
 <div className="accordion-item">
   <h2 className="accordion-header">
     <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       Show Detail
     </button>
   </h2>
   <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
     <div className="accordion-body">
     <div className="card">
     <div className="card-body">
       <div className="container">
         <div className="row justify-content-between ">
           <div className="col-md-6">
             <table className="table">
               <tbody>
                 <tr>
                   <td><strong>Deal Owner</strong></td>
                   <td>{DealOwner}</td>
                 </tr>
                 <tr>
                   <td><strong>Account Name</strong></td>
                   <td>{Name}</td>
                 </tr>
                 <tr>
                   <td><strong>Type</strong></td>
                   <td>-</td>
                 </tr>
                 <tr>
                   <td><strong>Expected Revenue</strong></td>
                   <td>{Amount}</td>
                 </tr>
                 {/* <tr>
                   <td><strong>Industry</strong></td>
                   <td>{Industry}</td>
                 </tr>
                 <tr>
                   <td><strong>Annual Revenue</strong></td>
                   <td>$1,000,000</td>
                 </tr> */}
                 <tr>
                   <td><strong>Modified By</strong></td>
                   <td>Mitesh</td>
                 </tr>
               </tbody>
             </table>
           </div>
           <div className="col-md-4">
             <table className="table">
               <tbody>
                 <tr>
                   <td><strong>Amount</strong></td>
                   <td>{Amount}</td>
                 </tr>
                 <tr>
                   <td><strong>Closing Date</strong></td>
                   <td>{ClosingDate}</td>
                 </tr>
                 <tr>
                   <td><strong>Stage</strong></td>
                   <td>{Stage}</td>
                 </tr>
                 <tr>
                   <td><strong>Prohability</strong></td>
                   <td>{Probability}%</td>
                 </tr>
                 <tr>
                   <td><strong>Created By</strong></td>
                   <td>In Progress</td>
                 </tr>
               </tbody>
             </table>
           </div>
         </div>
         <div className="row">
           <div className="">
             <div className="">
       <h3 className="text-start">Address Information</h3>
       <div className="container">
         <div className="row">
           {/* Left side */}
           <div className="col-md-6">
             <table className="table">
               <tbody>
                 <tr>
                   <td className="fw-bold">Street:</td>
                   <td>123 Main St</td>
                 </tr>
                 <tr>
                   <td className="fw-bold">State:</td>
                   <td>California</td>
                 </tr>
                 <tr>
                   <td className="fw-bold">Country:</td>
                   <td>USA</td>
                 </tr>
               </tbody>
             </table>
           </div>
           {/* Gap between sides */}
           <div className="col-md-1"></div>
           {/* Right side */}
           <div className="col-md-5">
             <table className="table">
               <tbody>
                 <tr>
                   <td className="fw-bold">City:</td>
                   <td>San Francisco</td>
                 </tr>
                 <tr>
                   <td className="fw-bold">Zip Code:</td>
                   <td>12345</td>
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
   </div>
 </div>
 </div>
 </div>
 )
}
const Card = ( { Name,Amount,Stage,ClosingDate,Account,ContactName,DealOwner,Probability}) => {
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
       <h4 className="card-title text-start">Deal Details</h4>
       <table className="table">
         <tbody>
           <tr>
             <td className="fw-bold">Deal Name:</td>
             <td>{Name}</td>
           </tr>
           <tr>
             <td className="fw-bold">Stage:</td>
             <td>{Stage}</td>
           </tr>
           <tr>
             <td className="fw-bold">Probability:</td>
             <td>{Probability}%</td>
           </tr>
           <tr>
             <td className="fw-bold">Expected Revenue:</td>
             <td>{Amount}</td>
           </tr>
           <tr>
             <td className="fw-bold">Closing Date:</td>
             <td>{ClosingDate}</td>
           </tr>
         </tbody>
       </table>
     </div>
   </div>
 );
};

const Deal=({name,phone})=>
{
 return(
   <>
      <div className="card mt-2">
       <div className="card-body">
        <h5 className="card-title">Stage History</h5>
         <hr />
         <table className="table table-striped table-responsive ">
           <thead>
            <th scope='col'>Stage</th>
            <th scope='col'>Amount</th>
            <th scope='col'>Probability</th>
            <th scope='col'>Execpected Revenue</th>
            <th scope='col'>Closing Date</th>
            <th scope='col'>Stage Duration </th>
            <th scope='col'>Modified Time</th>
            <th scope='col'>Modified By</th>
           </thead>
           <tbody>
            <tr>
              <td colSpan={8}>No Data Found</td>
            </tr>
           </tbody>
         </table>
       </div>
      </div>
   </>
 )
}
const Stages=()=>
{
    return(
        <>
        <div className="card">
            <div className="card-body">

            </div>
        </div>
        </>
    )
}
const Competitors=()=>{
    return(
        <>
         <div className="card mt-2 mb-2">
             <div className="card-body">
                <h5 className="card-title">Competitor Details :</h5>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td colSpan={8}>No Data Found</td>
                        </tr>
                    </thead>
                </table>
             </div>
         </div>

        </>
    )
}

