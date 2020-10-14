import React from 'react';
import carousel1 from '../../images/carousel-5.png';
import carousel2 from '../../images/carousel-2.png';
import carousel3 from '../../images/carousel-4.png';
import Swiper from 'react-id-swiper';

const SwiperSlider = () => {

    const params = {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }

    return (
        <div className="container p-4">
            <div className="col-md-8">
            <Swiper {...params}>
                <div>
                    <img src={carousel1} alt=""/>
                </div>
                <div>
                <img src={carousel2} alt=""/>
                </div>
                <div>
                <img src={carousel3} alt=""/>
                </div>
                <div>
                <img src={carousel2} alt=""/>
                </div>
                <div>
                <img src={carousel3} alt=""/>
                </div>
            </Swiper>
            </div>
        </div>
    );
};

export default SwiperSlider;