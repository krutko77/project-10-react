import s from './FeaturedNews.module.css';
import SectionHeader from './../section-header/SectionHeader.jsx';
import NewsCard from './news-card/NewsCard.jsx';


function FeaturedNewsWrap(props) {
   return (
      <section>
         <div className={s.container}>
            <div>
               <SectionHeader title={"Featured News"} />
            </div>
            <div className={s.FeaturedNewsWrap}>
               <NewsCard cardData={props.cardsData.data1}/>
               <NewsCard cardData={props.cardsData.data2}/>
               <NewsCard cardData={props.cardsData.data3}/>
            </div>
         </div>
      </section>
   );
}

export default FeaturedNewsWrap;