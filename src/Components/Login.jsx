import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { db } from "./firebase";
import { uid } from "uid";
import { set, get, ref, onValue } from "firebase/database";
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
import Protected from "./Protected";

function Form() {
  const userCollextionRef = collection(db, "user");

    const navigate = useNavigate();
  const [disabled, setdDisabled] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  let name, value;

  const dataHandler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    // setdDisabled(true);
    const { email, password } = user;
    // console.log(user)

    if (email && password) {
      const data = await getDocs(userCollextionRef);
      const userData = data.docs.map((doc) => ({ ...doc.data().user, id: doc.id }));
     
      const found = userData.filter((em) =>{
        if (em.email=== email) {
          return em
        }
      })
      
      if (found.length != 0) {
        if (found[0].password == password) {
          console.log(`Logged IN `, found[0]);
          toastSuccess(`${found[0].name} Logged In`);
          
          setTimeout(() => {
            navigate("/home");
          }, 2300);
        } else {
          toastError("Incorrect Password");
        }
      }
      else{
        toastError("Data Not Found");
      }

    }
    
    else {
      toastError("Filled All fields");
    }
  };

  return (
    <>
      <MDBContainer fluid>
        <MDBCard className="text-black m-5" style={{ borderRadius: "50px" }}>
          <MDBCardBody>
            <form method="GET">
              <MDBRow>
                <MDBCol
                  md="10"
                  lg="6"
                  className="order-2 order-lg-1 d-flex flex-column align-items-center"
                >
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Login
                  </p>

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

                  <MDBBtn
                    className="mb-4"
                    size="lg"
                    disabled={disabled}
                    onClick={postData}
                  >
                    Login
                  </MDBBtn>
                  <a id="dontHave" href="/signup">
                    Create Account
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
