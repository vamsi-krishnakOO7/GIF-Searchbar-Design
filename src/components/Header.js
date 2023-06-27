import React from 'react';
import "./Header.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Header = () => {
  return <div className = "header">
    <div className="logo">
      <img src = "/images/Banner.png" alt="logo"/>
      </div>

      <div className = "menu">
          <div className="button-wrapper popular">
              <div className="menu-button hover-popular">
          <h2>Popular</h2>
          </div>
              </div>
              <div className="button-wrapper artists">
              <div className="menu-button hover-artists">
          <h2>Artists</h2>    
          </div>
              </div>
          <div className="button-wrapper stories">
              <div className="menu-button hover-stories">
          <h2>Stories</h2>
              </div>
              </div>
      </div>
      <button className="button">
          <CloudUploadIcon />
          <h2>Upload</h2>
      </button>

      <button className="profile">
          <img src="./images/avatar.png" alt="avatar"/>
          <h2>Kris</h2>
          <KeyboardArrowDownIcon />
      </button>
  </div>;
};


export default Header;