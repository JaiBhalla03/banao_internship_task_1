import React, { useState } from 'react';
import { AiFillCaretDown, AiOutlineUsergroupAdd } from 'react-icons/ai';
import {BsBoxArrowInRight} from "react-icons/bs";


const LowerNavbar = () => {
    const [activeLink, setActiveLink] = useState(0);
    const [toggle, setToggle] = useState(false);
    const handleLinkClick = (index) => {
        setActiveLink(index);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white lower-navbar-desktop">
                <div className="container border-bottom pb-2">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeLink === 0 ? 'active' : ''}`}
                                onClick={() => handleLinkClick(0)}
                                href="#"
                            >
                                All Posts
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeLink === 1 ? 'active' : ''}`}
                                onClick={() => handleLinkClick(1)}
                                href="#"
                            >
                                Article
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeLink === 2 ? 'active' : ''}`}
                                onClick={() => handleLinkClick(2)}
                                href="#"
                            >
                                Event
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeLink === 3 ? 'active' : ''}`}
                                onClick={() => handleLinkClick(3)}
                                href="#"
                            >
                                Education
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeLink === 4 ? 'active' : ''}`}
                                onClick={() => handleLinkClick(4)}
                                href="#"
                            >
                                Job
                            </a>
                        </li>
                    </ul>
                    <div className={'d-flex'}>
                        <button type="button" className="btn custom-button-color-write-post me-2">
                            Write a Post <AiFillCaretDown />
                        </button>
                        {
                            toggle?(
                                <button type="button" onClick={()=>setToggle(!toggle)} className="d-flex justify-content-center btn btn-white border border-2 text-secondary">
                                    <div className={'d-flex gap-1'}>
                                        <div>
                                            <BsBoxArrowInRight size={18}/>
                                        </div>
                                        <div>Leave Group</div>
                                    </div>
                                </button>
                            ):(
                                <button type="button" onClick={()=>setToggle(!toggle)} className="btn btn-primary">
                                    <AiOutlineUsergroupAdd />Join Group
                                </button>
                            )
                        }

                    </div>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light bg-white lower-navbar-mobile">
                <div className="container">
                    <div className="me-auto mb-2 mb-lg-0 d-flex justify-content-between w-100">
                        <li className={'nav-link d-flex flex-column justify-content-center'}>
                            <div className={'fw-bold'}>
                                Posts(386)
                            </div>
                        </li>
                        <li className={'nav-link'}>
                            <button className={'btn btn-light'}>
                                Filer: All <AiFillCaretDown/>
                            </button>
                        </li>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default LowerNavbar;
