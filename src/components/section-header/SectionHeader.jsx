import s from './SectionHeader.module.css';
import icon from './../../assets/images/next-Icon.png';
import { NavLink } from 'react-router-dom';



function SectionHeader(props) {
   return (  
      <div className={s.wrap}>
         <h2 className={s.title}>{props.title}</h2>
         <NavLink className={s.link} to="/"><span className={s.linkText}>See all</span><img src={icon} alt="icon" /></NavLink>
      </div>    
  );   
}

export default SectionHeader;