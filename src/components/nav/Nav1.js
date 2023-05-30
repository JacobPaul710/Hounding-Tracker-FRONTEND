import { Link } from 'react-router-dom';
import Header from '../header/Header';

import './nav.css';

function Nav () {
    return(
        <>
        <nav>
            <Link to='/minerals'><button>View Collection</button></Link>
            <img src="https://i.imgur.com/o91dS7j.png" alt="rock illustration" />
            <Link to='/new'><button>Add a New Mineral</button></Link>
        </nav>
        <Header />
        </>
        
    )
}

export default Nav;