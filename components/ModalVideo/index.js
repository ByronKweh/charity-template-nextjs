
import React, { useState } from 'react'


const VideoModal = () => {

  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };


  return (
    <div className="v-modal-area">
      <div className="video-btn">
        <ul>
          <li>
            <button className="wrap" onClick={openModal}><i className="fi flaticon-play"></i></button>
          </li>
        </ul>
      </div>
      <div className="v-modal-wrap">
        {modal ? (
          <section className="modal__bg">
            <button onClick={openModal} className="close"> 
              <i className='fa fa-close'></i>
            </button>
            <div className="modal__align">
              <div className="modal__content" modal={modal}>
                <div className="modal__video-align">
                  <iframe
                    className="modal__video-style"
                    loading="lazy"
                    src="https://www.youtube.com/embed/iSbzh0r9IV4"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </div>
  )
}

export default VideoModal;