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
            <a className="name pointer" href="/" style={{textDecoration: "none", fontSize: "2rem"}}><h3>Home Bridge</h3></a>
            <div className="Header-items">
                <a data-translate="what_we_do" href="/">What we do</a>
                <a data-translate="pricing" href="/plan" onClick={() => onNavigate(`/plan`)}>Pricing</a>
                <a data-translate="join_as_helper" href="/join">Join as helper</a>
                <a data-translate="sign_up_/_log_in" href="/login">Sign Up / Log In</a>
            </div>
            <div className="Header-sideMenu">
                <Menu className="MenuIcon" onClick={handleIsMenuOpen} sx={{ fontSize: "46px" }} />
                <SideMenu isOpen={isMenuOpen} onCloseClick={handleIsMenuOpen} onNavigate={(link) => onNavigate(link)} />
            </div>
        </div>
    )
}

export default Header;

function SideMenu({ isOpen, onCloseClick, onNavigate }) {
    return (
        <div className={`Header-sideMenuContainer ${isOpen ? 'open' : ''}`}>
            <Close className="closeIcon" onClick={onCloseClick} sx={{ fontSize: 46 }} />
            <a data-translate="what_we_do" href="/whatwedo" onClick={() => onNavigate(`/whatwedo`)}>What we do</a>
            <a data-translate="pricing" href="/plan" onClick={() => onNavigate(`/plan`)}>Plans</a>
            <a data-translate="join_as_helper" href="/join" onClick={() => onNavigate(`/join`)}>Join as helper</a>
            <a data-translate="sign_up_/_log_in" href="/login" onClick={() => onNavigate('/login')}>Sign Up / Log In</a>
        </div>
    )
}