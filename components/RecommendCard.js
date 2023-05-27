import React from 'react';
import Image from "next/image";
import test from '../image/rec1.png'

const RecommendCard = ({imag, name}) => {
    return (
        <div className={'d-flex justify-content-between'}>
            <div className={'d-flex flex-column justify-content-center'}>
                <Image src={imag} height={45}/>
            </div>
            <div className={'d-flex flex-column justify-content-center'}>
                {name}
            </div>
            <div className={'d-flex flex-column justify-content-center'}>
                <button className={'bg-light rounded-pill px-3 py-1 border-0'}>Follow</button>
            </div>
        </div>
    );
};

export default RecommendCard;