import s from './NavItem.module.css';

import { NavLink } from 'react-router-dom';


function NavItem(props) {
   return (      
      <NavLink className={s.navLink} to="/">
         <img className={s.icon} src={props.itemData.img} alt="icon" />
         <span className={s.text}>{props.itemData.label}</span>
      </NavLink>
   );
}

export default NavItem;