import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assiste/sliderFeedback.css';

const Slide = ({ title, text }) => (
  <div className='FBslide-content'>
  <div className="FBslide">
    {text}
    <div className="FBslide-title">
    <h2 >{title}</h2>

    </div>
  </div>

  </div>
);

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    {
      title: "Abdallh",
      text: "Sewar, the brand that’s already found its place in countless homes, is set to captivate the audience at Beauty World. Our dedication revolves around making your home a better place through our range of high-quality home care products, designed to meet the unique needs of your household.",
    },
    {
      title: "Heba",
      text: "Sewar, the brand that’s already found its place in countless homes, is set to captivate the audience at Beauty World. Our dedication revolves around making your home a better place through our range of high-quality home care products, designed to meet the unique needs of your household.",
    },
    {
      title: "Basel",
      text: "Sewar, the brand that’s already found its place in countless homes, is set to captivate the audience at Beauty World. Our dedication revolves around making your home a better place through our range of high-quality home care products, designed to meet the unique needs of your household.",
    },
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <Slide key={index} title={slide.title} text={slide.text} />
      ))}
    </Slider>
  );
};

export default SliderComponent;


