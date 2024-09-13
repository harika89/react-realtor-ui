import { useState } from 'react';
import './slider.scss'

function Slider({images}){
    const [imageIndex, setImageIndex] = useState(null);

    const changeSlide = (direction) => {
        if (direction === "left") {
          if (imageIndex === 0) {
            setImageIndex(images.length - 1);
          } else {
            setImageIndex(imageIndex - 1);
          }
        } else {
          if (imageIndex === images.length - 1) {
            setImageIndex(0);
          } else {
            setImageIndex(imageIndex + 1);
          }
        }
      };
    return(
        <div className='slider'>
            {imageIndex !== null && (
            <div className='fullSlider'>
                <div className='arrow' onClick={()=>changeSlide('left')}>
                    <img src='/arrow.png'></img>
                </div>
                <div className='imgContainer'>
                    <img src={images[imageIndex]}></img>
                </div>
                <div className='arrow'  onClick={()=>changeSlide('right')}>
                    <img src='/arrow.png' className='right'></img>
                </div>
                <div className='close' onClick={()=> setImageIndex(null)}>X</div>
            </div>
            )}
            <div className='bigPicture'>
                <img src={images[0]} alt='' onClick={()=> setImageIndex(0)}></img>
            </div>
            <div className='smallPictures'>
                {images.slice(1).map((image,index) =>(
                    <img src={image} key={index} onClick={()=> setImageIndex(index+1)}></img>
                ))}
            </div>
        </div>
    )
}

export default Slider;