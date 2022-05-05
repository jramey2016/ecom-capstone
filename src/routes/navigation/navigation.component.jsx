import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as CLogo} from '../../assets/crown.svg';

import CartIcon from '../../components/cart-icon/cart-icon.components';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import './navigation.styles.scss';

import { UserContext } from '../../context/user.context';
import {signOutUser} from '../../utils/firebase/firebase.utils';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

    return(
      <Fragment>
        <div className = 'navigation'>
          <Link className='logo-container' to='/'>
            <CLogo className='logo'/>
          </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>SHOP</Link>
            {currentUser ? (
              <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>)
              : (<Link className='nav-link' to='/auth'>SIGN IN</Link>
            )}
            <CartIcon />
          </div>
          <CartDropdown />
        </div>
          <Outlet />
      </Fragment>
    );
}

export default Navigation;