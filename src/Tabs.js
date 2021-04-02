import React from "react";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import SpeedIcon from "@material-ui/icons/Speed";
import ScheduleIcon from "@material-ui/icons/Schedule";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import ForwardIcon from "@material-ui/icons/Forward";
import { getHoursMin } from "./Home";
import "./Tabs.css";

function Tabs({ dataItem }) {
  const objData = dataItem?.data?.data;
  return (
    <div className="tabs">
      <div className="tabs__left">
        <div className="row__1">
          <div className="vehcle__number common">
            <LocalShippingIcon />
            <span className="common__fontStyle">
              {objData?.vehicleNo ? objData?.vehicleNo : "N/A"}
            </span>
          </div>
          <div className="total__trip common">
            <LocalShippingIcon />
            <span className="common__fontStyle">
              Total Trips: {objData?.totalTrips ? objData?.totalTrips : "N/A"}
            </span>
          </div>
          <div className="total__km common">
            <SpeedIcon />
            <span className="common__fontStyle">
              Total KM: {objData?.totalKm ? objData?.totalKm : 0} KM
            </span>
          </div>
        </div>
        <div className="row__2">
          <div className="trip__time common">
            <ScheduleIcon />
            <span className="common__fontStyle">
              Trip Time:{" "}
              {objData?.totalTripTime
                ? getHoursMin(objData?.totalTripTime)
                : "N/A"}{" "}
            </span>
          </div>
          <div className="total__time common">
            <ScheduleIcon />
            <span className="common__fontStyle">
              Total Time:{" "}
              {objData?.totalTime ? getHoursMin(objData?.totalTime) : "N/A"}
            </span>
          </div>
          <div className="total__exp common">
            <AccountBalanceWalletIcon />
            <span className="common__fontStyle">
              Total Exp.: Rs{" "}
              {objData?.totalExpences ? objData?.totalExpences : "0"}
            </span>
          </div>
        </div>
      </div>

      <div className="tabs__right">
        <div className="other__exp">
          <AccountBalanceWalletIcon />
          <span className="common__fontStyle">
            Other Exp.: Rs{" "}
            {objData?.otherExpenses ? objData?.otherExpenses : "0.00"}
          </span>
          <ForwardIcon className="forward__icon" />
        </div>
      </div>
    </div>
  );
}

export default Tabs;
