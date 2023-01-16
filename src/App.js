import "./App.css";
import Form from "./Components/Form";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Crud from "./Components/CRUD/Crud.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Test from "./Components/Test";
import Test_login from "./Components/Test_login";
import Protected from "./Components/Protected";
import Page_error from "./Components/Page_error";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Form />} />
          <Route path="*" element={<Page_error />} />
          <Route exact path="/home" element={<Crud />} />
        </Routes>
      </Router>

      {/* For testing purpose  */}

      {/* <Crud/> */}
      {/* <Form /> */}
      {/* <Test /> */}
      {/* <Test_login /> */}
      {/* <Login /> */}
    </>
  );
}

export default App;
