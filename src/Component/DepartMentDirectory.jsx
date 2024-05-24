import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SidebarEmployee from './SidebarEmployee';
import NavEmployee from './NavEmployee';


function DepartMentDirectory() {
  const[dept,setDept]=useState("IT")
  return (
    <div>
      
      <div style={{display:"flex"}}>
       <SidebarEmployee setDept={setDept}/>

       <NavEmployee dept={dept}/>
      </div>
    </div>
  )
}

export default DepartMentDirectory