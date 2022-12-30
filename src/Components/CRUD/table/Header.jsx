import React from "react";
import "./index.css";
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


function Header() {
  return (<>
  
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Degree</th>
        <th>Address</th>
        <th>Number</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
  </>
  );
}

export default Header;
