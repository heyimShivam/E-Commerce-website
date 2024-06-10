import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ImageTOBase64 from "../helpers/imageToBase64";
import { toast } from 'react-toastify';
import { SignupBackendAPI } from "./loginAndSignupBackendAPI";

import "./signup.css";

const Signup = () => {
    const [visibilityIconToggle, setVisibilityIconToggle] = useState(true);
    const navigate = useNavigate();
    const [cred, setCred] = useState({
        username: "",
        email: "",
        password: "",
        rePassword: "",
        image: ""
    });

    function handleSignUp(event) {
        event.preventDefault();

        if (!(cred.password === cred.rePassword)) return;

        const userLoginCred = {
            username: cred.username,
            email: cred.email,
            password: cred.password,
            image: cred.image,
        };

        SignupBackendAPI(userLoginCred).then(
            res => res.json()
        ).then(
            res => {
                if(res.success) {
                    toast.success(res.message);
                    navigate("/login");
                }

                if(res.error) {
                    toast.error(res.message);
                }
            }
        ).catch((err) => {
            console.log(err)
        })
    }

    function updateCred(event) {
        const { name, value } = event.target;

        setCred((prev) => {
            return {
                ...prev,
                [name]: value
            }
        });
    }

    async function updateImage(event) {
        const file = event.target.files[0];

        const image = await ImageTOBase64(file);

        console.log("file", image);

        setCred((prev) => {
            return {
                ...prev,
                image: image
            }
        });

        console.log(cred);
    }

    return (<section id="signup">
        <div className='signup-form'>
            <form onSubmit={handleSignUp}>
                <div className="signup-form-image-block">
                    {!cred.image ? <div class="signup-form-image-place">
                        <AccountCircleOutlinedIcon className='signup-form-image' />
                    </div> :
                        <img src={cred.image} className="signup-uploaded-image" />}
                    <div className="image-upload-text">
                        <label className="image-upload-label" for="image-upload">Upload Here</label>
                        <input id="image-upload" hidden type="file" accept="image/png, image/gif, image/jpeg , image/jpg" name="image" onChange={(value) => updateImage(value)} />
                    </div>
                </div>

                <div className='signup-form-block'>
                    <label for="username" className='signup-form-label'>User Name:</label>
                    <input required id="username" className='signup-form-input-box' type="text" placeholder="Enter your email here..." value={cred.username} name="username" onChange={(value) => updateCred(value)} />
                </div>
                <div className='signup-form-block'>
                    <label for="email" className='signup-form-label'>Email:</label>
                    <input required id="email" className='signup-form-input-box' type="email" placeholder="Enter your email here..." value={cred.email} name="email" onChange={(value) => updateCred(value)} />
                </div>
                <div className='login-form-block'>
                    <label for="password" className='login-form-label'>Password:</label>
                    <div className="login-password-block">
                        <input required id="password" className='login-form-input-box login-form-input-box-pass' minLength={8} type={visibilityIconToggle ? "password" : "text"} placeholder="Enter your password here..." value={cred.password} name="password" onChange={(value) => updateCred(value)} />
                        <div className='login-form-input-visibility-icon'>{visibilityIconToggle ? <VisibilityIcon onClick={() => { setVisibilityIconToggle(!visibilityIconToggle) }} /> : <VisibilityOffIcon onClick={() => { setVisibilityIconToggle(!visibilityIconToggle) }} />}</div>
                    </div>
                </div>
                <div className='signup-form-block'>
                    <label for="re-password" className='signup-form-label'>Confirm Password:</label>
                    <div className="login-password-block">
                        <input required id="re-password" className='login-form-input-box login-form-input-box-pass' minLength={8} type={visibilityIconToggle ? "password" : "text"} placeholder="Enter your password here..." value={cred.rePassword} name="rePassword" onChange={(value) => updateCred(value)} />
                        <div className='login-form-input-visibility-icon'>{visibilityIconToggle ? <VisibilityIcon onClick={() => { setVisibilityIconToggle(!visibilityIconToggle) }} /> : <VisibilityOffIcon onClick={() => { setVisibilityIconToggle(!visibilityIconToggle) }} />}</div>
                    </div>
                </div>
                <div className='signup-form-btn-block'>
                    <button type="submit" className='signup-form-block signup-form-btn'>
                        Sign up
                    </button>
                </div>
            </form>
            <p className="signup-form-block signup-form-extra-info">Already have account? <span><Link to={"/login"} className="link-btn signup-btn-signup-page">Login</Link> </span></p>
        </div>
    </section>);
}

export default Signup;
