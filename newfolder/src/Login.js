import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login (){
    const[email,setemail] = useState("");
    const[password,setpassword] = useState("");

    const navigate=useNavigate();
    
    const loginclick = (e)=>{
        const url ="http://localhost:3000/dev/Login";
        const data={email:email,password:password};
        const header={};
        axios.post(url,data,header)
        .then((res) =>{
            console.log("Response==> "+JSON.stringify(res.data))
            localStorage.setItem("tokenvariable",res.data)
            navigate("/home")
        })
        .catch((err)=>{
            console.log("Error==> "+err)
        })
    };
    return(
    <>
    
    <div className="login">
        <div className="login_innerdiv">
            <h1>Login</h1>
            <input onChange={(e)=>{
                setemail(e.target.value);
            }} 
            type={"email"} placeholder="email"></input>{email}<br></br>
            <input 
            onChange={(e)=>{
                setpassword(e.target.value);
            }} 
            type={"text"} placeholder="password"></input>{password}<br></br>
            <button onClick={(e) =>{
                loginclick(e);
            }} >Login</button>
        </div>
    </div>

    </>)
}