import React, { useState } from 'react';
import '../css/NavBarProfile.css'
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
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

import NavBarProfile from '../sections/NavBarProfile';

import env from '../../../env';

const NavBar = () => {

    const [collapse, setCollapse] = useState(false);
    const userData = useSelector(state => state.userData);
    const location = useLocation();

    const renderLoginButton = () => {
        return(
            <MDBBtn color="elegant" size="sm" as="a" href={`${env.DISCORD_LOGIN_REDIRECT}`}>
                Login
            </MDBBtn>
        );
    }

    const renderProfileActions = () => {
        return <NavBarProfile />
    }

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
                    <MDBNavItem active={location.pathname === "/"}>
                    <MDBNavLink to="/">Home</MDBNavLink>
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
                        {!userData ? renderLoginButton() : renderProfileActions()}
                    </MDBNavItem>
                </MDBNavbarNav>
            </Container>
            </MDBNavbar>
        </header>
    </div>
    );
};

export default NavBar;