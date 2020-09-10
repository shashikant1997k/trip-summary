import React, { useEffect, useState } from 'react';
import ForwardIcon from '@material-ui/icons/Forward';
import InfoIcon from '@material-ui/icons/Info';
import { Button } from '@material-ui/core';
import {getDateTime, getTimeDiff} from '../Home';

function TableBody({tripDetail, index}) {

    let [expenseSum, setExpenseSum] = useState(0);

    useEffect(() => {
        if(tripDetail?.tripExpenses.length){
            tripDetail.tripExpenses.forEach((val) => {
                expenseSum += val.amount;
                setExpenseSum(expenseSum)
            });
        }
    }, []);

    
    return (
        <>
            <tr>
                <td>{ index + 1 }</td>
                <td>
                    <div className="tripStart__end">
                        <span>
                            { tripDetail?.startPointNode } ({ getDateTime(tripDetail.startTripDate, 1) })
                        </span>
                        <ForwardIcon />
                        <span>
                            { tripDetail?.endPointNode } ({ getDateTime(tripDetail.endTripDate, 1) })
                        </span>
                    </div>
                </td>
                <td> { tripDetail?.driverName } </td>
                <td>
                    <div className="trip__expense">
                        <span>Rs. {expenseSum}</span>
                        <InfoIcon />
                    </div>
                </td>
                <td> {tripDetail?.totalKm} Km</td>
                <td>{ tripDetail?.gpsDistance ? tripDetail?.gpsDistance : '0.00' } Km</td>
                <td> {getTimeDiff(tripDetail.endTripDate, tripDetail.startTripDate, 2)} </td>
                <td>
                    <div className="odometer">
                        <span> { tripDetail?.startODOMeter ? tripDetail?.startODOMeter : 'N/A' } </span>
                        <ForwardIcon />
                        <span> {tripDetail?.endODOMeter ? tripDetail?.endODOMeter : 'N/A'} </span>
                    </div>
                </td>
                <td>
                    <div className="action__button">
                        <Button variant="contained" className="action__buttonOne">Movement Report</Button>
                        <Button variant="contained">Stoppage Report</Button>
                    </div>
                </td>
            </tr>

        </>
    )
}

export default TableBody
