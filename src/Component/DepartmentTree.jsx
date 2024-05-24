// import React from 'react';
// import './employee.css';
// import { ReactHiererchyChart } from 'react-hierarchy-chart';
// import { Timeline } from '@mui/icons-material';

// const EmployeeTree = () => {
//   const nodes = [
//     {
//         img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",

//       name: 'CEO',
//       cssClass: 'level1',
//       position: 'Sridhar Vembu',
//       childs: [
//         {
//             img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
//           name: 'Administrator',
//           cssClass: 'level2',
//           position: 'Micheal Johnson'

//         },
//         {
//             img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",

//           name: 'Administrator',
//           cssClass: 'level2',
//           position: 'Isabellla Loppezig',
//           childs: [
//             {
//                 img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",

//               name: 'Manager',
//               cssClass: 'level3',
//               position: 'Andrew Turner',
//               childs:[
//                 {
//                     img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    
//                   name: 'Assistance Manager',
//                   cssClass: 'level3',
//                   position: 'Ashey Millar',
//                   childs:[
//                     {
//                         img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        
//                       name: 'Team Member',
//                       cssClass: 'level3',
//                       position: 'Amardeep Banjeet'
//                     },
//                   ]

//                 },
//                 {
//                     img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    
//                   name: 'Team Member',
//                   cssClass: 'level3',
//                   position: 'Emilly Johnson'
//                 },
//               ]
//             },
//             {
//                 img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",

//               name: 'Assistance Manager',
//               cssClass: 'level3',
//               position: 'Ember Johnson',
//               childs:[
//                 {
//                     img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    
//                   name: 'Team Member',
//                   cssClass: 'level3',
//                   position: 'Caspian Johnson'
//                 },
               
//               ]
//             },
//             {
//                 img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",

//               name: 'Manager',
//               cssClass: 'level3',
//               position: 'Ethen Anderson'
//             }
//           ]
//         },
//         {
//             img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",

//           name: 'Administrator',
//           cssClass: 'level2',
//           position: 'Christhopar Brown',
         
        
//         },  {
//             img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",

//             name: 'Administrator',
//             cssClass: 'level2',
//             position: 'Clarkson Walter',
         
//           }
//       ]
//     }
//   ];

//   return (
//     <div className="App">
    
     
//       <div className="hierarchy-viewer">
//         <ReactHiererchyChart
//           nodes={nodes}
//           direction="horizontal"
//           randerNode={(node) => {
//             return (
//               <div className="node-template">
//                <div style={{display:"flex",alignItems:"center"}}>
//                <img style={{width:"60px",height:"60px"}} src={node.img} alt="" />
//                 <div>
//                 <strong>{node.position}</strong>
//                 <span>{node.name}</span>
//                 </div>
//                </div>
//               </div>
//             );
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default EmployeeTree;




// import * as React from 'react';

// import OrgTreeComponent, { useTree } from 'react-drag-hierarchy-tree';

// const data = {
 
//   children: [
//     {
//       id: 2,
//       label: 'Management',

//       children: [
//         {
//           id: 3,
//           label: 'Deep Goel - CEO',
//           children: [],
//         },
//         {
//             id: 3,
//             label: 'Lilly Williams - Administrator',
//             children: [],
//           },
//           {
//             id: 3,
//             label: 'Clarkson Walter -Administrator',
//             children: [],
//           },
//           {
//             id: 3,
//             label: 'Micheal Johnson - Administrator',
//             children: [],
//           },
//           {
//             id: 3,
//             label: 'Christophar Brown - Administrator',
//             children: [],
//           },
//       ],
//     },
//     {
//       id: 2,
//       label: 'Marketing',
//       children: [
//         {
//           id: 3,
//           label: 'Ethen Anderson - Manager',
         
//         },
//         {
//             id: 3,
//             label: 'Hazel Carter - Assistance Manager',
           
//           },
//           {
//             id: 3,
//             label: 'Lindon Smith - Team Member',
           
//           },
//           {
//             id: 3,
//             label: 'Olivia Smith - Team Member',
           
//           },
//           {
//             id: 3,
//             label: 'Sofia Rodriguez - Team Member',
           
//           },
//       ],
//     },
//     {
//         id: 3,
//         label: 'IT',
//         children: [
//           {
//             id: 3,
//             label: 'Andrew Turner - Manager',
           
//           },
//           {
//             id: 3,
//             label: 'Ember Johnson - Assistant Manager',
           
//           },
//           {
//             id: 3,
//             label: 'Asher Miller - Assistant Manager',
           
//           },
//           {
//             id: 3,
//             label: 'Caspian Jones - Team Member',
           
//           },
//           {
//             id: 3,
//             label: 'Isabella Lopez - Team Member',
           
//           },
//           {
//             id: 3,
//             label: 'Emilly Jones - Team Member',
           
//           },
//           {
//             id: 3,
//             label: 'Aparna Acharya - Team Member',
           
//           },
//         ],
//       },
//       {
//         id: 4,
//         label: 'HR',
//         children: [
         
//         ],
//       },
//   ],
// };

// const EmployeeTree = () => {
//   const { treeRef } = useTree();
//   const onClick = () => {
//     treeRef.current?.onExpandNodes();
//   };

//   return (
//     <div>
//       <button onClick={onClick}>close/open</button>
//       <OrgTreeComponent data={data} ref={treeRef} horizontal />

//     </div>
//   );
// };


// export default EmployeeTree;









import React, { useState } from 'react'


function DepartmentTree() {
  const[curr,setCurr]=useState("Management")
  return (
  <div>

    <div style={{display:"flex",gap:"50px"}}>
    <div>
        <div style={{padding:"15px",border:"1px solid black",margin:"15px",cursor:"pointer",textAlign:"center"}} onClick={()=>setCurr("Management")}>Management</div>
        
        <div style={{padding:"15px",border:"1px solid black",margin:"15px",cursor:"pointer",textAlign:"center"}} onClick={()=>setCurr("IT")}>IT</div>
        <div style={{padding:"15px",border:"1px solid black",margin:"15px",cursor:"pointer",textAlign:"center"}} onClick={()=>setCurr("Marketing")}>Marketing</div>
        <div style={{padding:"15px",border:"1px solid black",margin:"15px",cursor:"pointer",textAlign:"center"}} onClick={()=>setCurr("")}>HR</div>
      </div>
      {
        curr=="Management"?<><div>
        <div  style={{padding:"15px",border:"1px solid black",margin:"15px"}}>Deep Goyal - CEO</div>
        <div  style={{padding:"15px",border:"1px solid black",margin:"15px"}}>Deep Goyal - CEO</div>
        <div  style={{padding:"15px",border:"1px solid black",margin:"15px"}}>Deep Goyal - CEO</div>
        <div  style={{padding:"15px",border:"1px solid black",margin:"15px"}}>Deep Goyal - CEO</div>
      </div></>:(curr=="IT"?<><div>
        <div  style={{padding:"15px",border:"1px solid black",margin:"15px"}}>Deep Goyal - CEO</div>
        <div  style={{padding:"15px",border:"1px solid black",margin:"15px"}}>Deep Goyal - CEO</div>
        <div  style={{padding:"15px",border:"1px solid black",margin:"15px"}}>Deep Goyal - CEO</div>
        <div  style={{padding:"15px",border:"1px solid black",margin:"15px"}}>Deep Goyal - CEO</div>
        <div  style={{padding:"15px",border:"1px solid black",margin:"15px"}}>Deep Goyal - CEO</div>
        <div  style={{padding:"15px",border:"1px solid black",margin:"15px"}}>Deep Goyal - CEO</div>
        <div  style={{padding:"15px",border:"1px solid black",margin:"15px"}}>Deep Goyal - CEO</div>
      </div></>:(curr=="Marketing"?<><div>
        <div  style={{padding:"15px",border:"1px solid black",margin:"15px"}}>Deep Goyal - CEO</div>
        <div  style={{padding:"15px",border:"1px solid black",margin:"15px"}}>Deep Goyal - CEO</div>
        <div  style={{padding:"15px",border:"1px solid black",margin:"15px"}}>Deep Goyal - CEO</div>
        <div  style={{padding:"15px",border:"1px solid black",margin:"15px"}}>Deep Goyal - CEO</div>
        <div  style={{padding:"15px",border:"1px solid black",margin:"15px"}}>Deep Goyal - CEO</div>
      </div></>:""))
      }
     
      
    </div>
    </div>
  )
}

export default DepartmentTree