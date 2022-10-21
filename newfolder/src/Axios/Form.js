import { useState } from "react";
import "./form.css";
export default function Form() {

  const [Campaignname, setCampaignname] = useState("");
  const [Startdate, setStartdate] = useState("");
  const [Enddate, setEnddate] = useState("");
  const [Status, setStatus] = useState("");
  const [Owner, setOwner] = useState("");
  const [ParentCampaign, setParentCampaign] = useState("");
  return (
    <>
      <div className="form_outer">
        <div className="form_inner1">
          {/* <label>Lead Details</label> */}
        </div>
        <div className="form_inner3">
          <div className="form_inner31">
            <label>Name</label><br />
            <input onChange={(e) => {
              setCampaignname(e.target.value);
            }} type={"text"} className="form_rectangle" />{Campaignname}
          </div>
          <div className="form_inner31">
            <label>Parent Campaign</label><br />
            <input onChange={(e) => {
              setParentCampaign(e.target.value);
            }} type={"text"} className="form_rectangle" />{ParentCampaign}
          </div>
          <div className="form_inner31">
            <label>Status</label><br />
            <input onChange={(e) => {
              setStatus(e.target.value);
            }} type={"text"} className="form_rectangle" />{Status}
          </div>
        </div>
        <div className="form_inner3">
          <div className="form_inner31">
            <label>Start Date</label><br />
            <input onChange={(e) => {
              setStartdate(e.target.value);
            }} type={"text"} className="form_rectangle" />{Startdate}
          </div>
          <div className="form_inner31">
            <label>End Date</label><br />
            <input onChange={(e) => {
              setEnddate(e.target.value);
            }} type={"text"} className="form_rectangle" />{Enddate}
          </div>
          <div className="form_inner31">
            <label>Owner</label><br />
            <input onChange={(e) => {
              setOwner(e.target.value);
            }} type={"text"} className="form_rectangle" />{Owner}
          </div>
        </div>
        {/* <div className="form_inner3">
          <div className="form_inner31">
            <label>Email</label><br/>
            <input type={"text"} className="form_rectangle"/>
          </div>
          <div className="form_inner31">
            <label>Phone</label><br/>
            <input type={"text"} className="form_rectangle"/>
          </div>
          <div className="form_inner31">
            <label>Mobile</label><br/>
            <input type={"text"} className="form_rectangle"/>
          </div>
        </div>
        <div className="form_inner3">
          <div className="form_inner31">
            <label>Addres</label><br/>
            <input type={"text"} className="form_rectangle"/>
          </div>
          <div className="form_inner31">
            <label>City</label><br/>
            <input type={"text"} className="form_rectangle"/>
          </div>
          <div className="form_inner31">
            <label>State</label><br/>
            <input type={"text"} className="form_rectangle"/>
          </div>
        </div>
        <div className="form_inner3">
          <div className="form_inner31">
            <label>Pin Code</label><br/>
            <input type={"text"} className="form_rectangle"/>
          </div>
          <div className="form_inner31">
            <label>Lead Source Name</label><br/>
            <input type={"text"} className="form_rectangle"/>
          </div>
          <div className="form_inner31">
            <label>Date Added On</label><br/>
            <input type={"text"} className="form_rectangle"/>
          </div>
        </div>
        <div className="form_inner3">
          <div className="form_inner31">
            <label>Active Status</label><br/>
            <input type={"text"} className="form_rectangle"/>
          </div>
          <div className="form_inner31">
            <label>Lead owner</label><br/>
            <input type={"text"} className="form_rectangle"/>
          </div>
          <div className="form_inner31">
            <label></label>
            <div className="form_rectangle1"></div>
          </div>
        </div> */}
      </div>
    </>
  );
}