import React from "react";
import "./Profile.css";

const Profile = () => {;
    const developerName = 'Leonardus Richard Dwivano Satria';
    const developerId = '21120121140129';
    const developerImage = 'https://i.pinimg.com/1200x/d2/25/d0/d225d0c593d80f01ef0df7e09e30fcbf.jpg';
    const developerDesc = "Mahasiswa Universitas Diponegoro, jurusan Teknik Komputer, asal dari Bekasi, Jawa Barat";
  return (
    
      <div className="profile-container">
        <h4 id="movies">Profile</h4>
        <img className="profile-image" src={developerImage} alt="Developer" />
        <p2 className="Desc"/>
        <h2>{developerName}</h2>
        <p>NIM: {developerId}</p>
        <p2>{developerDesc}</p2>
      </div>
    );
  };
  
  export default Profile;