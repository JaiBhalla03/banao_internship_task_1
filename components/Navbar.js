import React, { useState } from 'react';
import { AiFillCaretDown, AiOutlineSearch } from 'react-icons/ai';
import logo from '../image/logo.png';
import Image from 'next/image';
import PopupForm from "@/components/PopupForm";

const Navbar = () => {
    const [showPopup, setShowPopup] = useState(false);
    const handlePopup = ()=>{
        setShowPopup(true);
    }
    const onClose = ()=>{
        setShowPopup(false);
    }
    return (
        <nav className="navbar navbar-light py-3 sticky-top bg-white border-bottom-1 border">
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
                        <div className={'fw-semibold'} onClick={handlePopup}>
                            Create account.
                        </div>
                        <div className={'text-primary fw-semibold'} onClick={handlePopup}>
                            It's free
                        </div>
                        <div className={'d-flex flex-column justify-content-center'}>
                            <AiFillCaretDown />
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
