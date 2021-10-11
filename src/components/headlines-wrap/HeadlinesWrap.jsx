import s from './HeadlinesWrap.module.css';
import Headliner from '../headliner/Headliner.jsx';
import img1 from './../../assets/images/img-1.jpg';
import img2 from './../../assets/images/img-2.jpg';
import img3 from './../../assets/images/img-3.jpg';
import img4 from './../../assets/images/img-4.jpg';
import img5 from './../../assets/images/img-5.jpg';
import img6 from './../../assets/images/img-6.jpg';


function HeadlinesWrap(props) {
   return (
      <div className={s.headlinesWrap}>
      <Headliner title="Hate speech vs free speech" thumbnail={img1} label="BBC NEWS" likes="10.8k" dislikes="1.4k" time="2:00 pm"/> 
      <Headliner title="Ontario Liberal leadership"thumbnail={img2} label="BBC NEWS" likes="10.8k" dislikes="3.4k" time="4:00 pm"/> 
      <Headliner title="Victim of Scarborough"thumbnail={img3} label="BBC NEWS" likes="20.8k" dislikes="1.1k" time="6:00 pm"/> 
      <Headliner title="Mother who left her baby"thumbnail={img4} label="ABC NEWS" likes="0" dislikes="20k" time="8:00 pm"/> 
      <Headliner title="Mother of Stefanie Rengel"thumbnail={img5} label="CW6 NEWS" likes="10.8k" dislikes="1.4k" time="10:00 pm"/> 
      <Headliner title="World Cup: Popular items"thumbnail={img6} label="CNN NEWS" likes="10.8k" dislikes="1.4k" time="11:00 pm"/>   
   </div>         
   );
}

export default HeadlinesWrap;