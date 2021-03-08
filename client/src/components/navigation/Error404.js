import '../css/Error404.css';
import { Link } from 'react-router-dom';
import {
    MDBContainer as Container,
    MDBRow as Row,
    MDBCol as Col,
    MDBBtn,
    MDBView,
    MDBMask
} from 'mdbreact';

const Error404 = () => {
    return(
        <div id="Error404">
            <MDBView src="https://i.imgur.com/PqhOxrR.jpg">
            <MDBMask overlay="black-strong" />
            <Container className="white-text">
            <Row>
                <Col>
                    <h1 className="main-text">404</h1>
                </Col>
                <Col>
                    <div style={{ position: "relative", top: "100px" }}>
                    <h1 className="h1" style={{ fontWeight: 600 }}>Oops!</h1>
                    <h2 className="h2">This is awkward...</h2>
                    <h5 className="h5">You've seem to have stumbled into the unknown</h5>
                    <Link to="/">
                        <MDBBtn color="danger" size="lg">Return to Safety!</MDBBtn>
                    </Link>
                    </div>
                </Col>
            </Row>
            </Container>
            </MDBView>
        </div>
    );
};

export default Error404;