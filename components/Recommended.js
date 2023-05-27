import React from 'react';
import {BsHandThumbsUp} from "react-icons/bs";
import RecommendCard from "@/components/RecommendCard";
import test1 from '../image/rec1.png'
import test2 from '../image/rec2.png'
import test3 from '../image/rec3.png'
import test4 from '../image/rec4.png'

const Recommended = () => {
    return (
        <div className={'d-flex flex-column gap-4'}>
            <div className={'d-flex gap-2 mt-5'}>
                <div className={'d-flex flex-column justify-content-center'}>
                    <BsHandThumbsUp className={'bg-light rounded-1'}/>
                </div>
                <div className={'d-flex flex-column justify-content-center fw-semibold'}>
                    RECOMMENDED GROUPS
                </div>
            </div>
            <RecommendCard imag={test1} name={'Liesure'}/>
            <RecommendCard imag={test2} name={'Activism'}/>
            <RecommendCard imag={test3} name={'MBA'}/>
            <RecommendCard imag={test4} name={'Philosophy'}/>
            <div className={'text-primary d-flex justify-content-end mt-4'}>See more..</div>
        </div>
    );
};

export default Recommended;