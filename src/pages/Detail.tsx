import { useParams, Link } from 'react-router-dom';
import { useSpaceX } from '../hooks/useSpaceX';
import { formatDate } from '../utils/helpers';
import styles from './Detail.module.css';

const Detail = () => {
    const { id } = useParams<{ id: string }>();
    const { launches, loading, error } = useSpaceX();

    if (loading) return <p>Načítám...</p>;
    if (error) return <p>Chyba: {error}</p>;

    const launch = launches.find((l) => l.id === id);

    if (!launch) {return (
      <div style={{ textAlign: 'center' }}>
        <p>Mise s tímto ID nebyla nalezena.</p>
        <Link to="/" className={styles.backLink}>Zpět na hlavní stránku</Link>
      </div>
    );}

    return (
        <div className={styles.container}>
            <Link to="/" className={styles.backLink}>Zpět seznam</Link>

            <h2 className={styles.title}>{launch.name}</h2>
            <p><strong>Číslo letu:</strong> #{launch.flight_number}</p>
            <p><strong>Datum startu:</strong> {formatDate(launch.date_utc)}</p>
            <p><strong>Stav mise:</strong> {launch.success ? '🚀 Úspěšný start' : '💥 Mise selhala'}</p>
            
            <div className={styles.detailsContainer}>
                <h3>Detaily mise:</h3>
                <p className={styles.detailsText}>
                    {launch.details || 'Žádné detaily k dispozici.'}
                </p>
            </div>
        </div>
    );
};

export default Detail;
