import './App.css';
import Header from './components/header/Header.jsx';
import ChannelsNewsWrap from './components/channels-news-wrap/ChannelsNewsWrap.jsx';
import HeadlinesWrap from './components/headlines-wrap/HeadlinesWrap.jsx';
import FeaturedNewsWrap from "./components/featured-news-wrap/FeaturedNewsWrap.jsx";

function App() {
  return (
     <div className="container">
        <div className="App">
            <header className="header">
               <Header/>
            </header>
            <aside className="sidebar"></aside>
            <main className="main">
               <section className="channels-news">
                  <h2 className="block-title">Explore Channels</h2> 
                  <ChannelsNewsWrap/>
               </section>
               <section className="headlines">
                  <h2 className="block-title">Today’s Headlines</h2> 
                  <HeadlinesWrap/>
               </section>
               <section className="featured-news">
               <h2 className="block-title">Featured News</h2> 
               <FeaturedNewsWrap/>
               </section>         
            </main>     
         </div>    
      </div>
    
  );
}

export default App;
