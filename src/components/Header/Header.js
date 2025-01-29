import { useState } from "react";
import './Header.css'
import '../../themeColor.css'
import { Menu, Close } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    const onNavigate = (link) => {
        navigate(`${link}`);
        setIsMenuOpen(false)
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const handleIsMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log("handleIsMenuOpen clicked");
        console.log(isMenuOpen)
    }
    return (
        <div className="Header">
            <h1 className="name pointer" onClick={() => onNavigate(`/`)}>Home Bridge</h1>
            <div className="Header-items">
                <a href="/#">What we do</a>
                <a href="/#/plan" onClick={() => onNavigate(`/plan`)}>Pricing</a>
                <a href="/#/join">Join as helper</a>
                <a href="/#/login">Sign Up / Log In</a>
            </div>
            <div className="Header-sideMenu">
                <Menu className="MenuIcon" onClick={handleIsMenuOpen} sx={{fontSize: "46px"}} />
                <SideMenu isOpen={isMenuOpen} onCloseClick={handleIsMenuOpen} onNavigate={(link) => onNavigate(link)} />
            </div>
        </div>
    )
}

export default Header;

function SideMenu({isOpen, onCloseClick, onNavigate}) {
    return (
        <div className={`Header-sideMenuContainer ${isOpen? 'open' : ''}`}>
            <Close className="closeIcon" onClick={onCloseClick} sx={{ fontSize: 46 }} />
            <a href="/#/whatwedo" onClick={() => onNavigate(`/whatwedo`)}>What we do</a>
            <a href="/#/plan" onClick={() => onNavigate(`/plan`)}>Plans</a>
            <a href="/#/join" onClick={() => onNavigate(`/join`)}>Join as helper</a>
            <a href="/#/login" onClick={() => onNavigate('/login')}>Sign Up / Log In</a>
        </div>
    )
}