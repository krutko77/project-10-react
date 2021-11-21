import s from './NavItem.module.css';

import { NavLink } from 'react-router-dom';
import icon from './../../../assets/images/navigation/sprite.svg';

function NavItem(props) {
   return (
      <NavLink className={s.navLink} to="/">
         <svg className={s.iconSvg} width="24" height="24" viewBox="0 0 24 24" fill="#878787">
            <use href={icon + `#${props.itemData.name}`}/>
         </svg>
         <span className={s.text}>{props.itemData.label}</span>
         <span className={s.counter} style={props.itemData.style}>{props.itemData.counter}</span>
      </NavLink>
   );
}

export default NavItem;