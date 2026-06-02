import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>404 - Stránka nenalezena 🛰️</h2>
            <p className={styles.text}>Zřejmě jste si spletli galaxii. Hledaná stránka tady neexistuje.</p>
            <Link to="/" className={styles.link}>Vrátit se na základnu (Domů)</Link>
        </div>
    );
}

export default NotFound;