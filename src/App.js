import { BrowserRouter } from 'react-router-dom'; 
import './App.css';
import Header from './components/header/Header.jsx';
import Navigation from './components/navigation/Navigation.jsx';
import Banner from './components/banner/Banner.jsx';
import ChannelsNews from './components/channels-news/ChannelsNews.jsx';
import Headlines from './components/headlines/Headlines.jsx';
import FeaturedNews from "./components/featured-news/FeaturedNews.jsx";

// главный логотип
import logo from './assets/images/logo-main.svg';

// логотипы для секции ChannelsNews
import logo1 from './assets/images/logo-1.png';
import logo2 from './assets/images/logo-2.png';
import logo3 from './assets/images/logo-3.png';
import logo4 from './assets/images/logo-4.png';
import logo5 from './assets/images/logo-5.png';
import logo6 from './assets/images/logo-6.png';

// картинки для секции Headlines
import img1 from './assets/images/img-1.jpg';
import img2 from './assets/images/img-2.jpg';
import img3 from './assets/images/img-3.jpg';
import img4 from './assets/images/img-4.jpg';
import img5 from './assets/images/img-5.jpg';
import img6 from './assets/images/img-6.jpg';

// картинки для секции FeaturedNews
import newsImg1 from './assets/images/image-1.jpg';
import newsImg2 from './assets/images/image-2.jpg';
import newsImg3 from './assets/images/image-3.jpg';

// данные для header
const headerData = {
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

// данные для секции Headlines
const HeadlinesData = {
   data1: {
      title: "Hate speech vs free speech",
      thumbnail: img1,
      label: "BBC NEWS",
      likes: "10.8k",
      dislikes: "1.4k",
      time: "2:00 pm"
   },
   data2: {
      title: "Ontario Liberal leadership",
      thumbnail: img2,
      label: "BBC NEWS",
      likes: "10.8k",
      dislikes: "3.4k",
      time: "4:00 pm"
   },
   data3: {
      title: "Victim of Scarborough",
      thumbnail: img3,
      label: "BBC NEWS",
      likes: "20.8",
      dislikes: "1.1k",
      time: "6:00 pm"
   },
   data4: {
      title: "Mother who left her baby",
      thumbnail: img4,
      label: "ABC NEWS",
      likes: "0",
      dislikes: "20k",
      time: "8:00 pm"
   },
   data5: {
      title: "Mother of Stefanie Rengel",
      thumbnail: img5,
      label: "CW6 NEWS",
      likes: "10.8",
      dislikes: "1.4k",
      time: "10:00 pm"
   },
   data6: {
      title: "World Cup: Popular items",
      thumbnail: img6,
      label: "CNN NEWS",
      likes: "10.8",
      dislikes: "1.4k",
      time: "11:00 pm"
   }
}

// данные для секции FeaturedNews
const FeaturedNewsData = {
   data1: {
      img: newsImg1,
      text: "Travellers to pay more than $2K, Trudeau says",
      label: "FOX NEWS",
      time: "2:00 pm"
   },
   data2: {
      img: newsImg2,
      text: "Myanmar’s military seizes control of country ov  er...",
      label: "CNN NEWS",
      time: "4:00 pm"
   },
   data3: {
      img: newsImg3,
      text: "Pressure builds for Biden to cancel other pipeline...",
      label: "BBC NEWS",
      time: "6:00 pm"
   }
}


function App() {
  return (
   <BrowserRouter>
        <div className="App">
               <Header headerData={headerData}/>
            <aside className="sidebar">
               <img className="logo" src={logo} alt="logo" />
               <Navigation />
               <Banner />
            </aside>
            <main className="main">
               <ChannelsNews channelsData={ChannelsNewsData}/>
               <Headlines cardsData={HeadlinesData} />
               <FeaturedNews cardsData={FeaturedNewsData} />                    
            </main>     
         </div>     
   // </BrowserRouter>    
  );
}

export default App;
