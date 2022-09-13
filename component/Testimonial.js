import { Col, Container, Image, Row } from "react-bootstrap";
import Slider from "react-slick";
import styles from "../styles/Testimonial.module.css";

const Testimonial = () => {
  const settings = {
    dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2,
  };


  return (
    <Container>
      <Row>
        <h1>Thi s is TEst monial</h1>
        
        <Slider {...settings}>
          <div>
            <img src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract03.jpg" />
          </div>
          <div>
            <img
              src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract03.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract03.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract03.jpg"
              alt=""
            />
          </div>
        </Slider>
       
      </Row>
    </Container>
  );
};

export default Testimonial;
