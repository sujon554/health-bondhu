import { Button, Col, Container, Image, Row } from "react-bootstrap";
import styles from "../styles/Header.module.css";

const Health = () => {
  return (
    <Container>
      <Row>
        <Col className="col-6" >
            <h1 className={styles.header}>Your <span className={styles.health}>Health</span> Is Our Top <span className={styles.mic}>Priority</span></h1>
            <p>There are many variations of passages of lpsum <br /> available, but the majority hae suffered.</p>
            <Button className="mt-4">Meet Our Specialist</Button>
            <Row className={styles.counter}>
                <Col>
                    <h4>262k+</h4>
                    <p>Recoverd Patients</p>
                </Col>
                <Col>
                    <h4>96%</h4>
                    <p>Satisfaction Rate</p>
                </Col>
                <Col>
                    <h4>86+</h4>
                    <p>Expert Doctors</p>
                </Col>
            </Row>
        </Col>
        <Col className="col-6">
        <Button className={styles.checked}>Regular Checkup</Button>
            <Image src="/images/pose_2.png" alt="" />
            
        </Col>
      </Row>
    </Container>
  );
};

export default Health;
