import React, { useState } from 'react';
import { AiFillCaretDown, AiOutlineUsergroupAdd } from 'react-icons/ai';


const LowerNavbar = () => {
    const [activeLink, setActiveLink] = useState(0);

    const handleLinkClick = (index) => {
        setActiveLink(index);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
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
                <div>
                    <button type="button" className="btn custom-button-color-write-post me-2">
                        Write a Post <AiFillCaretDown />
                    </button>
                    <button type="button" className="btn btn-primary">
                        <AiOutlineUsergroupAdd />Join Group
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default LowerNavbar;
