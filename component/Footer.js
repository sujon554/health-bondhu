import { Col, Container, Image, Row } from "react-bootstrap";


const Footer = () => {
    return (
        <Container>
            <Row>
                <Col className="col-md-4">
                    <h1>Doc<span>mic</span></h1>
                    <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee</p>
                    <Image src='/images/Group 31.png' alt="" />
<br></br>
                    <small>Copyright @222 Medicom All Rights Reserved</small>
                </Col>
                <Col className="col-md-2">
                    <h4>Quick Links</h4>
                    <p><a>Our Pricing</a></p>
                    <p><a>Our Gallery</a></p>
                    <p><a>Appointment</a></p>
                    <p><a>Privacy Policy</a></p>
                </Col>
                <Col className="col-md-2">
                   
                <br></br>
                <p><a>Services</a></p>
                <p><a>Our Doctors</a></p>
                <p><a>Our Latest News</a></p>
                <p><a>Careers</a></p>
                <p><a>Contacts Us</a></p>
                </Col>
                <Col className="col-md-4">
                    <h4>Opening Hours</h4>
                    <p><a>Mon- Tue</a>08:00 AM- 05:00 PM</p>
                    <p><a>Wed- Thu</a>09:00 AM- 06:00 PM</p>
                    <p><a>Fri- Sat</a>10:00 AM- 07:00 PM</p>
                    <p><a>Sunday</a>Emergency Only</p>
                    <p><a>Personal</a>Mon- 05:00 PM</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;