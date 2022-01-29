import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1>Tik Tuk</h1>
      <div className={styles.navbar}>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
