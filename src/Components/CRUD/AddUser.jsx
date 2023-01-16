import React, { useState, useEffect } from "react";
import { confirm } from "react-confirm-box";
import Index from "./table/Index";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

import { addDoc, collection, deleteDoc, setDoc, doc } from "firebase/firestore";
import { MDBBtn } from "mdb-react-ui-kit";

import { ToastContainer } from "react-toastify";
import {
  toastSuccess,
  toastError,
  toastWarning,
  toastInformation,
  toastDark,
} from "../Toast";

function AddUser() {
  const navigate = useNavigate();

  const userCollextionRef = collection(db, "data");

  const defaultValue = {
    name: "",
    address: "",
    degree: "",
    number: "",
  };
  const [data, setData] = useState(defaultValue);
  const [users, setUsers] = useState([]);
  const [id, setId] = useState(null);
  const [updateCheck, setUpdateCheck] = useState("Add");

  const handleInputs = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  const [checkEdit, setcheckEdit] = useState(false);

  const postdata = async (e, num) => {
    e.preventDefault();
    const detail = await addDoc(userCollextionRef, data);
    // setData(defaultValue)
    toastSuccess(`Record Entered`);

    setTimeout(() => {
      window.location.reload(false);
    }, 2300);

    // console.log(detail)
    let checkList = users.find((found) => {
      if (found.number == data.number) {
        // console.log(found);
        return found;
      }
    });

    if (checkList && checkEdit === false) {
      alert("That Number Already Registered");
      e.preventDefault();
    } else {
      e.preventDefault();
      setUsers([...users, data]);
      setData(defaultValue);
    }
  };

  // const postdata = (e, num) => {
  //   let checkList = users.find((found) => {
  //     if (found.number == data.number) {
  //       // console.log(found);
  //       return found;
  //     }
  //   });

  //   if (checkList && checkEdit === false) {
  //     alert("That Number Already Registered");
  //     e.preventDefault();
  //   } else {
  //     e.preventDefault();
  //     setUsers([...users, data]);
  //     setData(defaultValue);
  //   }
  // };

  const updateData = (e) => {
    e.preventDefault();
    const index = users.findIndex((user) => user.number == id);
    users[index] = data;
    setUsers(users);

    const docRef = doc(db, "data", data.id);
    console.log(docRef);
    setDoc(docRef, data)
      .then((docRef) => {
        toastSuccess(`Record Update`);
        setUpdateCheck("Add");
        setData(defaultValue);
        setTimeout(() => {
          navigate("/home");
          window.location.reload(false);
        }, 2300);
      })
      .catch((error) => {
        console.log(error);
      });
    // setId(null);
  };

  const deleteCallback = async (idx) => {
    const delDecision = await confirm("Are you sure..");
    console.log(idx);

    if (delDecision) {
      const docRef = doc(db, "data", idx.id);

      deleteDoc(docRef)
        .then(() => {
          toastSuccess(`Record Deleted`);
          setTimeout(() => {
            navigate("/home");
            window.location.reload(false);
          }, 2300);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const updateCallback = (user) => {
    console.log(user);
    setUpdateCheck("Update");
    // setId(user.number);
    setData(user);
  };

  return (
    <div className=" text-center bg-light">
      <form
        onSubmit={(e) => {
          updateCheck == "Add" ? postdata(e) : updateData(e);
        }}
      >
        <label>Name :</label>
        <input
          name="name"
          type="text"
          value={data.name}
          onChange={handleInputs}
          required
        ></input>
        <br></br>
        <br></br>

        <label>Degree :</label>
        <input
          name="degree"
          onChange={handleInputs}
          value={data.degree}
          required
        ></input>
        <br></br>
        <br></br>

        <label>Address :</label>
        <input
          name="address"
          onChange={handleInputs}
          value={data.address}
          required
        ></input>
        <br></br>
        <br></br>

        <label>Number :</label>
        <input
          name="number"
          onChange={handleInputs}
          value={data.number}
          type="number"
          minLength={11}
          maxLength={11}
          required
        ></input>
        <br></br>
        <br></br>
        <MDBBtn id="add" type="submit">
          {updateCheck}
        </MDBBtn>
      </form>
      <div className="adjustment">
        <table className="styled-table ">
          <Index
            users={users}
            deleteCallback={deleteCallback}
            updateCallback={updateCallback}
          />
        </table>
      </div>
      <br></br>
      <br></br>
      <ToastContainer />
    </div>
  );
}

export default AddUser;
