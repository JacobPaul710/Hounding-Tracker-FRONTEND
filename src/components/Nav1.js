import { Link } from 'react-router-dom';
import Header from './Header';

function Nav () {
    return(
        <>
        <nav>
            <Link to='/minerals'>View Collection</Link>
            <Link to='/new'>Add new mineral</Link>
        </nav>
        <Header />
        </>
        
    )
}

export default Nav;