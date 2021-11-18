import s from './HeadlinesCard.module.css';
import Time from '../../time/Time';
import Label from '../../label/Label';

import likeIcon from './../../../assets/images/like.svg';
import disLikeIcon from './../../../assets/images/dislike.svg';


function HeadlinesCard(props) {
   return (
      <article className={s.headlinesCard}>
         <img className={s.thumbnailImg} src={props.cardData.thumbnail} alt="thumbnail-img" />
         <div className={s.info}>
            <h3 className={s.title}>{props.cardData.title}</h3>
            <div className={s.rating}>
               <div className={s.like}>
                  <img className={s.likeIcon} src={likeIcon} alt="like" />
                  <span className={s.text}>{props.cardData.likes}</span>
               </div>
               <div className={s.dislike}>
                  <img className={s.dislikeIcon} src={disLikeIcon} alt="dislike" />
                  <span className={s.text}>{props.cardData.dislikes}</span>
               </div>
            </div>
            <div className={s.wrapper}>
               <Label label={props.cardData.label}/>
               <Time time={props.cardData.time}/>
            </div>
         </div>
      </article>
   );
}

export default HeadlinesCard;