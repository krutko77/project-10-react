import s from './Headliner.module.css';
import likeIcon from './../../assets/images/like.svg';
import disLikeIcon from './../../assets/images/dislike.svg';
import clockIcon from './../../assets/images/clock.svg';

function Headliner(props) {
   return (
      <article className={s.headliner}>
         <img className={s.thumbnailImg} src={props.thumbnail} alt="thumbnail-img" />
         <div className={s.info}>
            <h1 className={s.title}>{props.title}</h1>
            <div className={s.rating}>
               <div className={s.like}>
                  <img className={s.likeIcon} src={likeIcon} alt="like" />
                  <span className={s.text}>{props.likes}</span>
               </div>
               <div className={s.dislike}>
                  <img className={s.dislikeIcon} src={disLikeIcon} alt="dislike" />
                  <span className={s.text}>{props.dislikes}</span>
               </div>
            </div>
            <div className={s.wrapper}>
               <span className={s.label}>{props.label}</span>
               <div className={s.time}>
                  <img className={s.timeIcon} src={clockIcon} alt="clock-icon" />
                  <span className={s.timeText}>{props.time}</span>
               </div>
            </div>
         </div>
      </article>
   );
}

export default Headliner;