import React, { useState, useEffect } from 'react'
import TableView from './Table/TableView';
import './Home.css'
import NavigationHeader from './NavigationHeader';
import Axios from 'axios';
import moment from 'moment';
import Tabs from './Tabs';

export const getDateTime = (timestamp, timeOnly) => {
    if(timeOnly){
        let time = moment(parseInt(timestamp)).format("hh:mm A");
        return `${time}`;
    } else {
        let date = moment(parseInt(timestamp)).format("MM/DD/YYYY");
        let time = moment(parseInt(timestamp)).format("hh:mmA");
        return `${date} at ${time}`;
    }
}

export const getTimeDiff = (endTimeP, startTimeP, type) =>{
    let time1 = moment(parseInt(startTimeP)).format("hh:mm:ss a");
    let time2 = moment(parseInt(endTimeP)).format("hh:mm:ss a");

    let startTime=moment(time1, "hh:mm a");
    let endTime=moment(time2, "hh:mm a");
    let duration = moment.duration(endTime.diff(startTime));
    let hours = parseInt(duration.asHours());
    let minutes = parseInt(duration.asMinutes())-hours*60;

    

    if(type === 1){
        return `${hours} Hrs ${minutes} Minutes`
    } else if(type === 2){
        hours = (String(hours).length === 2) ? hours : `0${hours}`;
        minutes = (String(minutes).length === 2) ? minutes : `0${minutes}`;
        return  (parseInt(hours) === 0) ? `${minutes} min` : `${hours} hrs ${minutes} min`;
    }  else {
        return `${hours} Hrs ${minutes} mm`
    }
}

export const getHoursMin = (timestamp) => {
    let time = moment(parseInt(timestamp)).format("hh:mm");
    let timeStr = [];
    if(time){
        timeStr = String(time).split(":");
    }
    return `${timeStr[0]} Hrs ${timeStr[1]} mm`
}

function Home() {

    const [item, setItem] = useState({});
    
    useEffect(() => {
        const data = {
            "clientId": 10,
            "dataRecord": {
            "userRoleId": 4,
            "userRoleName": "COMPANY",
            "userId": 10
            },
            "fromDate": 1577888571659,
            "toDate": 1593613371659,
            "tripId": 36
        }

        async function getData(){
            try {
                const res = await Axios.post("http://staging.watsoo.com:8080/watsoo-amazon-api/trip-controller-web/v1/vehicle/wise/summary/36", data);
                setItem(res);
                console.log(res)
            } catch (error) {
                console.log(error);
            }
            
        }

        getData();

    }, []);

    const arrayItem = item?.data?.data?.tripDetails;
    // console.log(arrayItem)
    return (
        <div className="home">
            <NavigationHeader />
            <Tabs dataItem={item} />
            
            {
                arrayItem?.map((val) => {
                    return(
                        <TableView key={val?.id} id={val?.id} dailyRunningTime={val?.dailyRunningTime} endDay={val?.endDay} startDay={val?.startDay} tripLists={val?.tripLists} />
                    )
                })
            }
            
        </div>
    )
}

export default Home
