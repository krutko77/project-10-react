import s from './FeaturedNewsWrap.module.css';
import NewsCard from './../news-card/NewsCard';
import image1 from './../../assets/images/image-1.jpg';
import image2 from './../../assets/images/image-2.jpg';
import image3 from './../../assets/images/image-3.jpg';

function FeaturedNewsWrap(props) {
   return (
      <div className={s.FeaturedNewsWrap}>
      <NewsCard image={image1} text="Travellers to pay more than $2K, Trudeau says" label="FOX NEWS" time="2:00 pm"/>
      <NewsCard image={image2} text="Myanmar’s military seizes control of country ov  er..." label="CNN NEWS" time="4:00 pm"/>
      <NewsCard image={image3} text="Pressure builds for Biden to cancel other pipeline..." label="BBC NEWS" time="6:00 pm"/>
   </div>    
   );
}

export default FeaturedNewsWrap;