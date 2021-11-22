import s from './Banner.module.css'

import icon from './../../assets/images/banner/close.svg';
import arrowBtn from './../../assets/images/banner/arrow-right.svg';


function Banner(props) {
   return (
      <div className={s.wrapper}>
         <div className={s.banner}>
            <button className={s.closeBtn}><img className={s.closeBtn} src={icon} alt="close" /></button>
            <img className={s.imgOffer} src={props.bannerData.img} alt="img" />
            <p className={s.offer}>{props.bannerData.offer}<span className={s.price}>{props.bannerData.price}</span></p>
            <p className={s.limitation}>{props.bannerData.limitation}</p>
            <button className={s.button}><span className={s.label}>{props.bannerData.label}</span><img className={s.arrowBtn} src={arrowBtn} alt="img" /></button>
         </div>
      </div>
   );
}

export default Banner;