import "./checkList.css";
import { BiSearch } from "react-icons/bi";

export default function CheckList() {
  return (
    <>
      <div className="checkList_outer">
        <div className="checkList_inner1">
          <div className="checkList_inner11">
            <BiSearch className="checkList_searchIcon" />
            <input type={"text"} placeholder="Search Campaign" />
          </div>
          <div className="checkList_inner12">
            <label>ADD</label>
          </div>
        </div>
        <div className="checkList_outer_inner2">
          <div className="checkList_inner2">
            <input type={"checkbox"} className="checkBox" />
            <label>Campaign One</label>
          </div>
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
        </div>
      </div>
    </>
  );
}
function List() {
  return (
    <>
      <div className="checkList_inner2">
        <input type={"checkbox"} className="checkBox" />
        <label>Campaign One</label>
      </div>
    </>
  );
}
