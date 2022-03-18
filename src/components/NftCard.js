import React from 'react';
import { useState, useEffect } from 'react'
import Modal from '../components/Modal'


const NftCard = (props) => {

  const [nft, setnft] = useState(props.nft)
  const [open, setOpen] = useState(false);
  // console.log('show' + open);
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className='charBox' onClick={() => { setToggle((prevState) => !prevState);; }} >
        <div className="hover-point" id="point1"></div>
        <div className="hover-point" id="point2"></div>
        <div className="hover-point" id="point3"></div>
        <div className="hover-point" id="point4"></div>
        <div className="hover-point" id="point5"></div>
        <div className="hover-point" id="point6"></div>
        <div className="hover-point" id="point7"></div>
        <div className="hover-point" id="point8"></div>
        <div className="box-contents">
          <h4 className='charName' >{nft.name}</h4>
          <div className='charImgBox ' >
            <img className='charImg' src={nft.image} />
          </div>
        </div>
        <Modal nft={nft} open={toggle} />
      </div>
    </>
  );
}
export default NftCard
