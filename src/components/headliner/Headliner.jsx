import s from './Headliner.module.css';
import likeIcon from './../../assets/images/like.svg';
import disLikeIcon from './../../assets/images/dislike.svg';
import Time from './../time/Time';
import Label from './../label/Label';
import ArticleHeader from '../article-header/ArticleHeader';

function Headliner(props) {
   return (
      <article className={s.headliner}>
         <img className={s.thumbnailImg} src={props.thumbnail} alt="thumbnail-img" />
         <div className={s.info}>
            <ArticleHeader title={props.title}/>
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
               <Label label={props.label}/>
               <Time time={props.time}/>
            </div>
         </div>
      </article>
   );
}

export default Headliner;