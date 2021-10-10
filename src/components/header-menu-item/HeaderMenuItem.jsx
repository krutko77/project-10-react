import s from './HeaderMenuItem.module.css'


function HeaderMenuItem(props) {
   return (
     <div className={s.menuItem}>
        <img className={s.imgMenu} src={props.img} alt="img" />
        <span className={s.textMenu}>{props.text}</span>
     </div>
   );
}

export default HeaderMenuItem;