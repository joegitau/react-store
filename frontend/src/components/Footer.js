import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col className="text-center py-2">
                        &copy; 2021. All rights reserved. React Store.
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Footer;