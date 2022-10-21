import { AiOutlineMenu, AiOutlineSearch} from "react-icons/ai";
import {
  BsThreeDots,
  BsFillBellFill,
} from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
// import { AiFillPlusCircle } from 'react-icons/ai';
import { MdArrowForwardIos, MdCancel } from "react-icons/md";

import "./sarath.css";
export default function HeadBar() {
  return (
    <>
      <div className="header">
        <div className="col1">
          <div className="icon_circle">
            <AiOutlineMenu />
          </div>
          <label>Company</label>
        </div>
        <div className="col2">
          <ul>
            <li>Dashboard</li>
            <li>Account</li>
            <li>campaigns</li>
            <li>leads</li>
            <li>prospect</li>
            <li>
              <BsThreeDots />
            </li>
          </ul>
        </div>
        <div className="col3">
          <AiOutlineSearch className="searchIcon" />
          <input type={"text"} placeholder="Search...." />
          <MdArrowForwardIos className="arrowIcon" />
        </div>
        <div className="col4">
          <CgProfile className="profileIcon" />
          <label>Clayton Santos</label>
        </div>
        <div className="col5">
          <div className="Bell_Circle">
            <BsFillBellFill className="BellIcon" />
          </div>
          <div className="cancel_circle">
            <MdCancel className="cancelIcon" />
          </div>
        </div>
      </div>
      
    </>
  );
}