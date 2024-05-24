import React from 'react';
import NeedleChart from './Chart/NeedleChart';
import { Dropdown } from 'react-bootstrap';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie,faHandshake,faIndianRupee,faListCheck,faFileInvoice, faArrowUp, faBullhorn, faTasks, faTeletype } from '@fortawesome/free-solid-svg-icons';
import PiechartModel from './Chart/DonutChart';
import DonutChart from './Chart/DonutChart';
import BarchartModel from './Chart/BarchartModel';
import DognutChart2 from './Chart/DognutChart2';
import LineChartModel from './Chart/LineChartModel';
import { Line } from 'recharts';
export default function Analytics() {
  const[show,setShow]=useState(true)
  
  const handleSelect = (option) => {
    setSelectedOption(option);
    setShow(option.value);
    // Add any additional logic you want to perform when an option is selected
  };
  const options = [
    { value: '1', label: 'Organization Overview', icon: 'fa-list' },
    { value: '2', label: 'Lead Analytics', icon: 'fa-table' },
    { value: '3', label: 'Deal Insight', icon: 'fa-chart-bar' },
    { value: '4', label: 'Marketing Metrics', icon: 'fa-chart-pie' },
    { value: '5', label: 'Sales Trend', icon: 'fa-chart-line' },
    { value: '6', label: 'Sales Follow-Up Trend', icon: 'fa-chart-line' },
    { value: '7', label: 'Activity Stats', icon: 'fa-chart-bar' },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  return (
   <>
    <div className="container-fluid">
           <div className="row justify-content-end mb-2 mt-2">
              <div className="col-md-12 d-flex justify-content-end ">
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
              </div>
           </div>
           {show ? (
  selectedOption.value === '1' ? (
    <Organization />
  ) : selectedOption.value === '2' ? (
    <Lead />
  ) : selectedOption.value === '3' ? (
    <Deal />
  ) : selectedOption.value === '4' ? (
    <Marketing />
  ): selectedOption.value === '4' ? (
  <SalesTrend /> ): selectedOption.value==='5' ?(
    <SalesTrend/> ):selectedOption.value==='6'?(
      <SalesFollowUp/>
  ):selectedOption.value==='7'?(
    <ActivityStat/>
  ) :null) : null}
       </div>
   </>
  );
}

function Lead() {
  const data = [
    { name: 'A', value: 75, color: '#F9B572' },
    { name: 'B', value: 25, color: '#F2F1EB' },
  ];
  const monthlyLeadData = [
    {
      name: 'January',
      value: 100,
    },
    {
      name: 'February',
      value: 150,
    },
    {
      name: 'March',
      value: 120,
    },
    {
      name: 'April',
      value: 200,
    },
    {
      name: 'May',
      value: 180,
    },
    {
      name: 'June',
      value: 250,
    },
    {
      name: 'July',
      value: 300,
    },
    {
      name: 'August',
      value: 280,
    },
    {
      name: 'September',
      value: 230,
    },
    {
      name: 'October',
      value: 190,
    },
    {
      name: 'November',
      value: 220,
    },
    {
      name: 'December',
      value: 270,
    },
  ];
  const industryLeadData = [
    { name: 'Automotive', value: 400, color: '#0088FE' },
    { name: 'Education & Training', value: 300, color: '#00C49F' },
    { name: 'HealthCare', value: 350, color: '#FFBB28' },
    { name: 'Manufacturing', value: 250, color: '#FF8042' },
  ];

  return (
    <>
      <div className="container-fluid">
        <div className="row">
           <div className="row">
            <div className="col-md-4">
               <div className="card" style={styles.card}>
                  <div className="card-body">
                    <h5 className="card-title d-flex justify-content-between ">Todays Leads <FontAwesomeIcon icon={faUserTie} style={styles.icon} /></h5>
                    <span className="align-start fw-bold text-success">115</span>
                    
                  </div>
                </div>
            </div>
            <div className="col-md-4">
              <div className="card" style={styles.card}>
                  <div className="card-body">
                    <h5 className="card-title d-flex  justify-content-between ">Week Leads <FontAwesomeIcon icon={faUserTie} style={styles.icon} /></h5>
                    <span className="align-start fw-bold text-success">115</span>
                    
                  </div>
                </div>
            </div>
            <div className="col-md-4">
            <div className="card" style={styles.card}>
                  <div className="card-body">
                    <h5 className="card-title d-flex  justify-content-between ">Month Leads <FontAwesomeIcon icon={faUserTie} style={styles.icon} /></h5>
                    <span className="align-start fw-bold text-success">115</span>
                    
                  </div>
                </div>
            </div>
           </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <div className="card" style={styles.card}>
               <div className="card-body">
                <h6 className="card-title fw-bold">Monthly Lead Genration</h6>
                 <BarchartModel data={monthlyLeadData}/>
               </div>
            </div>
          </div>
           <div className="col-md-6">
          <div className="card" style={styles.card}>
            <div className="card-body">
               <h6 className="card-title fw-bold text-success">Lead By Industry</h6>
                <div className="row d-flex ">
                  <div className="col-md-6">
                   <DognutChart2 data={industryLeadData}/>
                  </div>
                  <div className="col-md-6 d-block mt-5 ">
                    <span className='badge m-2' style={{backgroundColor:"#0088FE"}}>Automotive</span>
                    <span className='badge m-2' style={{backgroundColor:"#00C49F"}}>Education & Training</span>
                    <span className='badge m-2' style={{backgroundColor:"#FFBB28"}}>HealthCare</span>
                    <span className='badge m-2' style={{backgroundColor:"#FF8042"}}>Manufacturing</span>
                  </div>
                  
                </div>
           
            </div>
          </div>
           </div>
        </div>
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
    Height:'125px'
  },
  cardTable: {
    border: "1px solid #21252933",
    boxShadow: "3px 4px 4px 0 rgba(0, 0, 0, 0.3)",
    textAlign: "start",
    borderRadius: "6px",
    height: "450px",
    background: "#fff",
    marginBottom: "25px",
    marginTop:"20px",
    margin:'5px'
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
function Organization()
{
  const data = [
    { name: 'Complated', value: 75, color: '#F9B572' },
    { name: 'Pending', value: 25, color: '#F2F1EB' },
  ];
  const DognutData=[
    { name:'Social Media',value:400,color: '#0088FE'},
    {name:"Website",value:300,color: '#00C49F'},
    {name:"Advertisement",value:350,color: '#FFBB28'},
    {name:'cold call',value:250,color: '#FF8042'},
  ]

  return(
    <>
     <div className="container-fluid">
       <div className="row mt-2 mb-2">
          <div className="col-md-3">
          <div className="card" style={styles.card}>
              <div className="card-body">
                <div className="card-title d-flex  justify-content-between  align-items-center ">
                  Leads This Month
                  <FontAwesomeIcon icon={faHandshake} style={styles.icon} />
                </div>
                <span className="align-start fw-bold text-success">115</span>
              </div>
            </div>
          </div>
           <div className="col-md-3">
           <div className="card" style={styles.card}>
              <div className="card-body">
                <div className="card-title d-flex  justify-content-between  align-items-center ">
                   Revenue This Month
                  <FontAwesomeIcon icon={faIndianRupee} style={styles.icon} />
                </div>
                <span className="align-start fw-bold text-success ">₹3,50,000</span>
              </div>
            </div>
           </div>
           <div className="col-md-3">
           <div className="card" style={styles.card}>
              <div className="card-body">
                <div className="card-title d-flex  justify-content-between  align-items-center ">
                  Deals In PipeLine
                  <FontAwesomeIcon icon={faListCheck} style={styles.icon} />
                </div>
                <span className="align-start fw-bold text-success ">12</span>
              </div>
            </div>
           </div>
           <div className="col-md-3">
           <div className="card" style={styles.card}>
              <div className="card-body">
                <div className="card-title d-flex  justify-content-between  align-items-center ">
                  Account This Month
                  <FontAwesomeIcon icon={faFileInvoice} style={styles.icon} />
                </div>
                <span className="align-start fw-bold text-success ">+25</span>
              </div>
            </div>
           </div>
       </div>
       <div className="row mt-2 mb-2">
        <div className="col-md-6">
        <div className="card" style={styles.cardTable}>
      <div className="card-body">
        <h6 className="card-title fw-bold text-success" style={styles.title}>
          Lead Generation Target
        </h6>
        <div className="row justify-content-center ">
        <NeedleChart data={data} />
        </div>
      
        <div className="row justify-content-center" style={{marginTop:'-320px'}}>
          <div className="col-12" style={styles.col}>
            <h6 style={styles.targetStyle}>Target: {data[0].value}</h6>
            <h6 style={styles.completedStyle}>Completed: {data[1].value}</h6>
          </div>
        </div>
      </div>
    </div>
        </div>
        <div className="col-md-6">
        <div className="card" style={styles.cardTable}>
            <div className="card-body">
               <h6 className="card-title fw-bold text-success">Lead By Source</h6>
                <div className="row d-flex ">
                  <div className="col-md-6">
                   <DognutChart2 data={DognutData}/>
                  </div>
                  <div className="col-md-6 d-block mt-5 ">
                    <span className='badge m-2' style={{backgroundColor:"#0088FE"}}>Website</span>
                    <span className='badge m-2' style={{backgroundColor:"#00C49F"}}>Advt</span>
                    <span className='badge m-2' style={{backgroundColor:"#FFBB28"}}>Call</span>
                    <span className='badge m-2' style={{backgroundColor:"#FF8042"}}>Reference</span>
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

function Deal ()
{
  const AmountByLead = [
    { name: 'Social Media', value: 4000, color: '#0088FE' },
    { name: 'Email Marketing', value: 3500, color: '#00C49F' },
    { name: 'SEO', value: 2800, color: '#FFBB28' },
    { name: 'Paid Advertising', value: 5000, color: '#FF8042' },
];
const AmountByStages = [
  { name: 'Prospecting', value: 2000, color: '#0088FE' },
  { name: 'Qualification',value: 3500, color: '#00C49F' },
  { name: 'Negotiation', value: 4500, color: '#FFBB28' },
  { name: 'Proposal',value: 6000, color: '#FF8042' },
  { name: 'Closing', value: 8000, color: '#7B68EE' },
  // Add more entries as needed
];

  return(
    <>
     <div className="container-fluid">
       <div className="row">
        <div className="col-md-3">
         <div className="card" style={styles.card}>
              <div className="card-body">
                <h6 className="card-title d-flex  justify-content-between  align-items-center ">
                  Revenue This Month
                  <FontAwesomeIcon icon={faIndianRupee} style={styles.icon} />
                </h6>
                <span className="align-start fw-bold text-success">₹ 1,15,000</span>
              </div>
            </div>
        </div>
        <div className="col-md-3">
         <div className="card" style={styles.card}>
              <div className="card-body">
                <h6 className="card-title d-flex  justify-content-between  align-items-center ">
                   Deals Created
                  <FontAwesomeIcon icon={faHandshake} style={styles.icon} />
                </h6>
                <span className="align-start fw-bold text-success">115</span>
              </div>
            </div>
        </div>
        <div className="col-md-3">
         <div className="card" style={styles.card}>
              <div className="card-body">
                <h6 className="card-title d-flex  justify-content-between  align-items-center ">
                  Deals In PipeLine
                  <FontAwesomeIcon icon={faHandshake} style={styles.icon} />
                </h6>
                <span className="align-start fw-bold text-success">75</span>
              </div>
            </div>
        </div>
        <div className="col-md-3">
         <div className="card" style={styles.card}>
              <div className="card-body">
                <h6 className="card-title d-flex  justify-content-between  align-items-center ">
                   Revenue Lost
                  <FontAwesomeIcon icon={faIndianRupee} style={styles.icon} />
                </h6>
                <span className="align-start fw-bold text-success">115</span>
              </div>
            </div>
        </div>
         <div className="col-md-4">
          <div className="card" style={styles.cardTable}>
            <div className="card-body">
             <h6 className="card-title">
               Revenue By Employee
             </h6>
             <hr/>
             <table className="table">
              <thead>
                <th scope='col'>Employee Name</th>
                <th scope='col'>Amount</th>
              </thead>
               <tbody>
                <tr>
                  <td>
                    Arjun P
                  </td>
                  <td>
                    ₹45,000
                  </td>
                </tr>
                <tr>
                  <td>Priya Yadav</td>
                  <td>₹65,000</td>
                </tr>
               </tbody>
             </table>
            </div>
          </div>
         </div>
         <div className="col-md-4">
          <div className="card" style={styles.cardTable}>
            <div className="card-body">
              <h6 className="card-title">Open Amount By Employee</h6>
              <hr/>
               <table className="table table-striped ">
                <thead>
                  <tr>
                    <th scope='col'>Employee</th>
                     <th scope='col'>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mitesh W</td>
                    <td>₹45000</td>
                  </tr>
                  <tr>
                    <td>Sahil A</td>
                     <td>₹44000</td>
                  </tr>
                </tbody>
               </table>
            </div>
          </div>
         </div>
         <div className="col-md-4">
          <div className="card" style={styles.cardTable}>
            <div className="card-body">
             <h6 className="card-title">Deals By Stages</h6>
             <hr/>
             <table className="table">
              <thead>
                <tr>
                  <th scope='col'>Stage</th>
                  <th scope='col'>Count</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Negotiation</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>Proposal</td>
                  <td>25</td>
                </tr>
              </tbody>
             </table>
            </div>
          </div>
         </div>
          <div className="col-md-6">
            <div className="card" style={styles.cardTable}>
              <div className="card-body">
               <h6 className="card-title">Amount By stages</h6>
               <hr />
               <div className="row  ">
                 <div className="col-md-5">
                    <DognutChart2 data={AmountByStages} />
                 </div>
                 <div className="col-md-7">
                 <div className="d-flex  mt-5 ">
                    <span className='badge m-2' style={{backgroundColor:"#0088FE"}}>Prospecting</span>
                    <span className='badge m-2' style={{backgroundColor:"#00C49F"}}>Qualification</span>
                    <span className='badge m-2' style={{backgroundColor:"#FFBB28"}}>Negotiation</span>
                    <span className='badge m-2' style={{backgroundColor:"#FF8042"}}>Proposal</span>
                    <span className='badge m-2' style={{backgroundColor:"#7B68EE"}}>Closing</span>
                </div>
                 </div>
                
               </div>
               
               
              </div>
            </div>
          </div>
          <div className="col-md-6">
              <div className="card" style={styles.cardTable}>
                <div className="card-body">
                <h6 className="card-title">Amount Lead Source</h6>
                <hr/>
                <BarchartModel data={AmountByLead}/>
                </div>
              </div>
          </div>
       </div>

     </div>
    </>
  )
}
function Marketing ()
{
  const campignType = [
    { name: 'Email', value: 200 },
    { name: 'Social Media', value: 150 },
    { name: 'Search Ads', value: 120 },
    { name: 'Content Marketing', value: 180 },
    // Add more entries as needed
];
const campignByLead = [
  { name: 'AIT', value: 225 },
  { name: 'SSD', value: 565 },
  { name: 'RBM', value: 768 },
  { name: 'AIMS', value: 965 },
  { name: 'Konark', value: 450 },
  { name: 'Digitack', value: 320 },
  { name: 'AFIML', value: 600 },
  // Add more entries as needed
];
  return(
    <>
    <div className="container-fluid px-3 py-3 ">
        <div className="row">
           <div className="col-md-3">
            <div className="card" style={styles.card}>
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-between ">TOTAL CAMPAIGNS  <FontAwesomeIcon icon={faBullhorn} style={styles.icon} /></h5>
                    <span className="align-start fw-bold text-success">15</span>
              </div>
            </div>
           </div>
           <div className="col-md-3">
            <div className="card" style={styles.card}>
              <div className="card-body">
              <h5 className="card-title d-flex justify-content-between ">Actual Cost  <FontAwesomeIcon icon={faIndianRupee} style={styles.icon} /></h5>
                    <span className="align-start fw-bold text-success">₹45000</span>
              </div>
            </div>
           </div>
           <div className="col-md-3">
            <div className="card" style={styles.card}>
              <div className="card-body">
              <h5 className="card-title d-flex justify-content-between ">Budget Cost  <FontAwesomeIcon icon={faIndianRupee} style={styles.icon} /></h5>
                    <span className="align-start fw-bold text-success">₹65000</span>
              </div>
            </div>
           </div>
           <div className="col-md-3">
            <div className="card" style={styles.card}>
              <div className="card-body">
              <h5 className="card-title d-flex justify-content-between ">EXPECTED REVENUE  <FontAwesomeIcon icon={faIndianRupee} style={styles.icon} /></h5>
                    <span className="align-start fw-bold text-success">₹1,50,00</span>
              </div>
            </div>
           </div>
           <div className="col-md-6">
            <div className="card" style={styles.cardTable}>
              <div className="card-body">
               <h6 className="card-title">CAMPAIGNS BY TYPE </h6>
               <hr />
               <BarchartModel data={campignType} />
              </div>
            </div>
           </div>
           <div className="col-md-6">
            <div className="card" style={styles.cardTable}>
              <div className="card-body">
                <h6 className="card-title">
                  CAMPAIGNS BY REVENUE AMOUNT
                </h6>
                <hr />
                <table className="table">
                  <thead>
                    <tr>
                      <th scope='col'>Name</th>
                      <th scope='col'>Sum Of Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>AIT</td>
                      <td>₹35000</td>
                    </tr>
                    <tr>
                      <td>RBM</td>
                      <td>₹65000</td>
                    </tr>
                    <tr>
                      <td>SSD</td>
                      <td>₹45000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
           </div>
           <div className="col-md-6">
            <div className="card" style={styles.cardTable}>
              <div className="card-body">
                <h6 className="card-title">CAMPAIGNS BY LEADS</h6>
                <hr/>
               <BarchartModel data={campignByLead}/>
              </div>
            </div>
           </div>
          

        </div>

    </div>
    </>
  )
}
function SalesTrend()
{
  const LeadCreation = [
    {
      name: '4 DEC 2023',
      Actual: 4000,
      Trend: 2400,
      Count: 2400,
    },
    {
      name: '11 DEC 2023',
      Actual: 3000,
      Trend: 1398,
      Count: 2210,
    },
    {
      name: '18 DEC 2023',
      Actual: 2000,
      Trend: 9800,
      Count: 2290,
    },
    {
      name: '25 DEC 2023',
      Actual: 2780,
      Trend: 3908,
      Count: 2000,
    },
    {
      name: '1 Jan 2024',
      Actual: 1890,
      Trend: 4800,
      Count: 2181,
    },
    {
      name: '8 Jan 2024',
      Actual: 2390,
      Trend: 3800,
      Count: 2500,
    },
  ];
  const LeadConversion = [
    {
      date: '4 DEC 2023',
      Trend: 400,
      Actual: 200,
      count: 50, // assuming count is the new field
    },
    {
      date: '11 DEC 2023',
      Trend: 300,
      Actual: 150,
      count: 50,
    },
    {
      date: '18 DEC 2023',
      Trend: 250,
      Actual: 125,
      count: 50,
    },
    {
      date: '25 DEC 2023',
      Trend: 350,
      Actual: 175,
      count: 50,
    },
    {
      date: '1 Jan 2024',
      Trend: 500,
      Actual: 250,
      count: 50,
    },
    {
      date: '8 Jan 2024',
      Trend: 450,
      Actual: 225,
      count: 50,
    },
  ];
  const DealCreation = [
    {
      name: '4 DEC 2023',
      Actual: 4000,
      Trend: 2400,
      Count: 2400,
    },
    {
      name: '11 DEC 2023',
      Actual: 3000,
      Trend: 1398,
      Count: 2210,
    },
    {
      name: '18 DEC 2023',
      Actual: 2000,
      Trend: 9800,
      Count: 2290,
    },
    {
      name: '25 DEC 2023',
      Actual: 2780,
      Trend: 3908,
      Count: 2000,
    },
    {
      name: '1 Jan 2024',
      Actual: 1890,
      Trend: 4800,
      Count: 2181,
    },
    {
      name: '8 Jan 2024',
      Actual: 2390,
      Trend: 3800,
      Count: 2500,
    },
  ];
  const ConatactCreation = [
    {
      name: '4 DEC 2023',
      Actual: 4000,
      Trend: 2400,
      Count: 2400,
    },
    {
      name: '11 DEC 2023',
      Actual: 3000,
      Trend: 1398,
      Count: 2210,
    },
    {
      name: '18 DEC 2023',
      Actual: 2000,
      Trend: 9800,
      Count: 2290,
    },
    {
      name: '25 DEC 2023',
      Actual: 2780,
      Trend: 3908,
      Count: 2000,
    },
    {
      name: '1 Jan 2024',
      Actual: 1890,
      Trend: 4800,
      Count: 2181,
    },
    {
      name: '8 Jan 2024',
      Actual: 2390,
      Trend: 3800,
      Count: 2500,
    },
  ];
  const DealByAmount = [
    { name: '₹100000', value: 25 },
    { name: '₹50000', value: 18 },
    { name: '₹75000', value: 15 },
    { name: '₹120000', value: 30 },
    { name: '₹90000', value: 22 },
];
const DealClosing = [
  {
    name: 'Mitesh',
    Actual: 4,
    Trend: 2,
    Count: 4,
  },
  {
    name: 'Priya',
    Actual: 5,
    Trend: 3,
    Count: 6,
  },
  {
    name: 'Rajesh',
    Actual: 3,
    Trend: 1,
    Count: 3,
  },
  {
    name: 'Jayesh',
    Actual: 4,
    Trend: 3,
    Count: 3,
  },
  // Add more entries as needed
];


  return(
    <>
   <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="card" style={styles.cardTable}>
            <div className="card-body">
              <h6 className="card-title fw-bold">Leads Creation</h6>
              <hr/>
              <LineChartModel data={LeadCreation}/>
            </div>
          </div>
        </div>
        <div className="col-md-6">
           <div className="card" style={styles.cardTable}>
            <div className="card-body">
              <h6 className="card-title fw-bold ">Lead Conversion</h6>
              <hr />
               <LineChartModel data={LeadConversion} />
            </div>
           </div>
        </div>
        <div className="col-md-6">
          <div className="card" style={styles.cardTable}>
               <div className="card-body">
                 <h6 className="card-title fw-bold">Contacts Creation</h6>
                 <hr />
                 <LineChartModel data={ConatactCreation} />
               </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card" style={styles.cardTable}>
               <div className="card-body">
                 <h6 className="card-title">Deal Creation</h6>
                 <hr />
                 <LineChartModel data={DealCreation}/>
               </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body" style={styles.cardTable} >
              <h6 className="card-title">Deal Closing By Amount</h6>
              <hr />
               <BarchartModel data={DealByAmount}/>
            </div>
          </div>
        
        </div>
        <div className="col-md-6">
           <div className="card" style={styles.cardTable}>
            <div className="card-body">
              <h6 className="card-title">Deal Closing by Count</h6>
               <hr />
               <LineChartModel data={DealClosing}/>
            </div>
           </div>
        </div>
      </div>
   </div>
    </>
  )
}
function SalesFollowUp(){
  const data=[
    {
      name: '4 DEC 2023',
      Actual: 4000,
      Trend: 2400,
      Count: 2400,
    },
    {
      name: '11 DEC 2023',
      Actual: 3000,
      Trend: 1398,
      Count: 2210,
    },
    {
      name: '18 DEC 2023',
      Actual: 2000,
      Trend: 9800,
      Count: 2290,
    },
    {
      name: '25 DEC 2023',
      Actual: 2780,
      Trend: 3908,
      Count: 2000,
    },
    {
      name: '1 Jan 2024',
      Actual: 1890,
      Trend: 4800,
      Count: 2181,
    },
    {
      name: '8 Jan 2024',
      Actual: 2390,
      Trend: 3800,
      Count: 2500,
    },
  ]
  return(
    <>
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center vh-1">
          <div className="col-12 m-2">
            <div className="card">
               <div className="card-body">
             
                 <div className=" justify-content-between d-flex mb-3 ">
                 <h5 className="card-title">Task Closure</h5>
                 <Dropdown>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
    Daily
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item>Weekly</Dropdown.Item>
    <Dropdown.Item>Monthly</Dropdown.Item>
  </Dropdown.Menu>
  
</Dropdown>
                 </div>
                   <LineChartModel data={data}/>
               </div>
            </div>
          </div>
           <div className="col-12 m-2">
           <div className="card">
               <div className="card-body">
             
                 <div className=" justify-content-between d-flex mb-3 ">
                 <h5 className="card-title">Meeting Creation</h5>
                 <Dropdown>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
    Daily
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item>Weekly</Dropdown.Item>
    <Dropdown.Item>Monthly</Dropdown.Item>
  </Dropdown.Menu>
  
</Dropdown>
                 </div>
                   <LineChartModel data={data}/>
               </div>
            </div>
           </div>
           <div className="col-12 m-2">
           <div className="card">
               <div className="card-body">
             
                 <div className=" justify-content-between d-flex mb-3 ">
                 <h5 className="card-title">Call Completed</h5>
                 <Dropdown>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
    Daily
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item>Weekly</Dropdown.Item>
    <Dropdown.Item>Monthly</Dropdown.Item>
  </Dropdown.Menu>
  
</Dropdown>
                 </div>
                   <LineChartModel data={data}/>
               </div>
            </div>
           </div>
           <div className="col-12 m-2">
           <div className="card">
               <div className="card-body">
             
                 <div className=" justify-content-between d-flex mb-3 ">
                 <h5 className="card-title">Notes Creation</h5>
                 <Dropdown>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
    Daily
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item>Weekly</Dropdown.Item>
    <Dropdown.Item>Monthly</Dropdown.Item>
  </Dropdown.Menu>
  
</Dropdown>
                 </div>
                   <LineChartModel data={data}/>
               </div>
            </div>
           </div>

        </div>

      </div>
    </>
  )
}

function ActivityStat()
{
  const CallPurpose = [
    { name: 'Sales Calls', value: 4000, color: '#0088FE' },
    { name: 'Support Calls', value: 3500, color: '#00C49F' },
    { name: 'Feedback Calls', value: 2800, color: '#FFBB28' },
    { name: 'Marketing Calls', value: 5000, color: '#FF8042' },
    { name: 'Customer Service Calls', value: 3200, color: '#4CAF50' },
    { name: 'Lead Generation Calls', value: 4500, color: '#FFD700' },
    // Add more types as needed
  ];
  
  return(
    <>
     <div className="container-fluid">
         <div className="row">
            <div className="col-md-3">
              <div className="card" style={styles.card}>
                <div className="card-body">
                <div className="card-title d-flex  justify-content-between  align-items-center ">
                   Open Task
                  <FontAwesomeIcon icon={faTasks} style={styles.icon} />
                </div>
                <span className="align-start fw-bold text-success">115</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
            <div className="card" style={styles.card}>
                <div className="card-body">
                <div className="card-title d-flex  justify-content-between  align-items-center ">
                  Tasks Completed
                  <FontAwesomeIcon icon={faTasks} style={styles.icon} />
                </div>
                <span className="align-start fw-bold text-success">115</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
            <div className="card" style={styles.card}>
                <div className="card-body">
                <div className="card-title d-flex  justify-content-between  align-items-center ">
                    Calls This Week
                  <FontAwesomeIcon icon={faTeletype} style={styles.icon} />
                </div>
                <span className="align-start fw-bold text-success">115</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
            <div className="card" style={styles.card}>
                <div className="card-body">
                <div className="card-title d-flex  justify-content-between  align-items-center ">
                  Meetings This Month
                  <FontAwesomeIcon icon={faHandshake} style={styles.icon} />
                </div>
                <span className="align-start fw-bold text-success">115</span>
                </div>
              </div>
            </div>
         </div>
         <div className="row">
          <div className="col-md-12">
             <div className="card" style={styles.cardTable}>
              <div className="card-body">
              <div className=" justify-content-between d-flex mb-3 ">
                 <h5 className="card-title">Call Purpose</h5>
                 <Dropdown>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
    Daily
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item>Weekly</Dropdown.Item>
    <Dropdown.Item>Monthly</Dropdown.Item>
  </Dropdown.Menu>
  
</Dropdown>
              </div>
              <BarchartModel data={CallPurpose} />
              </div>
         
                
             </div>
          </div>
          <div className="col-md-6">
            <div className="card" style={styles.card}>
              <div className="card-body">
                <h6 className="card-title">
                  Task By Users
                </h6>
              </div>
              <table className="table table-hover ">
                <tbody>
                  <tr>
                    <td>Sahil Attar</td>
                    <td>2</td>
                    <td><h6><span className="badge bg-secondary">100%</span></h6></td>
                  </tr>
                </tbody>
                </table>
            </div>
          </div>
          <div className="col-md-6">
          <div className="card" style={styles.card}>
                <div className="card-body">
                <div className="card-title d-flex  justify-content-between  align-items-center ">
                   My Calls
                  <FontAwesomeIcon icon={faTeletype} style={styles.icon} />
                </div>
                <span className="align-start fw-bold text-success">115</span>
                </div>
              </div>
          
         </div>
</div>
     </div>
    </>
  )
}