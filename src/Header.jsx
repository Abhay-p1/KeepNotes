import React from "react";
import logo2 from './Images/logo2.jpg'
// import StickyNote2Icon from '@mui/icons-material/StickyNote2';
const Header = () => {
    return (<>
        <nav className="navbar navbar-light bg-info header">
            <div className="container">
                <img src={logo2} alt="logo" width="70" height="50" className="img ms-0" id="imagenote"/>
                <h3 className="heading">Keep Notes 📗📘</h3>
            </div>
        </nav>
    </>);
}
export default Header;