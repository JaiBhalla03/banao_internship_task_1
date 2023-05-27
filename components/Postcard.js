import React, {useState} from 'react';
import Image from "next/image";
import {FiMoreHorizontal, FiMoreVertical} from "react-icons/fi";
import {AiFillCalendar, AiOutlineEye} from "react-icons/ai";
import {BsFillShareFill} from "react-icons/bs";
import {FaLocationArrow, FaShoppingBag} from "react-icons/fa";

const Postcard = ({postImage, userImage, title, heading, description, isWebsite, isTimesJob, date, location, job}) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleToggleDropdown = () => {
        setShowDropdown((prevState) => !prevState);
    };

    return (
        <div className={'postCard position-relative bg-white'}>
            <Image src={postImage} layout={'responsive'} className={'image'}/>
            <div className={'p-4'}>
                <p className={'fw-semibold'}>{title}</p>
                <div className={'d-flex justify-content-between'}>
                    <div className={'fw-bold'}>
                        {heading}
                    </div>
                    <div className={'position-relative more-button'}>
                        {showDropdown ? (
                            <FiMoreVertical size={20} onClick={handleToggleDropdown} />
                        ) : (
                            <FiMoreHorizontal size={20} onClick={handleToggleDropdown} />
                        )}
                        {showDropdown && (
                            <div className="dropdown rounded-3">
                                <ul>
                                    <li>
                                        Edit
                                    </li>
                                    <li>
                                        Report
                                    </li>
                                    <li>Option 3</li>
                                </ul>
                            </div>
                        )}

                    </div>
                </div>
                <p className={'text-secondary'}>
                    {description}
                </p>
                <div className={'d-flex justify-content-between'}>
                    {
                        date && (
                            <div><AiFillCalendar/>{date}</div>
                        )
                    }
                    {
                        job && (
                            <div><FaShoppingBag/>{job}</div>
                        )
                    }
                    {
                        location && (
                            <div><FaLocationArrow/>{location}</div>
                        )
                    }
                </div>
                {
                    isWebsite && (
                        <button className={'btn btn-danger bg-white text-danger my-2 w-100'}>Visit Website</button>
                    )
                }
                {
                    isTimesJob && (
                        <button className={'btn btn-success bg-white text-success my-4 w-100'}>Apply on Timesjob</button>
                    )
                }
                <div className={'d-flex flex-column justify-content-center'}>
                    <div className={'d-flex justify-content-between'}>
                        <div className={'d-flex gap-2'}>
                            <Image src={userImage} alt={''}/>
                            <div className={'d-flex flex-column justify-content-center items-center'}>
                                <div className={'fw-bold d-flex flex-column justify-content-center'}>Sarthak Kamra</div>
                            </div>
                        </div>
                        <div className={'d-flex flex-column justify-content-center'}>
                            <div className={'d-flex gap-2'}>
                                <div className={'text-secondary d-flex'}>
                                    <div className={'d-flex flex-column justify-content-center'}>
                                        <AiOutlineEye/>
                                    </div>
                                    <div className={'d-flex flex-column justify-content-center'}>1.4k views</div>
                                </div>
                                <div className={'d-flex flex-column justify-content-center bg-light rounded-1 p-2'}>
                                    <BsFillShareFill className={'bg-light'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Postcard;