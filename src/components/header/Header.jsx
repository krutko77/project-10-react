import s from './Header.module.css';
import HeaderMenuItem from './header-menu-item/HeaderMenuItem.jsx';


// картинки для header
import img from './../../assets/images/Image-header.png';
import img1 from './../../assets/images/location-Icon.png';
import img2 from './../../assets/images/analysis-icon.png';
import img3 from './../../assets/images/calendar-icon.png';

function Header(props) {
   return (
      <header className={s.header}>
         <div className={s.container}>
            <div className={s.wrap}>
               <ul className={s.headerMenu}>
                  <li className={s.listItem}><HeaderMenuItem img={img1} itemLabel={props.headerData.label1} /></li>
                  <li className={s.listItem}><HeaderMenuItem img={img2} itemLabel={props.headerData.label2} /></li>
                  <li className={s.listItem}><HeaderMenuItem img={img3} itemLabel={props.headerData.label3} /></li>
               </ul>
               <div className={s.rightBlock}>
                  <form className={s.headerForm} action="#">
                     <input className={s.formInput} placeholder="Search for anything…" type="text" />
                     <button className={s.formButton} type="submit"></button>
                  </form>
                  <img src={img} alt="img" />
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header;