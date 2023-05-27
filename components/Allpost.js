import React from 'react';
import Postcard from "@/components/Postcard";
import postImage1 from '../image/post1.png'
import postImage2 from '../image/post2.png'
import postImage3 from '../image/post3.png'
import user1 from '../image/user1.png'
import user2 from '../image/user2.png'
import user3 from '../image/user3.png'
import user4 from '../image/user4.png'

const Allpost = () => {

    return (
        <div className={'allpost'}>
            <Postcard postImage={postImage1} userImage={user1} title={'✍Article'}
                      heading={'What if famous brand had regular fonts? Meet RegulaBrands!'}
                      description={'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…'}
                      isWebsite={false}
                      isTimesJob={false}

            />
            <Postcard postImage={postImage2} userImage={user2} title={'🔬Education'}
                      heading={'Tax Benefits for Investment under National Pension Scheme launched by Government'}
                      description={'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…'}
                      isWebsite={false}
                      isTimesJob={false}
            />
            <Postcard postImage={postImage3} userImage={user3} title={'🗓️Meet'}
                      heading={'Finance & Investment Elite Social Mixer @Lujiazui'}
                      isWebsite={true}
                      isTimesJob={false}
                      date={'Fri, 12 Oct, 2018'}
                      location={'Ahmedabad, India'}
            />
            <Postcard userImage={user4} title={'💼Job'}
                      heading='Software Developer'
                      isWebsite={false}
                      isTimesJob={true}
                      job={'Innovaccer Analytics Private Ltd.'}
                      location={'Noida, India'}
            />
        </div>
    );
};

export default Allpost;