import React from 'react';
import Image from 'next/image';
import topMargin from '../../../../public/LoremipsumTopMargin.png';
import './Margin.css';

function Margin() {
  return (
    <div>
        <div className='topMargin'>
            <div className='image-row'>
                <Image alt='Lorem Ipsum Icon' src={topMargin}/>
                <Image alt='Lorem Ipsum Icon' src={topMargin}/>
                <Image alt='Lorem Ipsum Icon' src={topMargin}/>
            </div>
        </div>
    </div>
  )
}

export default Margin