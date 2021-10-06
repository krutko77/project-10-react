import React from 'react';
import './Headliner.css';
import likeIcon from './../../assets/images/like.svg';
import disLikeIcon from './../../assets/images/dislike.svg';
import clockIcon from './../../assets/images/clock.svg';

function Headliner(props) {
   return (
      <article className="headliner">
         <img className="thumbnail-img" src={props.thumbnail} alt="photo" />
         <div className="info">
            <h1 className="title">{props.title}</h1>
            <div className="rating">
               <div className="like">
                  <img className="like-icon" src={likeIcon} alt="like" />
                  <span className="text">{props.likes}</span>
               </div>
               <div className="dislike">
                  <img className="dislike-icon" src={disLikeIcon} alt="dislike" />
                  <span className="text">{props.dislikes}</span>
               </div>
            </div>
            <div className="wrapper">
               <span className="label">{props.label}</span>
               <div className="time">
                  <img className="time-icon" src={clockIcon} alt="clock-icon" />
                  <span className="time-text text">{props.time}</span>
               </div>
            </div>
         </div>
      </article>
   );
}

export default Headliner;