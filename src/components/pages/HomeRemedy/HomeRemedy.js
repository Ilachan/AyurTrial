import React from 'react';
// import { InfoSection2, InfoSection3 } from '../../components';
import InfoSection2 from '../../InfoSection2';
import InfoSection3 from '../../InfoSection3';
import { homeObjOne, objOne } from './Data';

function HomeRemedy() {
  return (
    <>
      <InfoSection2 {...homeObjOne} />
      <InfoSection3 {...objOne} />

    </>
  );
}

export default HomeRemedy;
