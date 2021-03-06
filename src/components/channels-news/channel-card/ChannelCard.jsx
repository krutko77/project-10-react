import s from './ChannelCard.module.css'

function ChannelCard(props) {
   return (
      <div className={s.channelCard}>
         <div className={s.wrapImg}>
            <img className={s.logoImg} src={props.channelData.img} alt="logo" />
         </div>
         <span className={s.label}>{props.channelData.label}</span>
      </div>
   );
}

export default ChannelCard;