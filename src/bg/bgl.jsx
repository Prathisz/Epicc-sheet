import { Button } from 'bootstrap';
import Carousel from 'react-bootstrap/Carousel';
// import './/Background.css';
import './bgl.css';
import CarouselCaption from 'react-bootstrap/esm/CarouselCaption';

function Bgl() {
  return (
    <Carousel data-bs-theme="dark">
        
<Carousel.Item interval={500}>
    <div className='text1'>
        <img
          className="d-block w-100"
          src='https://media.istockphoto.com/id/860901052/photo/male-student-learning-coding-in-school.jpg?s=612x612&w=0&k=20&c=Pz3HbhmmdDrhQxpr4JsKE8_ytwG114pCpHMfSAZcUn8='
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
          src='https://media.istockphoto.com/id/1254050848/photo/smart-schoolboy-uses-laptop-to-program-software-for-robotics-engineering-class-elementary.jpg?s=612x612&w=0&k=20&c=4imK7-BVxxorFs6EewSJ5Vx-TJ4I5hoEAzw3ORTR_28='
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
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8320sp__Uxx9JEpBOkE93OQu1Bk49JS5Ca_jR3b1fMxvMegSScvEPjVDTrlEeflDWv4&usqp=CAU'
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

export default Bgl;