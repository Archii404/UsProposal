import React, { useState } from "react";
import "./App.css";
import img from "./ui.jpeg";

const App = () => {
  // State to control modals
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLetterModalOpen, setIsLetterModalOpen] = useState(false);

  // Function to open the modal
  const handleYesClick = () => {
    setIsModalOpen(true); // Open main modal
  };

  // Function to close the main modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Function to open the love letter modal
  const handleOpenLetterModal = () => {
    setIsLetterModalOpen(true);
  };

  // Function to close the love letter modal
  const handleCloseLetterModal = () => {
    setIsLetterModalOpen(false);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h3>Uiiiii the CUtiiiiii, Will you be my girlfriend? Plissssss :) </h3>
      </header>
      <div className="proposal-box">
        <p className="message">
          I can't imagine my life without you. You've filled my days with joy,
          and I want to spend forever with you. Will you be mine for 6-7 Janam
          Atleastttttt... P.s Plisssss :)
        </p>
        <div className="button-container">
          <button className="proposal-btn yes-btn" onClick={handleYesClick}>
            Yes, forever!
          </button>
          <button className="proposal-btn no-btn">No, sorry.</button>
        </div>
      </div>

      {/* Main Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={handleCloseModal}>
              &times;
            </button>
            <img src={img} alt="Happy Her" className="modal-img" />
            <p className="modal-note">
              "Every moment with you is a treasure. You are my heart, my soul,
              and my everything. I can't wait for our forever."
            </p>
            <button className="modal-btn" onClick={handleCloseModal}>
              Welcome to my world
            </button>
            <button
              className="modal-btn short-note-btn mx-2"
              onClick={handleOpenLetterModal}
            >
              A Short Note
            </button>
          </div>
        </div>
      )}

      {/* Love Letter Modal */}
      {isLetterModalOpen && (
        <div className="letter-modal">
          <div className="letter-modal-content">
            <button className="close-btn" onClick={handleCloseLetterModal}>
              &times;
            </button>
            <h2 className="letter-header">A Love Letter for You</h2>
            <p className="letter-body">
              My Dearest Uiiii,
              <br />
              <br />
              <b>"Aisa toh nahi tha ki isse zyada khoobsurat ladki maine dekhi nahi thi… par pata nahi kyun uske chehre se meri nazar hatti nahi thi" </b>
              <br/>
              While we all know that physical beauty can be found in many (tuffff in my case, I have the BEST), what
              I have with you goes far beyond appearances. It’s the way you
              think, the depth of your mind, and the way you see the world that
              has truly captured my heart. I’ve fallen in love with you—with
              everything that makes you, you. The peace I feel when we’re
              together, even in the quiet moments when we’re just bored and
              still, is something truly special. This feeling, this connection,
              is so rare, and I know it’s something I’ll cherish for the rest of
              my life. And this... this is just the beginning of our beautiful
              journey together.

              <br />
              <br />
              With all my heart,
              <br />
              Your's Tofu Boiii Archit
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
