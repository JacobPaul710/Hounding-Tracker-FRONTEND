import { Link } from 'react-router-dom';

function Nav () {
    return(
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/minerals'>View Collection</Link>
            <Link to='/new'>Add new mineral</Link>
        </nav>
        
    )
}

export default Nav;