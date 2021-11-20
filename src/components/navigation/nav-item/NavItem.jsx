import s from './NavItem.module.css';

import { NavLink } from 'react-router-dom';


function NavItem(props) {
   return (      
      <NavLink className={s.navLink} to="/">
         <img src={props.img} alt="icon" />
         <span>{props.label}</span>
      </NavLink>
   );
}

export default NavItem;