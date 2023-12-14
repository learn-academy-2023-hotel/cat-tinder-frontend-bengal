import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import { NavLink } from "react-router-dom";

const items = [
  {
    src: 'https://wallpapers.com/images/high/black-leopard-0uqui3cc0abidck1.webp',
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src:'https://i.pinimg.com/originals/b4/dc/a8/b4dca84329d115b06cbb430af43983b4.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
  {
    src: 'https://wallpapers.com/images/hd/lion-king-scar-7holp0hqp5bjhbf0.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
  },
  {
    src: 'https://www.giantbomb.com/a/uploads/scale_medium/0/5768/712511-lionooo.jpg',
    altText: 'Slide 4',
    caption: 'Slide 4',
    key: 4,
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlW-6P8e-Ox9rhdkGtzuVQ_1pCSzE6Qr_N0w&usqp=CAU',
    altText: 'Slide 5',
    caption: 'Slide 5',
    key: 5,
  },
  {
    src: 'https://cfm.yidio.com/images/tv/59851/backdrop-640x360.jpg',
    altText: 'Slide 6',
    caption: 'Slide 6',
    key: 6,
  },
];

const Home = (args) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <NavLink to={"/catindex"}>
        <img src={item.src} alt={item.altText} style={{ height: '300px'}} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
        </NavLink>
      </CarouselItem>
      
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
      className="text-center"
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}
export default Home;
