import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    MDBDropdown, 
    MDBDropdownItem, 
    MDBDropdownMenu, 
    MDBDropdownToggle,
    MDBNavLink
} from 'mdbreact';

import { removeUserData } from '../../redux/actions';

const NavBarProfile = () => {

    const userData = useSelector(state => state.userData);
    const dispatch = useDispatch();
    const avatarImage = `https://cdn.discordapp.com/avatars/${userData.discord_id}/${userData.avatar}.png`;
    const [logoutRedirect, setLogoutRedirect] = useState(false);

    useEffect(() => {
        if(logoutRedirect === true) return dispatch(removeUserData());
    });
    const handleLogout = () => setLogoutRedirect(true);

    return(
        <div id="NavBarProfile">
        <MDBDropdown>
        <MDBDropdownItem>
            <MDBDropdownToggle className="dropdown-toggle">
                <img className="user-avatar rounded-circle img-fluid" src={avatarImage} alt="User Avatar" />
            </MDBDropdownToggle>
            <MDBDropdownMenu className="dropdown-menu">
            <MDBDropdownItem className="username-display">
            <h6 className="f-600">{userData.username} #{userData.discriminator}</h6>
            </MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBNavLink to="/profile">
                <MDBDropdownItem>
                    <FontAwesomeIcon className="mr-2" icon="user-alt" />
                    <span>Profile</span>
                </MDBDropdownItem>
            </MDBNavLink>
            <MDBNavLink to="/account/settings">
                <MDBDropdownItem>
                    <FontAwesomeIcon className="mr-2" icon="cogs" />
                    <span>Settings</span>
                </MDBDropdownItem>
            </MDBNavLink>
            <MDBDropdownItem divider />
            <MDBDropdownItem onClick={() => handleLogout()}>
                <FontAwesomeIcon className="mr-2" icon="sign-out-alt" />
                <span>Logout</span>
            </MDBDropdownItem>
            </MDBDropdownMenu>
        </MDBDropdownItem>
        </MDBDropdown>
        {logoutRedirect ? <Redirect to="/" /> : ''}
        </div>
    );
};

export default NavBarProfile;