import React, { useState } from 'react';
import { AiFillCaretDown, AiOutlineSearch } from 'react-icons/ai';
import logo from '../image/logo.png';
import Image from 'next/image';
import PopupForm from "@/components/PopupForm";
import user from '../image/user4.png'

const Navbar = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [authorised , setAuthorised] = useState(false);
    const handlePopup = ()=>{
        setShowPopup(true);
    }
    const onClose = ()=>{
        setShowPopup(false);
    }
    return (
        <nav className="navbar navbar-light py-2 sticky-top bg-white border-bottom-1 border d-none d-md-flex">
            <div className="mx-4 container-fluid">
                <a className="navbar-brand d-flex flex-column justify-content-center" href="#">
                    <Image src={logo} alt="Logo" height={23} className="d-inline-block align-top" />
                </a>
                <form className="d-flex justify-content-center">
                    <div className="input-group">
                        <div className={'bg-light d-flex rounded-pill px-4'}>
                            <div className={'d-flex flex-column justify-content-center'}>
                                <AiOutlineSearch size={17} className={'custom-color-search'} />
                            </div>
                            <input
                                className="custom-input custom-width form-control rounded-pill border-0 bg-light"
                                type="search"
                                placeholder="Search for your favourite groups in ATG"
                                aria-label="Search"
                            />
                        </div>
                    </div>
                </form>
                <div className={'d-flex flex-column justify-content-center'}>
                    <div className={'d-flex login-button'}>
                        {
                            authorised ? (
                                <div className={'d-flex gap-2'}>
                                    <div className={'fw-semibold'} onClick={handlePopup}>
                                        <Image src={user} alt={''} height={40}/>
                                    </div>
                                    <div className={'d-flex flex-column justify-content-center fw-semibold'} onClick={handlePopup}>
                                        Siddharth Goyal
                                    </div>
                                </div>
                            ):(
                                <div className={'d-flex'}>
                                    <div className={'fw-semibold'} onClick={handlePopup}>
                                        Create account.
                                    </div>
                                    <div className={'text-primary fw-semibold'} onClick={handlePopup}>
                                        It's free
                                    </div>
                                </div>
                            )
                        }

                        <div className={'d-flex flex-column mx-2 justify-content-center'}>
                            <AiFillCaretDown onClick={()=>setAuthorised(!authorised)}/>
                        </div>
                    </div>
                </div>
            </div>
            {
                showPopup && (
                    <PopupForm onClose={onClose}/>
                )
            }
        </nav>
    );
};

export default Navbar;
