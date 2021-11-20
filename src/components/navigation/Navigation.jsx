import s from './NavItem.module.css';
import NavItem from './nav-item/NavItem.jsx';

function Navigation() {
   return (      
      <nav>
         <div className={s.navwrap}>
            <ul className={s.navList}>
               <li><NavItem /></li>
               <li><NavItem /></li>
               <li><NavItem /></li>
               <li><NavItem /></li>
               <li><NavItem /></li>
               <li><NavItem /></li>
            </ul>
            <NavItem />
         </div>
      </nav>
   );
}

export default Navigation;