import { Link } from "react-router-dom";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

import "./login.css";
import { useState } from "react";

const Login = () => {
    const [visibilityIconToggle, setVisibilityIconToggle] = useState(true);

    return (<section id="login">
        <div className='login-form'>
            <div className="login-form-image-block">
                <AccountCircleOutlinedIcon className='login-form-image' />
            </div>
            <form>
                <div className='login-form-block'>
                    <label for="email" className='login-form-label'>Email:</label>
                    <input id="email" className='login-form-input-box' type="email" placeholder="Enter your email here..." />
                </div>
                <div className='login-form-block'>
                    <label for="password" className='login-form-label'>Password:</label>
                    <div className="login-password-block">
                        <input id="password" className='login-form-input-box login-form-input-box-pass' type={visibilityIconToggle ? "password" : "text"} placeholder="Enter your password here..." />
                        <div className='login-form-input-visibility-icon'>{visibilityIconToggle ? <VisibilityIcon onClick={() => { setVisibilityIconToggle(!visibilityIconToggle) }} /> : <VisibilityOffIcon onClick={() => { setVisibilityIconToggle(!visibilityIconToggle) }} />}</div>
                    </div>
                </div>
                <div className='login-form-btn-block'>
                    <button className='login-form-block login-form-btn'>
                        Login
                    </button>
                </div>
            </form>
            <p className="login-form-block login-form-extra-info">Don't have account? <span><Link to={"/sign-up"} className="link-btn signup-btn-login-page">Sign Up</Link> </span></p>
        </div>
    </section>);
}

export default Login;