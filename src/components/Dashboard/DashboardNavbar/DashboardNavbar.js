import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './DashboardNavbar.css';
import logos from '../../../images/logos/logo.png';

const DashboardNavbar = () => {
    const {login} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = login;
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
        <img className="logo mt-2" src={logos} alt=""/>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <Link to="/" class="nav-link"> {loggedInUser.name} </Link>
                </li>
            </ul>
        </div>
        </nav>
    );
};

export default DashboardNavbar;