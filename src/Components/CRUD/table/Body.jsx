import React from "react";
import { useState, useEffect } from "react";
import {db} from '../../firebase'
import { addDoc, collection, getDocs } from "firebase/firestore";
import { MDBBtn } from "mdb-react-ui-kit";
import "./index.css";


function Body({ users, willDelete, willUpdate }) {
  const userCollextionRef = collection(db, "data");
  const [getData, setGetData] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  let count;

  const getUser = async () => {
    const data = await getDocs(userCollextionRef);
    const userData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    // console.log(userData);
    setGetData(userData);
    count = count + 1;
  };
  useEffect(() => {
    getUser();
    // createUser();
  }, []);

  useEffect(() => {
    if (isUpdated) {
      getUser();
      setIsUpdated(false);
    }
  }, [isUpdated]);

  return (
    <>
      <tbody>
        {getData.map((user, idx) => (
          <tr key={idx}>
            <td>{idx + 1}</td>
            <td>{user.name}</td>
            <td>{user.degree}</td>
            <td>{user.address}</td>
            <td>{user.number}</td>
            <td>
              <MDBBtn
                color="info"
                type="submit"
                value="Submit"
                id="edit"
                onClick={() => {
                  // setFormDataFunc(user);
                  willUpdate(user);
                }}
              >
                Edit
              </MDBBtn>
            </td>
            <td>
              <MDBBtn
                className="me-1"
                color="danger"
                type="submit"
                value="Submit"
                // onClick={() => delData(user.number)}
                onClick={() => willDelete(user)}
              >
                Delete
              </MDBBtn>
            </td>
          </tr>
        ))}
      </tbody>

    </>
  );
}

export default Body;
