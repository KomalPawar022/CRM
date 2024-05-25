import React from "react";
import { useState } from "react";
import NavbarComponent from "./Navbar";
import { Link, Outlet, Route, Routes } from "react-router-dom/dist";
import EmployeeTree from "./EmployeeTree";
import DepartmentTree from "./DepartmentTree";
import DepartMentDirectory from "./DepartMentDirectory";
import NewHires from "./NewHires";
import NavOrg from "./NavOrg";
import useAuth from "./Context";

function Organization() {
  const auth = useAuth();

  return (
    <div>
      <NavbarComponent />
      {auth?.isNewProfileClicked ? null : (
        <nav className="navbar navbar-expand-xl bg-dark">
          <div className="container-fluid" style={{ color: "black" }}>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="EmployeeTree"
                    className="nav-link text-white"
                    aria-current="page"
                  >
                    Employee Tree
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="DepartMentTree" className="nav-link text-white">
                    Department Tree
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="DepartMentDirectory"
                    className="nav-link text-white"
                  >
                    Department Directory
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="NewHire" className="nav-link text-white">
                    New Hires
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
      <Outlet />
    </div>
  );
}

export default Organization;
