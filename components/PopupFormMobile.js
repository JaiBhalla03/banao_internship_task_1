import React, {useState} from 'react';
import imag from '../image/loginImage.png'
import Image from "next/image";
import Link from "next/link";
import {AiFillFacebook, AiOutlineEye, AiOutlineEyeInvisible, AiOutlineGoogle} from "react-icons/ai";

const PopupFormMobile = ({onClose}) => {
    const [showLogin, setShowLogin] = useState(true);

    const onSwitchToLogin =()=>{
        setShowLogin(true);
    }
    const onSwitchToRegister = ()=>{
        setShowLogin(false);
    }
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className="modal-overlay-mobile">
            {
                showLogin ? (
                    <div className="modal-mobile d-flex flex-column justify-content-between">
                        <div className={'d-flex flex-column justify-content-between justify-content-between forming-mobile'}>
                            <div className={'forming'}>
                                <h3 className={'fw-bold'}>Welcome Back!</h3>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder={'email'} id="email" />
                                    </div>
                                    <div className="form-group position-relative">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="Password"
                                            className="form-control"
                                            id="password"
                                        />
                                        <div
                                            className="position-absolute eye top-50 translate-middle-y"
                                            onClick={togglePasswordVisibility}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {showPassword ? <AiOutlineEyeInvisible className={'text-secondary'} size={22}/> : <AiOutlineEye className={'text-secondary'} size={22}/>}
                                        </div>
                                    </div>
                                    <div className={'d-flex justify-content-between'}>
                                        <button onClick={onClose} className="btn btn-primary rounded-pill pop-mobile-button my-4">Sign In</button>
                                        <div className={'text-primary d-flex flex-column justify-content-center text-decoration-underline'} onClick={onSwitchToRegister}>Or,Create Account</div>
                                    </div>
                                    <button className={'d-flex gap-2 justify-content-center btn btn-light border border-1 rounded-1 w-100 my-2'}>
                                        <div className={'d-flex flex-col justify-content-center'}>
                                            <AiOutlineGoogle size={24}/>
                                        </div>
                                        <div>
                                            Sign Up With Google
                                        </div>
                                    </button>
                                    <button className={'d-flex gap-2 justify-content-center btn btn-light border border-1 rounded-1 w-100 my-2'}>
                                        <div className={'d-flex flex-col justify-content-center'}>
                                            <AiFillFacebook size={24}/>
                                        </div>
                                        <div>
                                            Sign Up With Facebook
                                        </div>
                                    </button>
                                    <p className={'fw-bold text-center'}>
                                        Forgot Password?
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button className="modal-close position-absolute" onClick={onClose}>
                            &times;
                        </button>
                    </div>
                ):(
                    <div className="modal-mobile d-flex flex-column justify-content-between">
                        <div className={'d-flex flex-column justify-content-between justify-content-between forming-mobile'}>
                            <div className={'forming'}>
                                <h3 className={'fw-bold'}>Create Account</h3>
                                <div className="modal-body">
                                    <div className="form-group d-flex">
                                        <input type="text" className="form-control" placeholder={'First Name'} id="firstName" />
                                        <input type="text" className="form-control" placeholder={'Last Name'} id="lastName" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder={'email'} id="email" />
                                    </div>
                                    <div className="form-group position-relative">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="Password"
                                            className="form-control"
                                            id="password"
                                        />
                                        <div
                                            className="position-absolute eye top-50 translate-middle-y"
                                            onClick={togglePasswordVisibility}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {showPassword ? <AiOutlineEyeInvisible className={'text-secondary'} size={22}/> : <AiOutlineEye className={'text-secondary'} size={22}/>}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" placeholder={'Confirm-password'} className="form-control" id="confirmPassword" />
                                    </div>
                                    <div className={'d-flex justify-content-between'}>
                                        <button onClick={onClose} className="btn btn-primary rounded-pill pop-mobile-button my-4">Create Account</button>
                                        <div className={'text-primary d-flex flex-column justify-content-center text-decoration-underline'} onClick={onSwitchToLogin}>Or,SignIn</div>
                                    </div>
                                    <button className={'d-flex gap-2 justify-content-center btn btn-light border border-1 rounded-1 w-100 my-2'}>
                                        <div className={'d-flex flex-col justify-content-center'}>
                                            <AiOutlineGoogle size={24}/>
                                        </div>
                                        <div>
                                            Sign Up With Google
                                        </div>
                                    </button>
                                    <button className={'d-flex gap-2 justify-content-center btn btn-light border border-1 rounded-1 w-100 my-2'}>
                                        <div className={'d-flex flex-col justify-content-center'}>
                                            <AiFillFacebook size={24}/>
                                        </div>
                                        <div>
                                            Sign Up With Facebook
                                        </div>
                                    </button>
                                    <p className={'small text-center'}>
                                        By signing up, you agree to our Terms & conditions, Privacy policy
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button className="modal-close position-absolute" onClick={onClose}>
                            &times;
                        </button>
                    </div>
                )
            }
        </div>
    );
};

export default PopupFormMobile;


// <div>
//
// </div>