import "./titlebar.css";
import { GiBeachBag } from "react-icons/gi";
import { HiDownload } from "react-icons/hi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";

export default function TitleBar() {
  // const [Startdate, setStartdate] = useState("");
  // const [Enddate, setEnddate] = useState("");
  // const [Status, setStatus] = useState("");
  // const [Owner, setOwner] = useState("");
  // const [ParentCampaign, setParentCampaign] = useState("");


  const Saveclick =(e) =>{
    // alert("Hi")
    const url ="http://localhost:3000/dev/updateCampaign";
    const data ={Campaignname:Campaignname,Startdate:Startdate,Enddate:Enddate,Status:Status,Owner:Owner,ParentCampaign:ParentCampaign}
    const header ={};
    axios.post(url,data,header)
    .then((res) =>{
        console.log("Response==> "+JSON.stringify(res.data))
        localStorage.setItem("tokenvariable",res.data)
        navigate("/")
    })
    .catch((err) =>{
        console.log("Error==> "+err)
    })
};

  return (
    <>
      <div className="titlebar_top">
        <div className="titlebar_top_col1">
          <div className="titlebar_bagSquare">
            <GiBeachBag className="titlebar_bagIcon" />
          </div>
          <label><b>Campaign One</b></label>
        </div>
        <div className="titlebar_top_col2">
          {/* <div className="titlebar_top_col21"> */}
          {/* <HiDownload className="titlebar_downloadIcon"/> */}
          {/* <label>Bulk Import</label> */}
          {/* </div> */}
          <div className="titlebar_top_col22">
            <BsFillPlusCircleFill className="titlebar_plusIcon" />
            <label onClick={(e) => {
              Saveclick(e);
            }} >Save</label>
          </div>
        </div>
      </div>
    </>
  );
}
