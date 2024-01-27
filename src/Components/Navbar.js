import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext';
import { useThemeContext } from '../hooks/useThemeContext';

//css
import styles from './Navbar.module.css'


export default function Navbar() {
    const { logout } = useLogout()
    const { user } = useAuthContext()
    const { color,changeColour } = useThemeContext()
    return (
        <nav  className={styles.navbar} style={{background:color}}>
            <ul>
                <li className={styles.title}> myMoney</li>

                {!user && (
                    <>
                        <li><Link to='/Login'>Login</Link></li>
                        <li><Link to='/Signup'>Signup</Link></li>
                    </>
                )}
                {user && (
                    <>
                        <li>hello , {user.displayName} </li>
                        <li>
                            <button className='btn' onClick={logout}  >Logout</button>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}
