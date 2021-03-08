import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addUserData } from '../../redux/actions';
import loginServices from '../../services/loginServices';

const Login = () => {

    const userData = useSelector(state => state.userData);
    const dispatch = useDispatch();
    const [fireRedirect, setFireRedirect] = useState(false);

    useEffect(() => {
        if(window.location.search && !userData) {
            let code = window.location.search.split("code=")[1];

            loginServices.login(code)
            .then(results => {
                dispatch(addUserData(results.data.data));
                setFireRedirect(true);
            })
            .catch(err => console.error(err)); // Update this to use MDB Toast so Users can know about failed logins
        }
    });

    return (
        <div>
        {fireRedirect ? <Redirect to="/test" /> : ""}
        </div>
    );
};

export default Login;