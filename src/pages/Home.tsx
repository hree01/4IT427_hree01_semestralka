import { useState } from 'react';
import { useSpaceX } from '../hooks/useSpaceX';
import { MissionCard } from '../components/MissionCard';
import styles from './Home.module.css'; // Import stylů

const Home = () => {
  const { launches, loading, error } = useSpaceX();
  const [filter, setFilter] = useState<'all' | 'success' | 'failure'>('all');

  if (loading) return <p>Načítání dat...</p>;
    if (error) return <p>Chyba: {error}</p>;

    const filteredLaunches = launches.filter((launch) => {
        if (filter === 'success') return launch.success === true;
        if (filter === 'failure') return launch.success === false;
        return true; // pro 'all' vrací všechny lety
    });

    return (
        <div>
            <div className={styles.filterContainer}>
                <button className={`${styles.filterButton} ${filter === 'all' ? styles.filterButtonActive : ''}`} onClick={() => setFilter('all')}>Vše</button>
                <button className={`${styles.filterButton} ${filter === 'success' ? styles.filterButtonActive : ''}`} onClick={() => setFilter('success')}>Úspěšné</button>
                <button className={`${styles.filterButton} ${filter === 'failure' ? styles.filterButtonActive : ''}`} onClick={() => setFilter('failure')}>Neúspěšné</button>
            </div>
            <div>
                {filteredLaunches.map((launch) => (
                    <MissionCard key={launch.id} launch={launch} />
                ))}
            </div>
        </div>
    );
};

export default Home;