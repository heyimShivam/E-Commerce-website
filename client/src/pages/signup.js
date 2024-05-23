import {useState} from "react";
import { Link } from "react-router-dom";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

import "./signup.css";

const Signup = () => {
    const [visibilityIconToggle, setVisibilityIconToggle] = useState(true);

    return (<section id="signup">
        <div className='signup-form'>
            <div className="signup-form-image-block">
                <AccountCircleOutlinedIcon className='signup-form-image' />
            </div>
            <form>
            <div className='signup-form-block'>
                    <label for="username" className='signup-form-label'>User Name:</label>
                    <input id="username" className='signup-form-input-box' type="text" placeholder="Enter your email here..." />
                </div>
                <div className='signup-form-block'>
                    <label for="email" className='signup-form-label'>Email:</label>
                    <input id="email" className='signup-form-input-box' type="email" placeholder="Enter your email here..." />
                </div>
                <div className='login-form-block'>
                    <label for="password"  className='login-form-label'>Password:</label>
                    <div className="login-password-block">
                        <input id="password" className='login-form-input-box login-form-input-box-pass' type={visibilityIconToggle ? "password" : "text"} placeholder="Enter your password here..." />
                        <div className='login-form-input-visibility-icon'>{visibilityIconToggle ? <VisibilityIcon onClick={() => { setVisibilityIconToggle(!visibilityIconToggle) }} /> : <VisibilityOffIcon onClick={() => { setVisibilityIconToggle(!visibilityIconToggle) }} />}</div>
                    </div>
                </div>
                <div className='signup-form-block'>
                    <label for="re-password" className='signup-form-label'>Re-Enter Password:</label>
                    <input id="re-password" className='signup-form-input-box' type="password" placeholder="Enter your password here..." />
                </div>
                <div className='signup-form-block'>
                    <label for="image-upload" className='signup-form-label'>Upload Photo:</label>
                    <input  id="image-upload" type="file" accept="image/png, image/gif, image/jpeg , image/jpg"/>
                </div>
                <div className='signup-form-btn-block'>
                    <button className='signup-form-block signup-form-btn'>
                        signup
                    </button>
                </div>
            </form>
            <p className="signup-form-block signup-form-extra-info">Already have account? <span><Link to={"/login"} className="link-btn signup-btn-signup-page">Login</Link> </span></p>
        </div>
    </section>);
}

export default Signup;
