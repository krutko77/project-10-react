import './App.css';
import Headliner from './components/headliner/Headliner.jsx';
import img1 from './assets/images/img-1.jpg';
import img2 from './assets/images/img-2.jpg';
import img3 from './assets/images/img-3.jpg';
import img4 from './assets/images/img-4.jpg';
import img5 from './assets/images/img-5.jpg';
import img6 from './assets/images/img-6.jpg';
import ChannelCard from './components/channel-card/ChannelCard.jsx';
import logo1 from './assets/images/logo-1.png';
import logo2 from './assets/images/logo-2.png';
import logo3 from './assets/images/logo-3.png';
import logo4 from './assets/images/logo-4.png';
import logo5 from './assets/images/logo-5.png';
import logo6 from './assets/images/logo-6.png';
import NewsCard from './components/news-card/NewsCard.jsx';
import image1 from './assets/images/image-1.jpg';
import image2 from './assets/images/image-2.jpg';
import image3 from './assets/images/image-3.jpg';
import Header from './components/header/Header.jsx';


function App() {
  return (
    <div className="App">
      <header className="header">
         <Header/>
      </header>
      <aside className="sidebar"></aside>
      <main className="main">
         <section className="channel-card">
            <h2 className="block-title">Explore Channels</h2> 
            <div className="wrap-channels">
            <ChannelCard logo={logo1} label="FOX NEWS"/>
            <ChannelCard logo={logo2} label="CW6 NEWS"/>
            <ChannelCard logo={logo5} label="ABC NEWS"/>
            <ChannelCard logo={logo3} label="AL JAZEERA"/>
            <ChannelCard logo={logo4} label="BBC NEWS"/>
            <ChannelCard logo={logo6} label="CNN NEWS"/>
            </div>          
         </section>
         <section className="headliners">
            <h2 className="block-title">Today’s Headlines</h2> 
            <div className="block-content">
               <Headliner title="Hate speech vs free speech" thumbnail={img1} label="BBC NEWS" likes="10.8k" dislikes="1.4k" time="2:00 pm"/> 
               <Headliner title="Ontario Liberal leadership"thumbnail={img2} label="BBC NEWS" likes="10.8k" dislikes="3.4k" time="4:00 pm"/> 
               <Headliner title="Victim of Scarborough"thumbnail={img3} label="BBC NEWS" likes="20.8k" dislikes="1.1k" time="6:00 pm"/> 
               <Headliner title="Mother who left her baby"thumbnail={img4} label="ABC NEWS" likes="0" dislikes="20k" time="8:00 pm"/> 
               <Headliner title="Mother of Stefanie Rengel"thumbnail={img5} label="CW6 NEWS" likes="10.8k" dislikes="1.4k" time="10:00 pm"/> 
               <Headliner title="World Cup: Popular items"thumbnail={img6} label="CNN NEWS" likes="10.8k" dislikes="1.4k" time="11:00 pm"/>   
            </div>    
         </section>
         <section className="news-card">
         <h2 className="block-title">Featured News</h2> 
         <div className="wrap-news">
            <NewsCard image={image1} text="Travellers to pay more than $2K, Trudeau says" label="FOX NEWS" time="2:00 pm"/>
            <NewsCard image={image2} text="Myanmar’s military seizes control of country ov  er..." label="CNN NEWS" time="4:00 pm"/>
            <NewsCard image={image3} text="Pressure builds for Biden to cancel other pipeline..." label="BBC NEWS" time="6:00 pm"/>
         </div>
         </section>         
      </main>     
   </div>    
  );
}

export default App;
