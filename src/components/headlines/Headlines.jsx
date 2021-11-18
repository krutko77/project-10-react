import s from './Headlines.module.css';
import SectionHeader from './../section-header/SectionHeader.jsx';
import HeadlinesCard from './headlines-card/HeadlinesCard.jsx';



function Headlines(props) {
   return (
      <section className={s.headlines}>
         <div className={s.container}>
            <div>
               <SectionHeader title={"Today’s Headlines"} />
            </div>
            <div className={s.headlinesWrap}>
               <HeadlinesCard cardData={props.cardsData.data1} />
               <HeadlinesCard cardData={props.cardsData.data2} />
               <HeadlinesCard cardData={props.cardsData.data3} />
               <HeadlinesCard cardData={props.cardsData.data4} />
               <HeadlinesCard cardData={props.cardsData.data5} />
               <HeadlinesCard cardData={props.cardsData.data6} />
            </div>
         </div>
      </section>
   );
}

export default Headlines;