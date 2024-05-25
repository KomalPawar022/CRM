import React, { useState } from "react";
import TaskData from "../Data/TaskData";
import MeetingData from "../Data/MeetingData";
import LeadData from "../Data/LeadData";
import DealsData from "../Data/DealData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faClock,
  faUsers,
  faHandshake,
  faIndianRupee,
  faTasks,
  faTeletype,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [show, setShow] = useState(true);

  const handleViewChange = (event) => {
    const selectedValue = event.target.value;
    setShow(selectedValue === "1"); // Set show to true for 'User', false for 'Admin'
  };

  return (
    <div>
      <div className="container-fluid mt-2">
        <div className="row justify-content-between ">
          <div className="col-md-3">
            <h5 className="fw-bold text-decoration-underline  mt-3">
              Welcome Mitesh Waghmode
            </h5>
          </div>
          <div className="col-md-4">
            <select
              className="form-select form-control"
              aria-label="Default select example"
              onChange={handleViewChange}
            >
              <option selected value="1">
                User
              </option>
              <option value="2">Manager</option>
            </select>
          </div>
        </div>
        {show ? <User /> : <Admin />}
      </div>
    </div>
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
    overflow: "auto",
    height: "450px",
    background: "#fff",
    marginBottom: "25px",
  },
  icon: {
    fontSize: "25px",
    color: "orange",
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
};

function User() {
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-3">
            <div className="card" style={styles.card}>
              <div className="card-body">
                <div className="card-title d-flex  justify-content-between  align-items-center ">
                  My Open Deals
                  <FontAwesomeIcon icon={faHandshake} style={styles.icon} />
                </div>
                <span className="align-start fw-bold">8</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={styles.card}>
              <div className="card-body">
                <div className="card-title d-flex justify-content-between align-items-center">
                  <span className="mr-4">My Untouched Deals</span>
                  <FontAwesomeIcon icon={faShoppingCart} style={styles.icon} />
                </div>
                <span className="align-start fw-bold">8</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={styles.card}>
              <div className="card-body">
                <div className="card-title  d-flex  justify-content-between  align-items-center">
                  My Calls Today
                  <FontAwesomeIcon icon={faTeletype} style={styles.icon} />
                </div>
                <span className="align-start fw-bold">8</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={styles.card}>
              <div className="card-body">
                <div className="card-title  d-flex  justify-content-between  align-items-center">
                  My Leads
                  <FontAwesomeIcon icon={faUsers} style={styles.icon} />
                </div>
                <span className="align-start fw-bold">8</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <div className="card" style={styles.cardTable}>
              <div className="card-body">
                <h6 className="card-title fw-bold ">My Opening Task</h6>
                <hr />
                <table className="table table-hover ">
                  <thead>
                    <tr>
                      <th scope="col">Subject</th>
                      <th scope="col">Due Date</th>
                      <th scope="col">Status</th>
                      <th scope="col">Priority</th>
                      <th scope="col">Related To</th>
                      <th scope="col">Contact Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TaskData.slice(0, 7).map((i) => (
                      <tr key={i.task_id}>
                        <td>{i.subject}</td>
                        <td>{i.dueDate}</td>
                        <td>{i.status}</td>
                        <td>{i.priority}</td>
                        <td>{i.relatedTo}</td>
                        <td>{i.contactName}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card" style={styles.cardTable}>
              <div className="card-body">
                <h6 className="card-title fw-bold ">My Meetings</h6>
                <hr />
                <table className="table table-hover ">
                  <thead>
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">From</th>
                      <th scope="col">To</th>
                      <th scope="col">Related To</th>
                      <th scope="col">Contact Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MeetingData.slice(0, 5).map((i) => (
                      <tr>
                        <td>{i.title}</td>
                        <td>{i.from}</td>
                        <td>{i.to}</td>
                        <td>{i.related_to}</td>
                        <td>{i.contact_name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <div className="card" style={styles.cardTable}>
              <div className="card-body">
                <h6 className="card-title fw-bold ">Todays Lead</h6>
                <hr />
                <table className="table table-hover ">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Company</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Source</th>
                    </tr>
                  </thead>
                  <tbody>
                    {LeadData.slice(0, 5).map((i) => (
                      <tr>
                        <td>{i.name}</td>
                        <td>{i.company}</td>
                        <td>{i.email}</td>
                        <td>{i.phone}</td>
                        <td>{i.leadSource}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card" style={styles.cardTable}>
              <div className="card-body">
                <h6 className=" card-title fw-bold">
                  My Deals Closing This Month
                </h6>
                <hr />
                <table className="table table-hover ">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Stage</th>
                      <th scope="col">Closing Date</th>
                      <th scope="col">Account</th>
                      <th scope="col">Contact Name</th>
                      <th scope="col">Deal Owner</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DealsData.slice(0, 5).map((i) => (
                      <tr>
                        <td>{i.Name}</td>
                        <td>{i.Amount}</td>
                        <td>{i.Stage}</td>
                        <td>{i.ClosingDate}</td>
                        <td>{i.Account}</td>
                        <td>{i.ContactName}</td>
                        <td>{i.DealOwner}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Admin() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="card" style={styles.card}>
              <div className="card-body">
                <div className="card-title d-flex  justify-content-between  align-items-center ">
                  Deal Created This Month
                  <FontAwesomeIcon icon={faHandshake} style={styles.icon} />
                </div>
                <span className="align-start fw-bold">8</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={styles.card}>
              <div className="card-body">
                <div className="card-title d-flex justify-content-between align-items-center">
                  <span className="mr-4">Revenue In This Month</span>
                  <FontAwesomeIcon icon={faIndianRupee} style={styles.icon} />
                </div>
                <span className="align-start fw-bold">₹350,000</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={styles.card}>
              <div className="card-body">
                <div className="card-title  d-flex  justify-content-between  align-items-center">
                  Deal Closing This Month
                  <FontAwesomeIcon icon={faClock} style={styles.icon} />
                </div>
                <span className="align-start fw-bold">8</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={styles.card}>
              <div className="card-body">
                <div className="card-title  d-flex  justify-content-between  align-items-center">
                  OverDue Task
                  <FontAwesomeIcon icon={faTasks} style={styles.icon} />
                </div>
                <span className="align-start fw-bold">8</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-3">
            <div className="card" style={styles.cardTable2}>
              <div className="card-body">
                <h6 className="card-title">Lead Source By This Month</h6>
                <table className="table">
                  <thead>
                    <th scope="col">Category</th>
                    <th scope="col">Count</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Social Media</td>
                      <td>15</td>
                    </tr>
                    <tr>
                      <td>Organic Search</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>Deals Won</td>
                      <td>9</td>
                    </tr>
                    <tr>
                      <td>Revenue</td>
                      <td>₹3,50,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={styles.cardTable2}>
              <div className="card-body">
                <h6 className="card-title text-start">
                  TOP 10 Deals In This Month
                </h6>
                <table className="table">
                  <thead>
                    <th>Deal Name</th>
                    <th>Amount</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Deal 1</td>
                      <td>₹50,000</td>
                    </tr>
                    <tr>
                      <td>Deal 2</td>
                      <td>₹45,000</td>
                    </tr>
                    <tr>
                      <td>Deal 3</td>
                      <td>₹40,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={styles.cardTable2}>
              <div className="card-body">
                <table className="table">
                  <thead>
                    <th>Deal Name</th>
                    <th>Amount</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Deal 1</td>
                      <td>₹50,000</td>
                    </tr>
                    <tr>
                      <td>Deal 2</td>
                      <td>₹45,000</td>
                    </tr>
                    <tr>
                      <td>Deal 3</td>
                      <td>₹40,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={styles.cardTable2}>
              <div className="card-body">
                <h6 className="card-title">
                  Top 10 Deals Closed In This Month
                </h6>
                <table className="table">
                  <thead>
                    <th>Deal Name</th>
                    <th>Amount</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Deal 1</td>
                      <td>₹50,000</td>
                    </tr>
                    <tr>
                      <td>Deal 2</td>
                      <td>₹45,000</td>
                    </tr>
                    <tr>
                      <td>Deal 3</td>
                      <td>₹40,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={styles.cardTable2}>
              <div className="card-body">
                <h6 className="card-title">Big Deal Lost This Month</h6>
                <table className="table">
                  <thead>
                    <th>Deal Name</th>
                    <th>Amount</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Deal 1</td>
                      <td>₹50,000</td>
                    </tr>
                    <tr>
                      <td>Deal 2</td>
                      <td>₹45,000</td>
                    </tr>
                    <tr>
                      <td>Deal 3</td>
                      <td>₹40,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={styles.cardTable2}>
              <div className="card-body">
                <h6 className="card-title">Top 20 Account By Revenue</h6>
                <table className="table">
                  <thead>
                    <th>Deal Name</th>
                    <th>Amount</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Deal 1</td>
                      <td>₹50,000</td>
                    </tr>
                    <tr>
                      <td>Deal 2</td>
                      <td>₹45,000</td>
                    </tr>
                    <tr>
                      <td>Deal 3</td>
                      <td>₹40,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={styles.cardTable2}>
              <div className="card-title"></div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={styles.cardTable2}>
              <div className="card-title"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
