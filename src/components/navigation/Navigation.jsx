import s from './Navigation.module.css';
import NavItem from './nav-item/NavItem.jsx';


// данные для элементов навигиции
const data1 = {
   name: "icon01",
   label: "Home"
}
const data2 = {
   name: "icon02",
   label: "Explore"
}
const data3 = {
   name: "icon03",
   label: "Saved"
}
const data4 = {
   name: "icon04",
   label: "Subscriptions"
}
const data5 = {
   name: "icon05",
   label: "Messages",
   counter: 2,
   style: {
   display: "flex"}
}
const data6 = {
   name: "icon06",
   label: "Settings"
}
const data7 = {
   name: "icon07",
   label: "Logout"
}


function Navigation(props) {
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