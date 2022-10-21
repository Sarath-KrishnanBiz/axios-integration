import { AiFillEye } from "react-icons/ai";
import "./style/signup.css";
import Logo from "./logo.png"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
export default function Signup() {

    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [repassword,setrepassword] = useState("");
    const navigate = useNavigate();

    const signupclick = (e) => {
        const url = "http://localhost:3000/dev/signup";
        const data = {firstname:firstname,lastname:lastname,email:email,password:password};
        const header = "";
        axios.post(url, data, header)
            .then((res) => {
                console.log("Response===> " + JSON.stringify(res.data))
                navigate("/verifyotp")
            })
            .catch((err) => {
                console.log("Error===> " + err)
            })
    }

    return (
        <>
            <div className="Signup_outer">
                <div className="Signup_outer_inner">
                    <div className="Signup_outer_inner_row1">
                        <img src={Logo}></img>
                        <label>Logo</label>
                    </div>
                    <div className="Signup_outer_inner_row2">
                        <label><b>Welcome !</b></label>
                    </div>
                    <div className="Signup_outer_inner_row3">
                        <label>Please signup your Account </label>
                    </div>
                    <div className="Signup_outer_inner_row4">
                        <div className="Signup_outer_inner_row4_left">
                            <input onChange={(e) => {
                                setfirstname(e.target.value);
                            }} type={"text"} placeholder="First name" />
                        </div>
                        <div className="Signup_outer_inner_row4_right">
                            <input onChange={(e) => {
                                setlastname(e.target.value);
                            }} type={"text"} placeholder="Last name" />
                        </div>
                    </div>
                    <div className="Signup_outer_inner_row5">
                        <input onChange={(e) => {
                            setemail(e.target.value);
                        }} type={"text"} placeholder="Email" />
                    </div>
                    <div className="Signup_outer_inner_row6">
                        <input onChange={(e) => {
                            setpassword(e.target.value);
                        }} type={"Password"} placeholder="Password" />
                        <div className="passwordeye">
                            <AiFillEye />
                        </div>
                    </div>
                    <div className="Signup_outer_inner_row7">
                        <input onChange={(e) => {
                            setrepassword(e.target.value);
                        }} type={"text"} placeholder="Re-Enter password" />
                        <div className="passwordeye">
                            <AiFillEye />
                        </div>
                    </div>
                    <div className="Signup_outer_inner_row8">
                        <input type={"checkbox"} />
                        <div className="Signup_outer_inner_row8_label">
                            <label> By clicking on Register,you agree to our </label><br></br>
                            <label>
                                <span>Terms and Conditions</span> of use
                            </label>
                        </div>
                    </div>
                    <div className="Signup_outer_inner_row9">
                        <button onClick={(e) => {
                            signupclick(e);
                        }} >Register</button>
                    </div>
                </div>
            </div>
        </>
    )
}