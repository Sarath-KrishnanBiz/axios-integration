import { AiFillEye } from "react-icons/ai";
import "./style/style.css";
import axios from "axios";
import logo from "./logo.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function LoginO() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();

    const loginclick =(e) =>{
        const url ="http://localhost:3000/dev/Login";
        const data ={email:email,password:password}
        const header ={};
        axios.post(url,data,header)
        .then((res) =>{
            console.log("Response==> "+JSON.stringify(res.data))
            localStorage.setItem("tokenvariable",res.data)
            // navigate("/Campaignedit")
        })
        .catch((err) =>{
            console.log("Error==> "+err)
        })
    };

    return (
        <>
            <div className="Login_outer">
                <div className="Login_outer_row1">
                    <div className="Login_outer_row1_inner">
                        <div className="Login_outer_row1_inner_row1">
                            <img src={logo}></img>
                            <label> LOGO</label>
                        </div>
                        <div className="Login_outer_row1_inner_row2">
                            <label><b>Welcome!</b></label>
                        </div>
                        <div className="Login_outer_row1_inner_row3">
                            <label>Please Sign-in to Account</label>
                        </div>
                        <div className="Login_outer_row1_inner_row4">
                            <input onChange={(e) => {
                                setemail(e.target.value);
                            }} type="text" placeholder="Email" />{email}
                        </div>
                        <div className="Login_outer_row1_inner_row5">
                            <input onChange={(e) => {
                                setpassword(e.target.value);
                            }} type="text" placeholder="Password" />{password}
                            <div className="passwordeye">
                                <AiFillEye />
                            </div>
                        </div>
                        <div className="Login_outer_row1_inner_row6">
                            <div className="Login_outer_row1_inner_row6_left">
                                <input type="checkbox" />
                                <label>Remeber me</label>
                            </div>
                            <div className="Login_outer_row1_inner_row6_right">
                                <label>Forgot password ?</label>
                            </div>
                        </div>
                        <div className="Login_outer_row1_inner_row7">
                            <button onClick={(e) => {
                                loginclick(e);
                            }} >LOGIN</button>
                        </div>

                    </div>
                </div>
                <div className="Login_outer_row2">
                    <label>
                        New Member ?<span > Sign Up </span>
                    </label>
                </div>
            </div>
        {/* </>onClick={signup} */}
        </>
    )}