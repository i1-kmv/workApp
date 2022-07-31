import React from "react"
import logo from '../img/logo.0af49e8.svg'
import lock from '../img/lock.svg'


export const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className="header-menu">
                <div className="header-menu_item"></div>
                <div className="header-menu_item"></div>
            </div>
            <div className="header-logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="header-phone">
                <a href="tel:">8 800 333 30 84</a>
            </div>
            <div className="header-cabinet">
                <img src={lock} alt="lock" className="header-cabinet_image"/>
                <span className="header-cabinet_text">Личный кабинет</span>
            </div>
        </div>
    )
}
