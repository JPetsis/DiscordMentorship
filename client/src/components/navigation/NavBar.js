import {
    MDBContainer as Container,
    MDBRow as Row,
    MDBCol as Col,
    MDBAnimation,
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavItem,
    MDBNavLink,
    MDBView,
    MDBMask,
    MDBBtn
} from 'mdbreact';

import env from '../../env';

function NavBar() {

    let state = {
        collapse: false,
        isWideEnough: false
    };

    const onClick = () => {
        state.collapse = !state.collapse;
    };


    return(
        <div>
        <header>
            <MDBNavbar color="black" fixed="top" dark expand="md">
            <Container>
                <MDBNavbarBrand href="/">
                <strong>Discord Mentorship</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={() => onClick()} />
                <MDBCollapse isOpen={state.collapse} navbar>
                <MDBNavbarNav left>
                    <MDBNavItem active>
                    <MDBNavLink to="#">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                    <MDBNavLink to="#">Server</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                    <MDBNavLink to="#">FAQ</MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
                </MDBCollapse>
                <MDBNavbarNav right>
                    <MDBNavItem>
                    <MDBBtn color="elegant" size="sm" as="a" href={`${env.DISCORD_LOGIN_REDIRECT}`}>
                        Login
                    </MDBBtn>
                    </MDBNavItem>
                </MDBNavbarNav>
            </Container>
            </MDBNavbar>
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
        </header>
    </div>
    );
};

export default NavBar;