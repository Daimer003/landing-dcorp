import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { ContainerSlider } from "@/styles/smallComponents/slider.styles";

import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface Prop {
    children: React.ReactNode;
}
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const Slider = ({ children }: Prop) => {
    return (
        <ContainerSlider>
            <Swiper
                // install Swiper modules
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        width: 640,
                        slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                        width: 768,
                        slidesPerView: 2,
                    },
                }}
                spaceBetween={20}
                loop={true}
                //className={className}
                navigation
                pagination
                onChange={(swiper) => console.log(swiper)}
                slidesPerView={1}
            >
                {children}
            </Swiper>
        </ContainerSlider>
    );
};

export default Slider;