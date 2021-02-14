import React from 'react';
import Grid from '../../Grid'; //Services
import HeroSection from '../../HeroSection';
import InfoSection from '../../InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour } from './Data';



function Home() {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjTwo} />
            {/* <InfoSection {...homeObjFour} /> */}
        </>
    );
};

export default Home;
