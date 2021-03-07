import '../css/HomePage.css';
import Placeholder from '../sections/PlaceholderTest';

import { 
    MDBContainer as Container, 
    MDBRow as Row,
    MDBCol as Col
} from 'mdbreact';

function HomePage() {
    return(
        <div id="HomePage">
            <Container>
            <Row>
                <Col>
                <h1>HomePage</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                <Placeholder />
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default HomePage;