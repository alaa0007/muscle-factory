import React, { useState,useId }from 'react'
import { Modal } from 'react-responsive-modal';
import logo from '../../assets/Images/logoWithoutBg.png';
import profilBody from '../../assets/Images/profilBody.jpg';
import profilHeigth from '../../assets/Images/profilHeigth.png';
import profilWeight from '../../assets/Images/profilWeight.png';

const Transformation = ({item}) => {

    const idHeight = useId();
    const idWeight = useId();

    const [open, setOpen] = useState(false);

  
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

  return (
    <div>
        <Modal open={open} onClose={onCloseModal} center classNames={{
          overlayAnimationIn: 'customEnterOverlayAnimation',
          overlayAnimationOut: 'customLeaveOverlayAnimation',
          modalAnimationIn: 'customEnterModalAnimation',
          modalAnimationOut: 'customLeaveModalAnimation',
        }}
        animationDuration={500}>
        <div className='popup-profil'>
          <div className='popup-header'>
          <img src={ logo } alt="loginLogo" className='logo'/>
            <h2>Work hard until you see the results</h2>
          </div>
          <div className='popup-container'>
            <div className='popup-height-weight'>
              <div className='weight-img'>
                <img src={ profilWeight } alt="weight" />
                <label htmlFor='idWeight'>Weight:</label>
                <span id={idWeight} className='heightCm'>{ item.userId || 0 }</span> Kg
              </div>
              <div className='height-img'>
                <img src={ profilHeigth } alt="height" />
                <label htmlFor='idHeight'>Height:</label>
                <span id={idHeight} className='heightCm'>{ item.id  || 0 }</span> Cm
              </div>
            </div>
            <hr />
            <div className='popup-progress'>
              <img src={ profilBody } alt="yourBodyImage" />
            </div>
          </div>
      </div>
      </Modal>
    </div>
  )
}

export default Transformation