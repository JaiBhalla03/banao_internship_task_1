import React from 'react';
import {AiFillCaretDown, AiOutlineSearch} from "react-icons/ai";
import logo from '../image/logo.png'
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="navbar navbar-light">
            <div className="mx-4 container-fluid">
                <a className="navbar-brand d-flex flex-column justify-content-center" href="#">
                    <Image
                        src={logo}
                        alt="Logo"
                        height={23}
                        className="d-inline-block align-top"
                    />
                </a>
                <form className="d-flex justify-content-center">
                    <div className="input-group">
                        <div className={'bg-light d-flex rounded-pill px-4'}>
                            <div className={'d-flex flex-column justify-content-center'}>
                                <AiOutlineSearch size={17} className={'custom-color-search'}/>
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
                    <div className={'d-flex'}>
                        <div className={'fw-semibold'}>Create account.</div><div className={'text-primary fw-semibold'}>It's free </div>
                        <div className={'d-flex flex-column justify-content-center'}>
                            <AiFillCaretDown/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
