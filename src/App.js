import React, { useState } from 'react';
import './App.css';
import img from './ui.jpeg'

const App = () => {
  // State to control the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const handleYesClick = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h3> Uiiiii the Cutiiiii ... Will you be my girlfriend  plisssss?</h3>
      </header>
      <div className="proposal-box">
        <p className="message">
          I can't imagine my life without you. You've filled my days with joy, and I want to spend forever with you.
        </p>
        <div className="button-container">
          <button className="proposal-btn yes-btn" onClick={handleYesClick}>
            Yes, forever!
          </button>
          <button className="proposal-btn no-btn">No, sorry.</button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={handleCloseModal}>
              &times;
            </button>
            <img
              src= {img}// Replace with her image URL
              alt="Happy Her"
              className="modal-img"
            />
            <p className="modal-note">
              "Every moment with you is a treasure. You are my heart, my soul, and my everything. I can't wait for our forever. "
            </p>
            <p className="modal-note">

               Your's Tofuuuu Boiiiii ~ 
               Archit !! 
            </p>
            <button className="modal-btn" onClick={handleCloseModal}>
              Welcome to my world
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
