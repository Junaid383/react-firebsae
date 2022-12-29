import "./App.css";
import Form from "./Components/Form";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Test from "./Components/Test"
import  Test_login from './Components/Test_login'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Form />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </Router>

{/* <Test /> */}
{/* <Test_login /> */}

    {/* <Login /> */}
    </>
  );
}

export default App;
