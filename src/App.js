import './App.css';
import Header from './components/header/Header.jsx';
import Navigation from './components/navigation/Navigation.jsx';
import Banner from './components/banner/Banner.jsx';
import ChannelsNews from './components/channels-news/ChannelsNews.jsx';
import Headlines from './components/headlines/Headlines.jsx';
import FeaturedNewsWrap from "./components/featured-news-wrap/FeaturedNewsWrap.jsx";


// логотипы для секции ChannelsNews
import logo1 from './assets/images/logo-1.png';
import logo2 from './assets/images/logo-2.png';
import logo3 from './assets/images/logo-3.png';
import logo4 from './assets/images/logo-4.png';
import logo5 from './assets/images/logo-5.png';
import logo6 from './assets/images/logo-6.png';

// данные для header
const headerLabelData = {
      label1: "San Francisco, California",   
      label2: "Analysis",   
      label3: "Monthly"
}

// данные для секции ChannelsNews
const ChannelsNewsData = {
   data1: {
      img: logo1,
      label: "FOX NEWS"
   },
   data2: {
      img: logo2,
      label: "CW6 NEWS"
   },
   data3: {
      img: logo3,
      label: "ABC NEWS"
   },
   data4: {
      img: logo4,
      label: "AL JAZEERA"
   },
   data5: {
      img: logo5,
      label: "BBC NEWS"
   },
   data6: {
      img: logo6,
      label: "CNN NEWS"
   }   
}


function App() {
  return (
        <div className="App">
               <Header headerData={headerLabelData}/>
            <aside className="sidebar">
               <Navigation />
               <Banner />
            </aside>
            <main className="main">
               <ChannelsNews channelsData={ChannelsNewsData}/>
               <Headlines/>
               <section className="featured-news">
               <h2 className="block-title">Featured News</h2> 
               <FeaturedNewsWrap/>
               </section>         
            </main>     
         </div>         
  );
}

export default App;
