

// SwiperComponent.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

//import "./styles.css";
import {
    Autoplay,
    EffectCoverflow,
    Pagination,
    Navigation,
} from "swiper/modules";

const SwiperComponent = ({pics}) => {
    return (
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            coverflowEffect={{
                rotate: 250,
                stretch: 20,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            /* pagination={{
                clickable: true,
            }} */
            navigation={false}
            modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
            className="mySwiper">
              {pics && pics.length > 0 ? pics.map((pic, index) => (
            <SwiperSlide key={index}>
                <img className="swiper-img" src={pic} alt={`slide ${index + 1}`} />
            </SwiperSlide>
        )) : ( null ) } 
            {/* <SwiperSlide>
                <img src={super6} alt="slide 1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={super7} alt="slide 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={super8} alt="slide 3" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={super9} alt="slide 4" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={super7} alt="slide 5" />
            </SwiperSlide> */}
        </Swiper>
    );
};

export default SwiperComponent;
