import s from './TextNews.module.css'

function TextNews(props) {
   return (
      <p className={s.textNews}>{props.text}</p>
   );
}

export default TextNews;