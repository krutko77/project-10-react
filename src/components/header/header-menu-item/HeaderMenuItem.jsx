import s from './HeaderMenuItem.module.css'


function HeaderMenuItem(props) {
   return (
     <div className={s.menuItem}>
        <img className={s.menuImg} src={props.itemData.img} alt="img" />
        <span className={s.menuText}>{props.itemData.label}</span>
        <div className={s.buttons}>
           <button className={s.buttonUp}></button>
           <button className={s.buttonDown}></button>
        </div>
     </div>
   );
}

export default HeaderMenuItem;