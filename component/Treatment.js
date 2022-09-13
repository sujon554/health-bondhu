import { Col, Container, Image, Row } from "react-bootstrap";
import styles from "../styles/Treatment.module.css";

const Treatment = () => {
    return (
        <Container>
            <Row>
                <Col className={styles.treatment}>
                    <h5 className={styles.years}>
                    16+ Years Experiences 
                    </h5>
                    <h2>We Are Always ensure Best Medical Treatment For Your Health</h2>
                    <p className="text-justify mt-3">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look lik</p>
                </Col>
                <Col col-md-5>
                    <Image src='/images/treatment.PNG' alt="" />
                </Col>
            </Row>
        </Container>
    );
}

export default Treatment;