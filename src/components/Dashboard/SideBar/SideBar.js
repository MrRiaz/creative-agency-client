import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logos from '../../../images/logos/logo.png';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faCommentAlt, faHome, faPlus, faShoppingCart, faUserPlus, } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import { useState } from 'react';
import { useEffect } from 'react';


const SideBar = () => {
    const {login} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = login;
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://evening-sea-61964.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(response => response.json())
        .then(data => setIsAdmin(data))
    }, []);


    return (
        <section className="sidebar d-flex flex-column pt-4">
            <ul className="list-unstyled pt-4">
                <li className="mb-2">
                    <Link to="/" className="text-dark nav-link"> <FontAwesomeIcon className="mr-1 text-dark" icon={faHome} /> <span>Home</span> </Link>
                </li>

                {
                    isAdmin ? <>
                        <li>
                            <Link to="/checkAllOrder" className="text-dark nav-link"><FontAwesomeIcon className="ml-1 mr-2 text-dark" icon={faClipboardList} /><span>Service List</span></Link>
                        </li>
                        <li>
                            <Link to="/addService" className="text-dark nav-link"><FontAwesomeIcon className="mr-1 text-dark" icon={faPlus} /> <span>Add Service</span></Link>
                        </li>
                        <li>
                            <Link to="/makeAdmin" className="text-dark nav-link"><FontAwesomeIcon className="mr-1 text-dark" icon={faUserPlus} /> <span>Make Admin</span></Link>
                        </li>
                    </> : <>
                        <li>
                            <Link to="/addOrder" className="text-dark nav-link"><FontAwesomeIcon className="mr-1 text-dark" icon={faShoppingCart} /> <span>Order</span> </Link>
                        </li>
                        <li>
                            <Link to="/checkProduct" className="text-dark nav-link"><FontAwesomeIcon className="ml-1 mr-2 text-dark" icon={faClipboardList} /><span>Service List</span></Link>
                        </li>
                        <li>
                            <Link to="/reviewAService" className="text-dark nav-link"><FontAwesomeIcon className="mr-1 text-dark" icon={faCommentAlt} /> <span>Review</span></Link>
                        </li>
                    </>
                }
            </ul>
        </section>
    );
};

export default SideBar;