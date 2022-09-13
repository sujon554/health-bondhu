import { Col, Container, Image, Row } from "react-bootstrap";
import styles from "../styles/Treatment.module.css";


const Appointment = () => {
    return (
        <Container>
            <Row className="mt-5">
                <Col className="col-md-5">
                    <Image src="/images/appoitment.PNG" alt="" />
                </Col>
                <Col className="col-md-7">
                    <h5 className={styles.years}>Our Hospital Feature</h5>
                    <h1>Make An Appointment Easy And Fast Services </h1>
                    <Row>
                        <Col className={styles.card}>
                            <h6>24 Hours Doctors Support</h6>
                            <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry </p>
                        </Col>
                        <Col className={styles.card}>
                            <h6>24 Hours Doctors Support</h6>
                            <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={styles.card}>
                            <h6>24 Hours Doctors Support</h6>
                            <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry </p>
                        </Col>
                        <Col className={styles.card}>
                            <h6>24 Hours Doctors Support</h6>
                            <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Appointment;