import React from 'react'

function SidebarEmployee({setDept}) {
  return (
    <div> <div style={{backgroundColor:"#ebe7e7",padding:"20px",margin:"25px",height:"70vh",textAlign:"center"}}>
    <input type="search" />
    <div style={{marginTop:"15px",cursor:"pointer"}} onClick={()=>setDept("HR")}>HR</div>
    <div style={{marginTop:"15px",cursor:"pointer"}} onClick={()=>setDept("IT")}>IT</div>
    <div style={{marginTop:"15px",cursor:"pointer"}} onClick={()=>setDept("MANAGEMENT")}>MANAGEMENT</div>
    <div style={{marginTop:"15px",cursor:"pointer"}} onClick={()=>setDept("MARKETING")}>MARKETING</div>
  </div></div>
  )
}

export default SidebarEmployee