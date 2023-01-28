import React from "react";

import "./Profile.css";

export default function Profile() {
  return (
    <div className="wrapper">
      <header>
        <div className="btn">FEELZ</div>
        <nav>
          <a href="#">
            <img src="/public/images/icons/home.png" alt="" />
          </a>
          <a href="#">
            <img src="/public/images/icons/newpost.png" alt="" />
          </a>
        </nav>
        <div className="profile">
          <img src="/public/images/icons/profile.jpg" alt="" />
        </div>
      </header>
      <main>
        <div className="cover">
          <img src="/public/images/icons/profile.jpg" alt="" />
        </div>
        <div className="profile-info">
          <h3>Evelyn Jonas</h3>
          <p className="handle">@Angelevie</p>
          <p className="city">Los Angeles</p>
          <p className="about">
            A n artist by day and a content creator by night. I love arts and
            anything filled with nature
          </p>
          <button>Edit Profile</button>
        </div>
      </main>
    </div>
  );
}
