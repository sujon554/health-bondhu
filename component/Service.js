import { Col, Container, Image, Row } from "react-bootstrap";
import styles from "../styles/Service.module.css";

const Service = () => {
    return (
        <Container className={styles.container}>
            <h5 className={styles.service}>Our Service</h5>
            <h1 className={styles.health}>Service For Your Health</h1>
            <Row>
                <Col className={styles.card}>
                    <h6>Cardiology</h6>
                    <Image src="../images/service/" alt=""></Image>
                    <p>Seduahag perspiciati under omnised atused error.</p>
                    <strong>Explore Now</strong>
                </Col>
                <Col className={styles.card}>
                    <h6>Monthly Check Up</h6>
                    <Image src="../images/service/" alt=""></Image>
                    <p>Seduahag perspiciati under omnised atused error.</p>
                    <strong>Explore Now</strong>
                </Col>
                <Col className={styles.card}>
                    <h6>Dental Care</h6>
                    <Image src="../images/service/" alt=""></Image>
                    <p>Seduahag perspiciati under omnised atused error.</p>
                    <strong>Explore Now</strong>
                </Col>
                <Col className={styles.card}>
                    <h6>Opthalmology</h6>
                    <Image src="../images/service/" alt=""></Image>
                    <p>Seduahag perspiciati under omnised atused error.</p>
                    <strong>Explore Now</strong>
                </Col>
            </Row>
        </Container>
    );
}

export default Service;