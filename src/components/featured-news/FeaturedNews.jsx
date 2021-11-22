import s from './FeaturedNews.module.css';
import SectionTitle from '../section-title/SectionTitle.jsx';
import NewsCard from './news-card/NewsCard.jsx';


function FeaturedNews(props) {
   return (
      <section>
         <div>
            <SectionTitle title={"Featured News"} />
         </div>
         <div className={s.FeaturedNews}>
            <NewsCard cardData={props.cardsData.data1} />
            <NewsCard cardData={props.cardsData.data2} />
            <NewsCard cardData={props.cardsData.data3} />
         </div>
      </section>
   );
}

export default FeaturedNews;