import { Button } from 'bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './Intro.css';
import CarouselCaption from 'react-bootstrap/esm/CarouselCaption';

function Background() {
  return (
    <Carousel data-bs-theme="dark">
        
<Carousel.Item interval={500}>
    <div className='text1'>
        <img
          className="d-block w-100"
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDV_3A-7ycazu1WtzDiNN0prWNqA9Olhle05U_NTV_SA&s'
          alt="First slide"
        /><div className='text2'>
        <button class="BtnHot">
         Shop Now
       </button> </div>
        </div>
</Carousel.Item>
    
<Carousel.Item interval={1000}>
  <div className='text3'>
        <img
          className="d-block w-100"
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn3Cl04p9-bSHVt7aAo6QG6iqyBJmuloQAMzthrHxRGbBpdi4cztgsxRVkxeWgARskoTo&usqp=CAU'
          alt="Second slide"
        />
        <div className='text4'>
 <button class="BtnHot">
         Shop Now
       </button></div>
</div>
</Carousel.Item>
      
      <Carousel.Item interval={1000}>
        <div className='text5'>
        <img
          className="d-block w-100"
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShLh-8yzYGYKm5RBkl1FS1n1GUZ8hG9hZKWu4dDUc1VzxRC2z1AEkxDb85tOfmllP3lL8&usqp=CAU'
          alt="Third slide"
        /><div className='text6'>
 <button class="BtnHot">
         Shop Now
       </button></div>
</div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Background;