import {Link} from 'react-router-dom';
import './Header.css';
const Header=()=>{
    return(

<div>
            <header className='navbar'>
                <h3>Vivekanand College</h3>
                <nav className='nav'> 
                    <Link className='nav-links' to="/home">Home</Link>
                    <Link className='nav-links' to="/about">About</Link>
                    <Link className='nav-links' to="/courses">Courses</Link>
                    <Link className='nav-links' to="/contact">Contact</Link>
                      
                </nav>
                <button > <Link style={{color:'white',textDecoration:'none'}} to='/admissions'>Apply Now</Link></button>
            </header>

        </div>
    )
}
export default Header;

