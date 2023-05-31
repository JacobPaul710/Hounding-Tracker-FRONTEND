import { Link } from 'react-router-dom';
import Header from '../header/Header';

import './nav.css';

function Nav () {
    return(
        <>
            <nav id="nav">
                <Link to='/'><button id="navButton">Home</button></Link>
                <img id="navImg" src="https://i.imgur.com/o91dS7j.png" alt="rock illustration" />
                <Link to='/new'><button id="navButton">Add new mineral</button></Link>
            </nav>
            <Header />
        </>
        
    )
}

export default Nav;