import React from 'react'
import Slider from 'react-slick';

const sliderSetting = {
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true
};

const RenderItem = (props) => {
  const { item } = props;
  return (
    <div>
      <div className="__item">
        <a target="_blank" rel="noopener noreferrer" href={`https://www.instagram.com/p/${item.shortcode}/`}>
          <img src={item.thumbnail_src} alt="" className="img-fluid" />
        </a>
      </div>
    </div>
  );
};

const ImageSlider = (props) => {
  const { data } = props
  const images = data.edge_owner_to_timeline_media.edges.map(item => item.node);
  if (!images.length) {
    return <h4>Profile not public</h4>
  }
  return (
    <div className="slider w-75">
      <h2>Recent Images</h2>
      <div className="row">
        <div className="col-12">
          <Slider {...sliderSetting}>
            {images.map(item => (
              <RenderItem item={item || {}} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default ImageSlider