import s from './NewsCard.module.css'
import Time from './../../time/Time.jsx';
import Label from './../../label/Label.jsx';


function NewsCard(props) {
   return (
      <article className={s.newsCard}>
         <img className={s.imgNews} src={props.cardData.img} alt="images" />
         <div className={s.contentNews}>
            <p className={s.textNews}>{props.cardData.text}</p>
            <div className={s.infoNews}>
               <div className={s.labelNews}>
                  <Label label={props.cardData.label} />
               </div>
               <div className={s.timeNews}>
                  <Time time={props.cardData.time} />
               </div>
            </div>
         </div>
      </article>
   );
}

export default NewsCard;