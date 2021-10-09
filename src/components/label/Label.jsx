import s from './Label.module.css'

function Label(props) {
   return (
      <span className={s.label}>{props.label}</span>
   );
}

export default Label;