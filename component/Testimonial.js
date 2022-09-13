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
      <Row className="my-5 align-items-center justify-content-center">
        <h5 className={styles.years}>Testimonial</h5>
        <h1 className={styles.say}>What they say?</h1>
        <Slider className="align-items-center justify-content-center" {...settings}>
          <div className="w-50 h-25">
            <Row className="m-5 ">
              <Col className="col-8">
                <h5>David Jeans</h5>
                <h6>Pratient</h6>
                <p>
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industrys standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it is a long established fact that a reader will
                  be distracted by the readable content{" "}
                </p>
              </Col>
              <Col className="col-4">
                <Image src="/images/testi.PNG" alt="" />
              </Col>
            </Row>
          </div>
          <div className="w-50 h-25">
            <Row className="m-5">
              <Col className="col-8">
                <h5>David Jeans</h5>
                <h6>Pratient</h6>
                <p >
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industrys standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it is a long established fact that a reader will
                  be distracted by the readable content{" "}
                </p>
              </Col>
              <Col className="col-4">
                <Image src="/images/testi.PNG" alt="" />
              </Col>
            </Row>
          </div>
          <div className="w-50 h-25">
            <Row className="m-5">
              <Col className="col-8">
                <h5>David Jeans</h5>
                <h6>Pratient</h6>
                <p>
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industrys standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it is a long established fact that a reader will
                  be distracted by the readable content{" "}
                </p>
              </Col>
              <Col className="col-4">
                <Image src="/images/testi.PNG" alt="" />
              </Col>
            </Row>
          </div>
          
        </Slider>
      </Row>
    </Container>
  );
};

export default Testimonial;
