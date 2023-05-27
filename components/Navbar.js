import React, { useState } from 'react';
import { AiFillCaretDown, AiOutlineSearch } from 'react-icons/ai';
import logo from '../image/logo.png';
import Image from 'next/image';

const Navbar = () => {
    const [showCreateAccountModal, setShowCreateAccountModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    const handleCreateAccountClick = () => {
        setShowCreateAccountModal(true);
    };

    const handleLoginClick = () => {
        setShowLoginModal(true);
    };

    const handleCloseModal = () => {
        setShowCreateAccountModal(false);
        setShowLoginModal(false);
    };

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
                        <div className={'fw-semibold'} onClick={handleCreateAccountClick}>
                            Create account.
                        </div>
                        <div className={'text-primary fw-semibold'} onClick={handleCreateAccountClick}>
                            It's free
                        </div>
                        <div className={'d-flex flex-column justify-content-center'}>
                            <AiFillCaretDown />
                        </div>
                    </div>
                </div>
            </div>

            {/* Create Account Modal */}
            {showCreateAccountModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <div className="modal-header">
                            <h3>Create Account</h3>
                            <button className="modal-close" onClick={handleCloseModal}>
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" className="form-control" id="firstName" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" className="form-control" id="lastName" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input type="password" className="form-control" id="confirmPassword" />
                            </div>
                            <button className="btn btn-primary">Create Account</button>
                        </div>
                    </div>
                </div>
            )}
            {/* Login Modal */}
            {showLoginModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <div className="modal-header">
                            <h3>Login</h3>
                            <button className="modal-close" onClick={handleCloseModal}>
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">
                            {/* Add your login form here */}
                            <p>Login Form</p>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
        /* Add your modal styles here */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal {
          background-color: white;
          padding: 20px;
          border-radius: 5px;
          width: 400px;
          max-width: 90%;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .modal-close {
          cursor: pointer;
          border: none;
          background: none;
          font-size: 24px;
          color: #999;
        }

        .modal-body {
          padding: 20px 0;
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
