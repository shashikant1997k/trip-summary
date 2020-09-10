import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import logo from './Image/Logo.png'
import './Header.css'

function Header() {

    return (
        <nav className="header">
              <div id="menuToggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="header__main">
                <Link to="/" className="header__link">
                    <img src={logo} alt="" className="header__logo" />
                </Link>

                <Button variant="contained" className="header__button">
                    <PowerSettingsNewIcon /> Logout
                </Button>
            </div>
        </nav>
    )
}

export default Header
