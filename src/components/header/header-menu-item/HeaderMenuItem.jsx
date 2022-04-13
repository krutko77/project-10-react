import s from './HeaderMenuItem.module.css'


function HeaderMenuItem(props) {
   return (
     <div className={s.menuItem}>
        <img className={s.menuImg} src={props.img} alt="img" />
        <span className={s.menuText}>{props.itemLabel}</span>
        <div className={s.buttons}>
           <button className={s.buttonUp}><svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.825 6L5 2.28841L1.175 6L0 4.85175L5 0L10 4.85175L8.825 6Z" fill="black"/>
</svg></button>
           <button className={s.buttonDown}><svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.175 0L5 3.71159L8.825 0L10 1.14825L5 6L0 1.14825L1.175 0Z" fill="black"/>
</svg></button>
        </div>
     </div>
   );
}

export default HeaderMenuItem;