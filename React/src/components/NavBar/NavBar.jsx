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
              <img src={MSlogo} alt='MoarSqaure-Logo' height={70}/>
            </Link></li>
              <li><Link to='/posts'>Posts</Link></li>
              <li><Link to='' onClick={handleSignout}>Sign Out</Link></li>
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
