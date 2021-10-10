import s from './Header.module.css';
import HeaderMenuItem from './../header-menu-item/HeaderMenuItem.jsx';
import img1 from './../../assets/images/location-Icon.png';
import img2 from './../../assets/images/analysis-icon.png';
import img3 from './../../assets/images/calendar-icon.png';
import img4 from './../../assets/images/Image-header.png';


function Header() {
   return (
      <div className={s.headerWrap}>
         <ul className={s.headerMenu}>
            <li><HeaderMenuItem img={img1} text="San Francisco, California"/></li>
            <li><HeaderMenuItem img={img2} text="Analysis"/></li>
            <li><HeaderMenuItem img={img3} text="Monthly"/></li>
         </ul>
         <div className={s.rightBlock}>
            <div className={s.headerForm}>
               <form action="">
                  <input type="text" />
                  <button></button>
               </form>
            </div>
            <img src={img4} alt="img" />
         </div>         
      </div>   
   );
}

export default Header;