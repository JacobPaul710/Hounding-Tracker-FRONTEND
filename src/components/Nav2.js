import { Link } from 'react-router-dom';
import Header from './Header';

function Nav () {
    return(
        <>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/new'>Add new mineral</Link>
            </nav>
            <Header />
        </>
        
    )
}

export default Nav;