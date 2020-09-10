import React, { useEffect, useState } from 'react'
import './TableView.css';
import TableBody from './TableBody';
import { Table } from 'react-bootstrap';
import {getDateTime, getTimeDiff} from '../Home';


function TableView({ id, dailyRunningTime, endDay, startDay, tripLists }) {

    useEffect(() => {
        let collapseCalss = document.getElementsByClassName("collapsible");
        for (let i = 0; i < collapseCalss.length; i++) {
            let content = collapseCalss[i].nextElementSibling;
            content.style.maxHeight = (content.scrollHeight) + "px";
        }
    }, [])

    const expandTable = (event) => {
        event.target.classList.toggle("active");
        let content = event.target.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = (content.scrollHeight) + "px";
        } 
    }

    let [totalExpSum, setTotalExpSum] = useState(0);
    let [totalKm, setTotalKm] = useState(0);

    useEffect(() => {
        tripLists.forEach(element => {
            totalKm += parseInt(element?.totalKm);
            setTotalKm(totalKm);

            if(element?.tripExpenses.length){
                element.tripExpenses.forEach((val) => {
                    totalExpSum += val.amount
                    setTotalExpSum(totalExpSum)
                });
            }
        });

    }, []);
    

    return (
        <div className="TableView">
            <div className="collapsible active" onClick={expandTable}>
                <span>Date: {getDateTime(startDay)} - {getDateTime(endDay)} ({ getTimeDiff(endDay, startDay, 1) })</span>
                <div className="table__totalExpenseskm">
                    <span className="table__totalKM">Total KM: { totalKm } KM</span>
                    <span className="table__totalExpenses">Total Expenses: { totalExpSum }</span>
                </div>
                <span className="collapse__expand"></span>
            </div>
            <div className="content">
                <div className="table__content">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Trip Starts(Node) to Trip Ends(Node)</th>
                            <th>Driver Name</th>
                            <th>Trip Expenses</th>
                            <th>Trip KM</th>
                            <th>Trip GPS KM</th>
                            <th>Trip Time</th>
                            <th>Odometer Reading</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tripLists?.map((item, i) => (
                                    <TableBody key={item?.tripId} tripDetail={item} index={i} />
                                ))
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default TableView
