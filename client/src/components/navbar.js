import { useEffect, useState } from "react";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

import "./navbar.css";

const NavBar = () => {
    const [product, setProduct] = useState("");
    const [userLoggedIn, setUserLoggedIn] = useState(true);
    const [windowWidth, setWindowWidth] = useState(1000);

    function updateSearchBoxText(props) {
        setProduct(props.target.value);
    }

    function searchProduct() {
        if (product) {
            console.log("search this product: " + product);
        }

        setProduct("");
    }

    useEffect(() => {
        window.addEventListener("resize", (value) => {
            setWindowWidth(value.target.outerWidth);
        });

        return (
            window.removeEventListener("resize", (value) => {
                setWindowWidth(value.target.outerWidth);
            })

        )
    }, []);

    return (<>
        <div className="navbar-container">
            <div className='navbar-logo'>
                <img className='navbar-logo-image' src='images/icons/main-ico.png' width={"100%"} />
            </div>
            <div className='navbar-search-area'>
                <input type="text" className="navbar-search-input" value={product} onChange={(props) => { updateSearchBoxText(props) }} placeholder="Search product here..." />
                <div className="navbar-search-btn" onClick={() => { searchProduct() }}>
                    <SearchIcon />
                </div>
            </div>
            <div className='navbar-account-btns'>
                {(windowWidth < 550) && <PopupState variant="popover" popupId="demo-popup-popover">
                    {(popupState) => (
                        <div>
                            <SearchIcon variant="contained" {...bindTrigger(popupState)} fontSize="large" className="navbar-account-btn navbar-search-btn-mobile" />
                            <Popover
                                {...bindPopover(popupState)}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                            >
                                <div className="mobile-search-bar">
                                    <input type="text" className="mobile-search-bar-input" value={product} onChange={(props) => { updateSearchBoxText(props) }} placeholder="Search product here..." />
                                    <div className="mobile-search-bar-btn" onClick={() => { searchProduct() }}>
                                        <SearchIcon />
                                    </div>
                                </div>
                            </Popover>
                        </div>
                    )}
                </PopupState>}

                <ShoppingBagOutlinedIcon fontSize="large" className="navbar-account-btn" />

                {
                    userLoggedIn ?
                        <img src="./images/my-test-image.jpeg" className="navbar-user-original-account" onClick={() => { setUserLoggedIn(!userLoggedIn) }} /> :
                        <AccountCircleOutlinedIcon fontSize="large" className="navbar-account-btn" onClick={() => { setUserLoggedIn(!userLoggedIn) }} />
                }
            </div>
        </div>
    </>);
}

export default NavBar;
