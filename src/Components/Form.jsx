import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {db} from './firebase'
import {addDoc, collection, getDocs} from 'firebase/firestore'

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import {
  toastSuccess,
  toastError,
  toastWarning,
  toastInformation,
  toastDark,
} from "./Toast";
import FIREBASE_API from "./API/Api";

function Form() {
  const userCollextionRef = collection(db , "user")

  const navigate = useNavigate();

  const [disabled, setdDisabled] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const dataHandler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };


// -----------SIgn UP through FIRESTONE TO connect with CRUD APP


const postData = async (e) => {
  e.preventDefault();
  setdDisabled(true);
  const { name, email, password, cpassword } = user;

  if (name && email && password && cpassword) {
    if (password === cpassword) {
     let res =  await addDoc(userCollextionRef, {user})

      if (res) {
        toastSuccess("User Registered");
        setUser({
          name: "",
          email: "",
          password: "",
          cpassword: "",
        });
       

        setTimeout(() => {
          navigate("/");
        }, 2300);
        // alert("Data Stored");
        setdDisabled(false);
      }
    } else {
      toastWarning("Passwords are not same ");
      // alert("Password not same ");
      setUser({
        password: "",
        cpassword: "",
      });
      setdDisabled(false);
    }
  } else {
    toastError("Filled All fields");
    // alert();
    setdDisabled(false);
  }
};









  //-----------SIGN UP through Firebase - Not FireStone 
  // const postData = async (e) => {
  //   e.preventDefault();
  //   setdDisabled(true);
  //   const { name, email, password, cpassword } = user;

  //   if (name && email && password && cpassword) {
  //     if (password === cpassword) {
  //       const res = await fetch(`${FIREBASE_API}/reactform.json`, {
  //         method: "POST",
  //         headers: {
  //           "Content-type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           name,
  //           email,
  //           password,
  //           cpassword,
  //         }),
  //       });

  //       if (res) {
  //         // setUser({
  //         //   name: "",
  //         //   email: "",
  //         //   password: "",
  //         //   cpassword: "",
  //         // });
  //         toastSuccess("User Registered");

  //         setTimeout(() => {
  //           navigate("/");
  //         }, 2300);
  //         // alert("Data Stored");
  //         setdDisabled(false);
  //       }
  //     } else {
  //       toastWarning("Passwords are not same ");
  //       // alert("Password not same ");
  //       setUser({
  //         password: "",
  //         cpassword: "",
  //       });
  //       setdDisabled(false);
  //     }
  //   } else {
  //     toastError("Filled All fields");
  //     // alert();
  //     setdDisabled(false);
  //   }
  // };

  return (
    <>
      <MDBContainer fluid>
        <MDBCard className="text-black m-5" style={{ borderRadius: "50px" }}>
          <MDBCardBody>
            <form method="POST">
              <MDBRow>
                <MDBCol
                  md="10"
                  lg="6"
                  className="order-2 order-lg-1 d-flex flex-column align-items-center"
                >
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Sign up
                  </p>

                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size="lg" />
                    <MDBInput
                      name="name"
                      label="Your Name"
                      id="form1"
                      type="text"
                      autoComplete="off"
                      value={user.name}
                      onChange={dataHandler}
                      className="w-100"
                      required
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size="lg" />
                    <MDBInput
                      name="email"
                      label="Your Email"
                      id="form2"
                      type="email"
                      autoComplete="off"
                      value={user.email}
                      onChange={dataHandler}
                      required
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size="lg" />
                    <MDBInput
                      name="password"
                      label="Password"
                      id="form3"
                      autoComplete="off"
                      value={user.password}
                      onChange={dataHandler}
                      type="password"
                      required
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="key me-3" size="lg" />
                    <MDBInput
                      name="cpassword"
                      label="Repeat your password"
                      id="form4"
                      autoComplete="off"
                      value={user.cpassword}
                      onChange={dataHandler}
                      type="password"
                      required
                    />
                  </div>

                  <MDBBtn
                    className="mb-4"
                    size="lg"
                    disabled={disabled}
                    onClick={postData}
                  >
                    Register
                  </MDBBtn>
                  <a id="dontHave" href="/">
                    Already an Account?
                  </a>
                  <br></br>
                </MDBCol>

                <MDBCol
                  md="10"
                  lg="6"
                  className="order-1 order-lg-2 d-flex align-items-center"
                >
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    fluid
                  />
                </MDBCol>
              </MDBRow>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
      <ToastContainer />
    </>
  );
}

export default Form;
