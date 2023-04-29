import React from 'react';
import Qzone1 from '../../../public/images/qZone1.png'
import Qzone2 from '../../../public/images/qZone2.png'
import Qzone3 from '../../../public/images/qZone3.png'

const QZone = () => {
  return (
    <div className='bg-secondary text-center my-4 py-4'>
      <h4>Q-Zone</h4>
      <div className="">
        <img src={Qzone1} alt="" />
        <img src={Qzone2} alt="" />
        <img src={Qzone3} alt="" />
      </div>
    </div>
  );
};

export default QZone;