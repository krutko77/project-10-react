import s from './ChannelsNews.module.css';
import ChannelCard from './channel-card/ChannelCard';
import SectionTitle from '../section-title/SectionTitle.jsx';

function ChannelsNews(props) {
   return (
      <section className={s.channelsNews}>
         <div>
            <SectionTitle title={"Explore Channels"} />
         </div>
         <div className={s.channelsCards}>
            <ChannelCard channelData={props.channelsData.data1} />
            <ChannelCard channelData={props.channelsData.data2} />
            <ChannelCard channelData={props.channelsData.data3} />
            <ChannelCard channelData={props.channelsData.data4} />
            <ChannelCard channelData={props.channelsData.data5} />
            <ChannelCard channelData={props.channelsData.data6} />
         </div>
      </section>
   );
}

export default ChannelsNews;