import { useState } from 'react';
import { useSpaceX } from '../hooks/useSpaceX';
import { MissionCard } from '../components/MissionCard';
import styles from './Home.module.css'; // Import stylů

const Home = () => {
  const { launches, loading, error } = useSpaceX();
  const [filter, setFilter] = useState<'all' | 'success' | 'failure'>('all');
  const [searchTerm, setSearchTerm] = useState<string>(''); // Stav pro hledání podle názvu mise

  if (loading) return <p>Načítání dat...</p>;
    if (error) return <p>Chyba: {error}</p>;

    // Filtrace a hledání misí
    const filteredLaunches = launches.filter((launch) => {
        const matchesFilter =
            filter === 'all' ||
            (filter === 'success' && launch.success === true) ||
            (filter === 'failure' && launch.success === false);
        const matchesSearch = launch.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div>
            {/* Vyhledávací pole */}
            <div className={styles.searchContainer}>
                <input
                type="text"
                placeholder="Vyhledat misi podle názvu..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
                />
            </div>
            <div className={styles.filterContainer}>
                <button className={`${styles.filterButton} ${filter === 'all' ? styles.filterButtonActive : ''}`} onClick={() => setFilter('all')}>Vše</button>
                <button className={`${styles.filterButton} ${filter === 'success' ? styles.filterButtonActive : ''}`} onClick={() => setFilter('success')}>Úspěšné</button>
                <button className={`${styles.filterButton} ${filter === 'failure' ? styles.filterButtonActive : ''}`} onClick={() => setFilter('failure')}>Neúspěšné</button>
            </div>
            <div>
                {filteredLaunches.length > 0 ? (
                filteredLaunches.map((launch) => (
                    <MissionCard key={launch.id} launch={launch} />
                ))
                ) : (
                <p className={styles.noResults}>Žádné mise neodpovídají výběru.</p>
                )}
            </div>
        </div>
    );
};

export default Home;