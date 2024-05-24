import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Atur kecepatan autoplay di sini (dalam milidetik)
    adaptiveHeight: true, // Tinggi slide menyesuaikan dengan konten di dalamnya
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="https://via.placeholder.com/1920x600" alt="Slide 1" style={{ width: '100%', height: 'auto', maxHeight: '300px', objectFit: 'cover' }} />
      </div>
      <div>
        <img src="https://via.placeholder.com/1920x600" alt="Slide 2" style={{ width: '100%', height: 'auto', maxHeight: '300px', objectFit: 'cover' }} />
      </div>
      <div>
        <img src="https://via.placeholder.com/1920x600" alt="Slide 3" style={{ width: '100%', height: 'auto', maxHeight: '300px', objectFit: 'cover' }} />
      </div>
    </Slider>
  );
};

export default Carousel;
