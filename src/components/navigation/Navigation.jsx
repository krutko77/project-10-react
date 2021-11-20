import s from './Navigation.module.css';
import NavItem from './nav-item/NavItem.jsx';

// иконки для кнопок навигации
import icon1 from './../../assets/images/navigation/home-icon.svg';
import icon2 from './../../assets/images/navigation/explore-icon.svg';
import icon3 from './../../assets/images/navigation/saved-icon.svg';
import icon4 from './../../assets/images/navigation/subscriptions-icon.svg';
import icon5 from './../../assets/images/navigation/messages-icon.svg';
import icon6 from './../../assets/images/navigation/settings-icon.svg';
import icon7 from './../../assets/images/navigation/logout-icon.svg';

// данные для элементов навигиции
const data1 = {
   img: icon1,
   label: "Home"
}
const data2 = {
   img: icon2,
   label: "Explore"
}
const data3 = {
   img: icon3,
   label: "Saved"
}
const data4 = {
   img: icon4,
   label: "Subscriptions"
}
const data5 = {
   img: icon5,
   label: "Messages"
}
const data6 = {
   img: icon6,
   label: "Settings"
}
const data7 = {
   img: icon7,
   label: "Logout"
}


function Navigation() {
   return (
      <nav>
         <div className={s.navWrap}>
            <ul className={s.navList}>
               <li className={s.listItem}><NavItem itemData={data1} /></li>
               <li className={s.listItem}><NavItem itemData={data2} /></li>
               <li className={s.listItem}><NavItem itemData={data3} /></li>
               <li className={s.listItem}><NavItem itemData={data4} /></li>
               <li className={s.listItem}><NavItem itemData={data5} /></li>
               <li className={s.listItem}><NavItem itemData={data6} /></li>
            </ul>
            <div className={s.button}>
               <NavItem className={s.listItem} itemData={data7} />
            </div>
         </div>
      </nav>
   );
}

export default Navigation;