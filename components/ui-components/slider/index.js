import Slider from 'react-slick'
import { ImageWrapper } from '../image-wrapper'
import { mainWrapper, titleWrapper } from './slider.module.css'

export const SliderWrapper = ({ blok }) => {
  let content = null
  if (blok) {
    const { title, elements, speed, slidesToShow } = blok
    const sliderSpeedTime = Number(speed)
    const slidesToShowNumber = Number(slidesToShow)

    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      slidesToShow: slidesToShowNumber,
      slidesToScroll: 1,
      speed: sliderSpeedTime,
      autoplaySpeed: sliderSpeedTime,
      cssEase: 'linear',
    }

    content = (
      <div className={mainWrapper}>
        <div className={titleWrapper}>
          <h3>{title}</h3>
        </div>
        <Slider {...settings}>
          {elements.map(({ filename, alt, id }) => (
            <ImageWrapper
              key={id}
              blok={{ src: { filename, alt } }}
              width={100}
              height={100}
            />
          ))}
        </Slider>
      </div>
    )
  }

  return content
}
