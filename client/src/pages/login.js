import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { toast } from 'react-toastify';
import { useContext } from "react";
import FetchUserDetails from "../context";

import { LoginBackendAPI } from "./loginAndSignupBackendAPI";

import "./login.css";

const Login = () => {
    const fetchUserDetailsContext = useContext(FetchUserDetails);
    const [visibilityIconToggle, setVisibilityIconToggle] = useState(true);
    const [cred, setCred] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    function updateCred(event) {
        const { name, value } = event.target;

        setCred((prev) => {
            return {
                ...prev,
                [name]: value
            }
        });
    }


    function handleSubmit(event) {
        event.preventDefault();

        console.log(cred);

        LoginBackendAPI(cred).then(
            res => res.json()
        ).then(
            (res) => {
                if (res.success) {
                    toast.success(res.message);
                    fetchUserDetailsContext?.fetchUserDetails();
                    navigate("/");
                }

                if (res.error) {
                    toast.error(res.message);
                }
            }
        ).catch(
            err => console.log(err)
        );

    }

    return (<section id="login">
        <div className='login-form'>
            <div className="login-form-image-block">
                <AccountCircleOutlinedIcon className='login-form-image' />
            </div>
            <form onSubmit={handleSubmit}>
                <div className='login-form-block'>
                    <label for="email" className='login-form-label'>Email:</label>
                    <input id="email" className='login-form-input-box' value={cred.email} type="email" placeholder="Enter your email here..." name="email" onChange={updateCred} />
                </div>
                <div className='login-form-block'>
                    <label for="password" className='login-form-label'>Password:</label>
                    <div className="login-password-block">
                        <input id="password" minLength={6} className='login-form-input-box login-form-input-box-pass' value={cred.password} type={visibilityIconToggle ? "password" : "text"} placeholder="Enter your password here..." name="password" onChange={updateCred} />
                        <div className='login-form-input-visibility-icon'>{visibilityIconToggle ? <VisibilityIcon onClick={() => { setVisibilityIconToggle(!visibilityIconToggle) }} /> : <VisibilityOffIcon onClick={() => { setVisibilityIconToggle(!visibilityIconToggle) }} />}</div>
                    </div>
                </div>
                <div className='login-form-btn-block'>
                    <button type="submit" className='login-form-block login-form-btn'>
                        Login
                    </button>
                </div>
            </form>
            <p className="login-form-block login-form-extra-info">Don't have account? <span><Link to={"/sign-up"} className="link-btn signup-btn-login-page">Sign Up</Link> </span></p>
        </div>
    </section>);
}

export default Login;