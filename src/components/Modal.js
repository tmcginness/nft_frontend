import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {useEffect, useState} from 'react'


const Modals = (props) => {
  // this goes on the App.js page
  // <ModalPage character = {modalData} handleUpdate={handleUpdate} character={modalData} open = {modalIsOpen}/>
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState(props.nft);
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(props.open);

  // let properties = modalData.properties.split(',')

  // console.log('props ' + properties);
  const customStyles = {
    overlay: {
      display: 'flex',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
      content: {
        top: '5%',
        left: '12%',
        right: 'auto',
        bottom: 'auto',
        width: '75%',
        WebkitOverflowScrolling: 'scroll',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
      },

    }
    const show = () => {
      // console.log('inside show' + open);
      setOpen(false)

      setToggle((prevState) => !prevState);
    }

  function MouseOver(event) {
          setToggle((prevState) => !prevState);
        }
        function MouseOut(event){
          setToggle((prevState) => !prevState);
        }

  useEffect(() => {
show()
// console.log('modal ' + open);
  }, [])

return(
  <>
    <Modal isOpen={props.open}
        preventScroll={true}
        ariaHideApp={false}
        closeTimeoutMS={1000}
        onRequestClose={() => setOpen(false)}
        style={customStyles}>
      <button id='closeModal' onClick={() => show(false)}>X</button>
      <div className='zoomBox' >
        <div className='zoomImgBox'>
          <img className='zoomImg' src={modalData.image}/>
        </div>
        <div className= 'zoomContent'>
          <h2>{modalData.name}</h2>
          <h5>Price: ${modalData.price}</h5>
          <div className='zoomDesc'>
          <h5>Description: {modalData.description}</h5>
          </div>
          <div className='propContainer'>
            <h4>Properties</h4>
            <div className='propDiv'>
              {modalData.properties.split(',').map((proper, index) => {
                return(
                  <div className='propBox' key={'prop'+index} >
                    <h6>{proper}</h6>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Modal>
    </>
    )

}

export default Modals
