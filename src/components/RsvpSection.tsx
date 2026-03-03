import { useState } from 'react';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/1AvaQqJDHfOU49rqTZe188Sdm7WshQy2DYoqFB1a4gxA/viewform?embedded=true';

export const RsvpSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="rsvp">
        <div className="rsvp-text">
          PLEASE RSVP 💎<br />
          LET'S BUILD SOME FUN!
        </div>
        <button 
          onClick={openModal}
          className="rsvp-button"
        >
          RSVP NOW
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ✕
            </button>
            <iframe 
              src={GOOGLE_FORM_URL}
              className="modal-iframe"
              title="RSVP Form"
            />
          </div>
        </div>
      )}
    </>
  );
};
