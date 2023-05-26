import React from 'react';
import Image from "next/image";
import test from '../image/post1.png'
import testUser from '../image/user1.png'
import {FiMoreVertical} from "react-icons/fi";
import {AiOutlineEye} from "react-icons/ai";
import {BsFillShareFill} from "react-icons/bs";

const Postcard = () => {
    return (
        <div className={'postCard position-relative bg-white'}>
            <Image src={test} layout={'responsive'} className={'image'}/>
            <div className={'p-4'}>
                <p className={'fw-semibold'}>🏒Article</p>
                <div className={'d-flex justify-content-between'}>
                    <div className={'fw-bold'}>
                        What if famous brand had regular fonts? Meet RegulaBrands!
                    </div>
                    <div className={'d-flex flex-column justify-content-center'}>
                        <FiMoreVertical size={20}/>
                    </div>

                </div>
                <p className={'text-secondary'}>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                <div className={'d-flex flex-column justify-content-center'}>
                    <div className={'d-flex justify-content-between'}>
                        <div className={'d-flex gap-2'}>
                            <Image src={testUser} alt={''}/>
                            <div className={'d-flex flex-column justify-content-center items-center'}>
                                <div className={'fw-bold d-flex flex-column justify-content-center'}>Sarthak Kamra</div>
                            </div>
                        </div>
                        <div className={'d-flex flex-column justify-content-center'}>
                            <div className={'d-flex gap-2'}>
                                <div className={'text-secondary'}>
                                    <AiOutlineEye/> 1.4k views
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