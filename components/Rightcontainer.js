import React, { useState } from 'react';
import {FaEdit, FaPen, FaTimes} from 'react-icons/fa';
import {SlLocationPin} from "react-icons/sl";
import {BiErrorCircle} from "react-icons/bi";
import Recommended from "@/components/Recommended";

const Rightcontainer = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [location, setLocation] = useState('');

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setLocation('');
    };

    const handleInputChange = (e) => {
        setLocation(e.target.value);
    };

    return (
        <div className="rightcontainer">
            <div className={`input-container ${isEditing ? 'editing' : ''}`}>
                <div className={'d-flex search-input'}>
                    <div className={'d-flex flex-column justify-content-center'}>
                        <SlLocationPin className={'text-dark'} size={20}/>
                    </div>
                    <input
                        type="text"
                        placeholder="Enter your location"
                        value={location}
                        onChange={handleInputChange}
                        onFocus={handleEditClick}
                        onBlur={handleCancelClick}
                    />
                    {isEditing ? (
                            <div className={'d-flex flex-column justify-content-center'}>
                                <FaTimes className="cancel-icon" onClick={handleCancelClick} />
                            </div>
                    ) : (
                        <div className={'d-flex flex-column justify-content-center'}>
                            <FaPen className="edit-icon" onClick={handleEditClick} />
                        </div>
                    )}
                </div>
                <div className={'d-flex gap-2 text-secondary fw-light fs-6 mt-4'}>
                    <div>
                        <BiErrorCircle size={20}/>
                    </div>
                    <div>
                        Your location will help us serve better and extend a personalised experience.
                    </div>
                </div>
                <Recommended/>
            </div>
            <style jsx>{`
        .rightcontainer {
          margin: 0px 0px 0px 80px;
          padding: 20px 0px 0px 25px;
          border-radius: 5px;
        }

        .input-container {
          position: relative;
        }

        .input-container input {
          width: 100%;
          border: none;
          outline: none;
          padding-right: 30px;
          text-align: center;
        }
        
        .cancel-icon,
        .edit-icon {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 8px;
          cursor: pointer;
        }

        .cancel-icon {
          color: red;
        }

        .edit-icon {
          color: blue;
        }
        .search-input{
          border: none;
          border-bottom: 1px solid grey;
        }
      `}</style>
        </div>
    );
};

export default Rightcontainer;
