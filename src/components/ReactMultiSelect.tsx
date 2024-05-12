import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const ReactMultiSelect = () => {
  const imgCarousel = [
    {
      src: "/public/group-5@2x.png",
    },
    {
      src: "/public/group-1@2x.png",
    },
    {
      src: "/public/group-4@2x.png",
    },
    {
      src: "/public/group-2@2x.png",
    },
    {
      src: "/public/group-3@2x.png",
    },
    {
      src: "/public/group-5@2x.png",
    },
    {
      src: "/public/group-1@2x.png",
    },
    {
      src: "/public/group-4@2x.png",
    },
    {
      src: "/public/group-2@2x.png",
    },
    {
      src: "/public/group-3@2x.png",
    },
    {
      src: "/public/group-5@2x.png",
    },
    {
      src: "/public/group-1@2x.png",
    },
    {
      src: "/public/group-4@2x.png",
    },
    {
      src: "/public/group-2@2x.png",
    },
    {
      src: "/public/group-3@2x.png",
    },
  ];
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 4,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  };
  return (
    <div className="w-full h-[550px] bg-[#f4edde] flex items-center z-0">
      <div className="w-full h-[409px] ">
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={1000}
          centerMode={false}
          className=""
          containerClass=""
          customTransition="all 5s linear"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
          transitionDuration={1000}
          itemClass="carousel-item-padding-30-px"
        >
          {imgCarousel.map((img) => (
            <div>
              <img
                className=" h-[409px] w-[327px] object-cover"
                loading="lazy"
                alt=""
                src={img.src}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ReactMultiSelect;
