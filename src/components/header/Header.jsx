import s from './Header.module.css';
import HeaderMenuItem from './header-menu-item/HeaderMenuItem.jsx';

import img from './../../assets/images/Image-header.png';


function Header(props) {
   return (
      <header className={s.header}>
         <ul className={s.headerMenu}>
            <li className={s.listItem}><HeaderMenuItem itemData={props.headerData.data1} /></li>
            <li className={s.listItem}><HeaderMenuItem itemData={props.headerData.data2} /></li>
            <li className={s.listItem}><HeaderMenuItem itemData={props.headerData.data3} /></li>
         </ul>
         <div className={s.rightBlock}>
            <form className={s.headerForm} action="#">
               <input className={s.formInput} placeholder="Search for anything…" type="text" />
               <button className={s.formButton} type="submit"></button>
            </form>
            <img src={img} alt="img" />
         </div>
      </header>
   );
}

export default Header;