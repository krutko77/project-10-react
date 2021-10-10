import s from './NewsCard.module.css'
import Time from './../time/Time.jsx';
import Label from './../label/Label.jsx';
import TextNews from './../text-news/TextNews.jsx'

function NewsCard(props) {
   return (
      <article className={s.newsCard}>
         <img className={s.imgNews} src={props.image} alt="images" />
         <div className={s.contentNews}>
            <TextNews text={props.text}/>            
            <div className={s.infoNews}>
               <div className={s.labelNews}>
                  <Label label={props.label}/>  
               </div>
               <div className={s.timeNews}>
                  <Time time={props.time}/>
               </div>               
            </div>
         </div>         
      </article>
   );
}

export default NewsCard;