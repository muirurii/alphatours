import { Navigation, Pagination, A11y, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import PopularCard from './PopularCard';

const Popular = ({places})=>{

  return(
      <div id="popular-section">
        <h1>Popular Destinations</h1>
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination,Autoplay, A11y,EffectFade]}
            spaceBetween={0}
            slidesPerView={1.5}
            navigation
            autoplay={{delay:3000}}
            centeredSlides = {true}
            centerInsufficientSlides = {true}
            onAutoplayResume = {true}
            slidesPerGroupAuto = {true}
            pagination={{ clickable: true }}
            effect = "cube"
            >
                
                {places.map(place=><SwiperSlide className='popular' key={place.id} style={{"backgroundImage":`url(${place.background})`}}>
                    <PopularCard place={place}/>
                </SwiperSlide>)}
        </Swiper>
    </div>
  );
}

export default Popular;