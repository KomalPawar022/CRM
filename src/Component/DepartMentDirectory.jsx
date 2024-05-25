import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import SidebarEmployee from "./SidebarEmployee";
import NavEmployee from "./NavEmployee";
import useAuth from "./Context";

function DepartMentDirectory() {
  const auth = useAuth();
  useEffect(() => {
    auth?.setIsNewProfileClicked(false);
  });

  const [dept, setDept] = useState("IT");
  return (
    <div>
      <div style={{ display: "flex" }}>
        <SidebarEmployee setDept={setDept} />

        <NavEmployee dept={dept} />
      </div>
    </div>
  );
}

export default DepartMentDirectory;
