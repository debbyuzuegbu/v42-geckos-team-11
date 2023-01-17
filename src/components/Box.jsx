import React from "react";
import { FaHeartBroken } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { CiAt } from "react-icons/ci";
import "./Box.css";
import Profile from '../Images/profile.png';
import Post from '../Images/post.png';

const Box = () => {
  return (
    <div className="container">
      <div className="section-1">
        <div>
          <img src={Profile} alt="profile" />
        </div>
        <div>
          <div>FirstName Surname</div>
          <div>country</div>
        </div>
      </div>

      <div className="section-2">
        <div>
          <FaHeartBroken /> <BsBookmark />
        </div>
        <div>
          <img className="post" src={Post} alt="post"/>
        </div>
        <div>
          <AiOutlineHeart />
          <CiAt />
        </div>
      </div>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga similique
        illum eum fugit nostrum saepe facilis quaerat asperiores nisi ex,
        deserunt at odit recusandae corporis voluptas. Odio placeat velit sit!
      </div>
    </div>
  );
};

export default Box;
