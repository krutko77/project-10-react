import s from './ChannelsNews.module.css';
import ChannelCard from '../channel-card/ChannelCard';

function ChannelsNews(props) {
   return (
      <section className={s.channelsNews}>
         <h2 className={s.title}>Explore ChannelsExplore Channels</h2>
         <div className={s.channelsNews}>
            <ChannelCard  channelData={props.channelsData.data1}/>
            <ChannelCard  channelData={props.channelsData.data2}/>
            <ChannelCard  channelData={props.channelsData.data3}/>
            <ChannelCard  channelData={props.channelsData.data4}/>
            <ChannelCard  channelData={props.channelsData.data5}/>
            <ChannelCard  channelData={props.channelsData.data6}/>
         </div>
      </section>
   );
}

export default ChannelsNews;