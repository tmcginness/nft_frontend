import React from 'react';

import { useState } from 'react'






const NftCard = (props) => {

const [nft, setnft] = useState(props)

return(



                <div key={nft.id} >
                  <div className='charBox'  >
                    <div className="hover-point" id="point1"></div>
                    <div className="hover-point" id="point2"></div>
                    <div className="hover-point" id="point3"></div>
                    <div className="hover-point" id="point4"></div>
                    <div className="hover-point" id="point5"></div>
                    <div className="hover-point" id="point6"></div>
                    <div className="hover-point" id="point7"></div>
                    <div className="hover-point" id="point8"></div>
                    <div className="box-contents">
                    <h4 className='charName' >{nft.fname}</h4>
                      <div className='charImgBox ' >
                        <img className='charImg' src={nft.image}/>
                      </div>
                    </div>

        </div>
      </div>
    );
  }
export default NftCard
