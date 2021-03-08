import React, { useState } from 'react';
import {
    MDBContainer as Container,
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavItem,
    MDBNavLink,
    MDBBtn
} from 'mdbreact';

import env from '../../env';

function NavBar() {

    const [collapse, setCollapse] = useState(false);

    return(
        <div>
        <header>
            <MDBNavbar color="black" fixed="top" dark expand="md">
            <Container>
                <MDBNavbarBrand href="/">
                <strong>Discord Mentorship</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={() => setCollapse(!collapse)} />
                <MDBCollapse isOpen={collapse} navbar>
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
        </header>
    </div>
    );
};

export default NavBar;