import { useEffect, useState } from "react";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Popover from '@mui/material/Popover';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import "./navbar.css";

const NavBar = () => {
    const [product, setProduct] = useState("");
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [windowWidth, setWindowWidth] = useState(1000);
    const [userAccountLoginBadgeVisible, setUserAccountLoginBadgeVisible] = useState(false);
    const location = useLocation();

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

        if(location.pathname === '/login' ||  userLoggedIn) {
            setUserAccountLoginBadgeVisible(true);
        } else {
            setUserAccountLoginBadgeVisible(false);
        }
        
        return (
            window.removeEventListener("resize", (value) => {
                setWindowWidth(value.target.outerWidth);
            })

        )
    }, [location]);

    const ShoppingBagBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: +12,
            top: 9,
            padding: '0 4px',
            backgroundColor: '#cc0000',
            fontWeight: '600'
        },
    }));

    const UserAccountLoginBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: +15,
            top: 9,
            backgroundColor: '#cc0000',
            fontWeight: '100',
            height: '13px',
            width: '13px',
            borderRadius: '50%'
        },
    }));

    return (<>
        <div className="navbar-container">
            <div className='navbar-logo'>
                <Link to={"/"}>
                    <img className='navbar-logo-image' src='images/icons/main-ico.png' width={"100%"} />
                </Link>
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

                <ShoppingBagBadge badgeContent={20} color="primary" >
                    <ShoppingBagOutlinedIcon fontSize="large" className="navbar-account-btn" />
                </ShoppingBagBadge>

                {
                    userLoggedIn ?
                        <img src="./images/my-test-image.jpeg" className="navbar-user-original-account" /> :
                        <PopupState variant="popover" popupId="demo-popup-popover">
                            {(popupState) => (
                                <div>
                                    <div variant="contained" {...bindTrigger(popupState)}>
                                        <UserAccountLoginBadge variant="dot" invisible={userAccountLoginBadgeVisible} color="primary">
                                            <AccountCircleOutlinedIcon fontSize="large" className="navbar-account-btn" />
                                        </UserAccountLoginBadge>
                                    </div>
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
                                        <div className="login-area">
                                            <p className="login-area-text">Please Login <span><Link to={"/login"} className="link-btn login-area-btn">Login here</Link></span></p>
                                        </div>
                                    </Popover>
                                </div>
                            )}
                        </PopupState>
                }
            </div>
        </div>
    </>);
}

export default NavBar;
