import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function NavbarComponent() {
  return (
    <>
    <nav className="navbar navbar-expand-xl bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-white fw-bold"> <i className="fa fa-slack" aria-hidden="true"></i> CRM</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/home' className="nav-link text-white" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/lead' className="nav-link text-white">Lead</Link>
        </li>
        <li className="nav-item">
          <Link to='/Contact' className="nav-link text-white">Contact</Link>
        </li>
        <li className="nav-item">
          <Link to='/Account' className="nav-link text-white">Account</Link>
        </li>
        <li className="nav-item">
          <Link to='/Deal' className="nav-link text-white">Deal</Link>
        </li>
        <li className="nav-item">
          <Link to='/Task' className="nav-link text-white">Task</Link>
        </li>
        <li className="nav-item">
          <Link to='/Call' className="nav-link text-white">Call</Link>
        </li>
        <li className="nav-item">
          <Link to='/Analytics' className="nav-link text-white">Analytics</Link>
        </li>
        <li className="nav-item">
          <Link to='/Product' className="nav-link text-white">Product</Link>
        </li>
        <li className="nav-item dropdown text-white">
          <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul className="dropdown-menu">
            <li><Link to='/Quote' className="dropdown-item">Quote</Link></li>
            <li><Link to='/Vendor' className="dropdown-item">Vendor</Link></li>
            <li><Link to='/Sales' className="dropdown-item">Sales Order</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to='/Organization' className="nav-link text-white">Organization</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
      </>
  );
}
