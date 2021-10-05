import React from 'react';
import './Headliner.css';
import thumbnail from './../../assets/images/img-1.jpg';
import likeIcon from './../../assets/images/like.svg';
import disLikeIcon from './../../assets/images/dislike.svg';
import clockIcon from './../../assets/images/clock.svg';

function Headliner() {
   return (
      <article className="headliner">
         <img className="thumbnail-img" src={thumbnail} alt="photo" />
         <div className="info">
            <h1 className="title">Hate speech vs free speech</h1>
            <div className="rating">
               <div className="like">
                  <img className="like-icon" src={likeIcon} alt="like" />
                  <span className="text">10.9k</span>
               </div>
               <div className="dislike">
                  <img className="dislike-icon" src={disLikeIcon} alt="dislike" />
                  <span className="text">1.4k</span>
               </div>
            </div>
            <div className="wrapper">
               <span className="label">BBC NEWS</span>
               <div className="time">
                  <img className="time-icon" src={clockIcon} alt="clock-icon" />
                  <span className="time-text">2:00 pm</span>
               </div>
            </div>
         </div>
      </article>
   );
}

export default Headliner;