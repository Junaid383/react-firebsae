import React from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ navigation }) => {
  //  const navigate = useNavigate();
  const usertest =false;

//   const isLogged = true;
// console.log("In Proteccted" , user)
// return navigate("/home");

  if (!usertest) {
    return navigation.navigate("/login");
}

  
};

export default Protected;