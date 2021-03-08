import '../css/HomePage.css';

import { 
    MDBContainer as Container,
    MDBRow as Row,
    MDBCol as Col,
    MDBAnimation,
    MDBView,
    MDBMask,
    MDBBtn
} from 'mdbreact';

function HomePage() {
    return(
        <div id="HomePage">
            <MDBView src="https://i.imgur.com/ejPCJ3O.jpg">
            <MDBMask overlay="black-strong" className='white-text gradient' />
            <Container
                style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
                className='d-flex justify-content-center white-text align-items-center'
            >
                <Row>
                <Col md='6' className='text-center text-md-left mt-xl-5 mb-5'>
                    <MDBAnimation type='fadeInLeft' delay='.3s'>
                    <h1 className='h1-responsive font-weight-bold mt-sm-5'>
                        Connect with and learn from Mentors!
                    </h1>
                    <hr className='hr-light' />
                    <h6 className='mb-4'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                        veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                        molestiae iste.
                    </h6>
                    <MDBBtn color='white'>Login</MDBBtn>
                    <MDBBtn outline color='white'>
                        Join Our Discord Server
                    </MDBBtn>
                    </MDBAnimation>
                </Col>

                <Col md='6' xl='5' className='mt-xl-5'>
                    <MDBAnimation type='fadeInRight' delay='.3s'>
                    <img
                        src='https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png'
                        alt=''
                        className='img-fluid'
                    />
                    </MDBAnimation>
                </Col>
                </Row>
            </Container>
            </MDBView>
        </div>
    );
};

export default HomePage;