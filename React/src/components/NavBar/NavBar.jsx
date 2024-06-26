import { Link } from 'react-router-dom';
import { AuthedUserContext } from '../../App';
import { useContext } from 'react';
import MSlogo from '../../assets/MS-logo.jpeg';

const NavBar = ({ handleSignout }) => {
  const user = useContext(AuthedUserContext);
  return (
    <>
      {user ? (
        <nav>
            <ul>
            <li><Link to="/">
            <div className='nav-pic'></div>
              <img src={MSlogo} alt='MoarSqaure-Logo' height={70}/>
              <div className='nav-pic'></div>
              <div className='nav-text'>
              Home
              </div>
            </Link></li>
              <li><Link to='/posts'><div className='nav-pic'></div>
              <img src={MSlogo} alt='MoarSqaure-Logo' height={70}/>
              <div className='nav-pic'></div>
              <div className='nav-text'>
              Posts
              </div>
            </Link></li>
              <li><Link to='' onClick={handleSignout}><div className='nav-pic'></div>
              <img src={MSlogo} alt='MoarSqaure-Logo' height={70}/>
              <div className='nav-pic'></div>
              <div className='nav-text'>
              Sign Out
              </div>
            </Link></li>
            </ul>
        </nav>
      ) : (
        <nav>
          <ul>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};
export default NavBar;
