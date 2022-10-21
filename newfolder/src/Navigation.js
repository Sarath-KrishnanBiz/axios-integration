import React from "react";
import { BrowserRouter,Route,  Routes } from "react-router-dom";
// import Login from "./Login";
// import LoginO from "./LoginO";
// import Home from "./Home";
// import Salesdash from "./Salesdash";
// import Signup from "./Signup";
import Campaigneditpage from "./Campaigneditpage";
 
export default function Navigation() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            {/* <Route path="/" element={<LoginO/>}> */}
            {/* </Route> */}
            {/* <Route path="/home" element={<Home />}>
            </Route>
            <Route path="/Salesdash" element={<Salesdash />}></Route> */}
            {/* <Route path="/" element={<Signup/>}></Route> */}
            {/* <Route path="/verifyotp" element={<verify/>}></Route> */}
            <Route path="/" element={<Campaigneditpage/>}></Route>
      
        </Routes>
      </BrowserRouter>
    </>
  );
}
