import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import './NavigationHeader.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';

function NavigationHeader() {

    const [selectedFromDate, setSelectedFromDate] = useState(new Date());
    const [selectedToDate, setSelectedToDate] = useState(new Date());

    const handleToDateChange = (date) => {
        setSelectedToDate(date);
    };

    const handleFromDateChange = (date) => {
        setSelectedFromDate(date);
    };

    return (
        <div className="navigation__header">
            <div className="left">
                <span className="dash__header">Trip Summary</span>
                <span style={{marginTop: '-5px'}}>
                    <span className="dashboard">Dasboard</span>
                    <span>&nbsp;/&nbsp;</span>
                    <span className="dashboard__trip">Trip Summary</span>
                </span>
            </div>

            <div className="right">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <span className="from__to">From</span>
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog-from"
                            label=""
                            format="MM/dd/yyyy"
                            value={selectedFromDate}
                            onChange={handleFromDateChange}
                            name="from-date"
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                        <span className="from__to">To</span>
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog-to"
                            label=""
                            format="MM/dd/yyyy"
                            value={selectedToDate}
                            onChange={handleToDateChange}
                            name="to-date"
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
                <div className="search__iconDiv">
                    <SearchIcon className="searchIcon" />
                </div>
                <div style={{display:"flex", alignItems:"center", margin:"5px 0 0 10px"}}>
                    <Button variant="contained" className="export">
                        <ExitToAppIcon /> Export
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default NavigationHeader
