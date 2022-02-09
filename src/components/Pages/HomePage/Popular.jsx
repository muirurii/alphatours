import { Navigation, Pagination, A11y, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import PopularCard from './PopularCard';
import { useState,useEffect } from 'react';


const Popular = ({places})=>{
  const[slides,setSlides] = useState(1.5);

  useEffect(()=>{
    const width = window.innerWidth;
      setSlides(width < 550 ? .8 : 1.5 );
  },[]);

  return(
      <div id="popular-section">
        <h1>Popular Destinations</h1>
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination,Autoplay, A11y,EffectFade]}
            spaceBetween={0}
            slidesPerView={slides}
            navigation
            autoplay={{delay:3000}}
            // centeredSlides = {true}
            centerInsufficientSlides = {true}
            onAutoplayResume = {true}
            slidesPerGroupAuto = {true}
            pagination={{ clickable: true }}
            effect = "cube"
            >
                
                {places.slice(0,5).map(place=><SwiperSlide className='popular' key={place.id} style={{"backgroundImage":`url(${place.background})`}}>
                    <PopularCard place={place}/>
                </SwiperSlide>)}
        </Swiper>
    </div>
  );
}

export default Popular;