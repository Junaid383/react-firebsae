import React from "react";
import { useNavigate } from "react-router-dom";


const Protected = ({ user , component: Component, ...rest }) => {
  const navigate = useNavigate();

  // const isLogged = {user};
console.log("In Proteccted" , user)
return navigate("/home");

//   if (!user) {
//     navigate("/home");
// }

  
};

export default Protected;