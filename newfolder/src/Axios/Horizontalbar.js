import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./horizontalbar.css"
import { useState } from "react";
import axios from "axios";
export default function Horizontalbar() {
    const [orangebar, setOrangebar] = useState([]);
    const [greenbar, setGreenbar] = useState([]);
    const [bluebar, setBluebar] = useState([]);
    const url = "http://localhost:3000/dev/leadfunnel";
    const data = {};
    const header = {};
    axios.post(url, data, { Headers: header })
        .then((res) => {
            console.log("Response => " + (JSON.stringify(res.data[0].leadscount)) + (JSON.stringify(res.data[1].leadscount)) + (JSON.stringify(res.data[2].leadscount)))
            setOrangebar(res.data[0].leadscount)
            setGreenbar(res.data[1].leadscount)
            setBluebar(res.data[2].leadscount)
        })
        .catch((err) => {
            console.log("Error => " + err)
        })
    return (
        <>
            <div className="Horizontalbar_main">
                <div className="Horizontalbar_main_row1">
                    <label>Leads Funnel</label>
                    <div className="Horizontalbar_main_row1_icon">
                        <BsThreeDotsVertical />
                    </div>
                </div>
                {/* <div className="Horizontalbar_main_row2">
                    <div className="Horizontalbar_main_row2_left">
                        <FaDollarSign />
                        <label><b>18500</b></label>
                    </div>
                    <div className="Horizontalbar_main_row2_right">
                        <label><span><b>+5%</b></span></label>
                    </div>
                </div> */}
                <div className="Horizontalbar_graph" >
                    <ul>
                        <li>
                            <label className="Horizontalbar_graph_orange_label">Leads</label>
                            <div className="Horizontalbar_graph_orange" style={{ width: `${orangebar}%` }}></div>
                        </li>
                        <li>
                            <label>Nurturing</label>
                            <div className="Horizontalbar_graph_green" style={{ width: `${greenbar}%` }}></div>
                        </li>
                        <li>
                            <label>Prospects</label>
                            <div className="Horizontalbar_graph_blue" style={{ width: `${bluebar}%` }}></div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}