import React from 'react';
import { Link } from 'react-router-dom';
import logos from '../../../images/logos/logo.png';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faCommentAlt, faHome, faPlus, faShoppingCart, faUserPlus, } from '@fortawesome/free-solid-svg-icons';


const SideBar = () => {
    return (
        <section className="sidebar d-flex flex-column col-md-2 pt-4">
            <img className="logo" src={logos} alt=""/>
            <ul className="list-unstyled pt-4">
                <li className="mb-2">
                    <Link to="/" className="text-dark nav-link"> <FontAwesomeIcon className="mr-1 text-dark" icon={faHome} /><span> Home </span></Link>
                </li>
                <li>
                    <Link to="/addOrder" className="text-dark nav-link"><FontAwesomeIcon className="mr-1 text-dark" icon={faShoppingCart} /> <span>Order</span> </Link>
                </li>
                <li>
                    <Link to="/checkProduct" className="text-dark nav-link"><FontAwesomeIcon className="ml-1 mr-2 text-dark" icon={faClipboardList} /><span>Service List</span></Link>
                </li>
                <li>
                    <Link to="/checkCustomer" className="text-dark nav-link"><FontAwesomeIcon className="ml-1 mr-2 text-dark" icon={faClipboardList} /><span>Service List</span></Link>
                </li>
                <li>
                    <Link to="/reviewAService" className="text-dark nav-link"><FontAwesomeIcon className="mr-1 text-dark" icon={faCommentAlt} /> <span>Review</span></Link>
                </li>
                <li>
                    <Link to="/addService" className="text-dark nav-link"><FontAwesomeIcon className="mr-1 text-dark" icon={faPlus} /> <span>Add Service</span></Link>
                </li>
                <li>
                    <Link to="/makeAdmin" className="text-dark nav-link"><FontAwesomeIcon className="mr-1 text-dark" icon={faUserPlus} /> <span>Make Admin</span></Link>
                </li>
            </ul>
        </section>
    );
};

export default SideBar;