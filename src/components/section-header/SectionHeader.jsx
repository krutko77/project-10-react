import s from './SectionHeader.module.css';
import icon from './../../assets/images/next-Icon.png';



function SectionHeader(props) {
   return (  
      <div className={s.wrap}>
         <h2 className={s.title}>{props.title}</h2>
         <a className={s.link} href="#"><span className={s.linkText}>See all</span><img src={icon} alt="" /></a>
      </div>    
  );   
}

export default SectionHeader;