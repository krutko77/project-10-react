import s from './ChannelsNewsWrap.module.css';
import ChannelCard from './../channel-card/ChannelCard';
import logo1 from './../../assets/images/logo-1.png';
import logo2 from './../../assets/images/logo-2.png';
import logo3 from './../../assets/images/logo-3.png';
import logo4 from './../../assets/images/logo-4.png';
import logo5 from './../../assets/images/logo-5.png';
import logo6 from './../../assets/images/logo-6.png';

function ChannelsNewsWrap(props) {
   return (
      <div className={s.channelsNewsWrap}>
      <ChannelCard logo={logo1} label="FOX NEWS"/>
      <ChannelCard logo={logo2} label="CW6 NEWS"/>
      <ChannelCard logo={logo5} label="ABC NEWS"/>
      <ChannelCard logo={logo3} label="AL JAZEERA"/>
      <ChannelCard logo={logo4} label="BBC NEWS"/>
      <ChannelCard logo={logo6} label="CNN NEWS"/>
      </div>     
   );
}

export default ChannelsNewsWrap;