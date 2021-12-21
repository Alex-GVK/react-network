import React from "react";
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://images.pexels.com/photos/5232649/pexels-photo-5232649.jpeg?auto=compress&cs=tinysrgb&fit=crop&fp-y=0.54&h=500&sharp=20&w=1400"></img>
      </div>
      <div>ava + description</div>
      <div>
        My posts
        <div>New posts</div>
        <div className = {s.posts}>
          <div className = {s.item}>post 1</div>
          <div className = {s.item}>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
