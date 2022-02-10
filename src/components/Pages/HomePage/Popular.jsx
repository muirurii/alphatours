import { Navigation, Pagination, Autoplay } from 'swiper';
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
            modules={[Navigation, Pagination,Autoplay]}
            navigation
            autoplay={{delay:3000}}
            breakpoints = {
              {
              // when window width is >= 480px
              480: {
                slidesPerView: 1,
                spaceBetween: 5
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              980: {
                slidesPerView: 3,
                spaceBetween: 30
              }
            }
            }
            onAutoplayResume = {true}
            pagination={{ clickable: true }}
            >
              {places.slice(0,5).map(place=>(
               <SwiperSlide className='popular' key={place.id} style={{"backgroundImage":`url(${place.background})`}}>
                  <PopularCard place={place}/>
                </SwiperSlide>))
              }
        </Swiper>
    </div>
  );
}

export default Popular;