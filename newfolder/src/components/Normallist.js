import { useNavigate } from "react-router-dom"
import "./normallist.css"
export default function Normallist() {

    return (
        <>
            <div className="Normallist">
                <div className="Normallist_row1">
                    <label className="Normallist_row1_label">Leads</label>
                    <div className="Normallist_row1_button">
                        <button>ADD</button>
                    </div>
                </div>
                <div className="Normallist_row2"></div>
                <div className="Normallist_row3">
                    <label className="Normallist_row3_label1">FirstName</label>
                    <label className="Normallist_row3_label2">LastName</label>
                    <label className="Normallist_row3_label3">Status</label>
                    <label className="Normallist_row3_label4">Last Updated On</label>
                </div>
                <div className="Normallist_row4"></div>
                <Table />
                <Table />
                <Table />
            </div>
        </>
    )
}

function Table() {
    return <>
        <div className="Normallist_row5">
            <label className="Normallist_row5_label1">John</label>
            <label className="Normallist_row5_label2">Smith</label>
            <label className="Normallist_row5_label3">Confirmed</label>
            <label className="Normallist_row5_label4">2022-01-01</label>
        </div>
    </>
}