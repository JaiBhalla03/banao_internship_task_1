import React, {useState} from 'react';
import imag from '../image/loginImage.png'
import Image from "next/image";
import Link from "next/link";
import {AiFillFacebook, AiOutlineEye, AiOutlineEyeInvisible, AiOutlineGoogle} from "react-icons/ai";

const PopupForm = ({onClose}) => {
    const [showLogin, setShowLogin] = useState(true);
    const onSwitchToLogin =()=>{
        setShowLogin(false);
    }
    const onSwitchToRegister = ()=>{
        setShowLogin(true);
    }
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className="modal-overlay">
            {
                showLogin ? (
                    <div className="modal d-flex flex-column justify-content-between">
                        <div className={'bg-light text-success text-center py-2'}>
                            Let's learn, share & inspire each other with our passion for computer programming engineering. Sign Up now 🤘
                        </div>
                        <div className={'d-flex justify-content-between'}>
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
                                    <div className="form-group">
                                        <input type="password" placeholder={'Password'} className="form-control" id="password" />
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
                                    <button onClick={onClose} className="btn btn-primary w-100 rounded-pill my-4">Create Account</button>
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
                                </div>
                            </div>
                            <div className={'d-flex flex-column justify-content-between px-4'}>
                                <div className={'d-flex justify-content-end'}>
                                    Already have a account?<div className={'text-primary'} onClick={onSwitchToLogin}>SignIn</div>
                                </div>
                                <div className={'d-flex justify-content-center'}>
                                    <Image src={imag} alt={''} contain/>
                                </div>
                                <p className={'small'}>
                                    By signing up, you agree to our Terms & conditions, Privacy policy
                                </p>
                            </div>

                        </div>
                        <button className="modal-close position-absolute" onClick={onClose}>
                            &times;
                        </button>
                    </div>
                ):(
                    <div className="modal d-flex flex-column justify-content-between">
                        <div className={'bg-light text-success text-center py-2'}>
                            Let's learn, share & inspire each other with our passion for computer programming engineering. Sign Up now 🤘
                        </div>
                        <div className={'d-flex justify-content-between mb-4'}>
                            <div className={'forming'}>
                                <h3 className={'fw-bold'}>Sign In</h3>
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
                                    <button onClick={onClose} className="btn btn-primary w-100 rounded-pill my-4">Sign In</button>
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
                                    <div className={'text-center fw-bold'}>
                                        Forgot password?
                                    </div>
                                </div>
                            </div>
                            <div className={'d-flex flex-column justify-content-between px-4'}>
                                <div className={'d-flex justify-content-end'}>
                                    Don't have an account yet?<div className={'text-primary'} onClick={onSwitchToRegister}>Create new for free!</div>
                                </div>
                                <div className={'d-flex justify-content-center mb-4 pb-4'}>
                                    <Image src={imag} alt={''} contain/>
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

export default PopupForm;


// <div>
//
// </div>