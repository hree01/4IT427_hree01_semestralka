import { useState } from 'react';
import { useSpaceX } from '../hooks/useSpaceX';
import { MissionCard } from '../components/MissionCard';
import styles from './Home.module.css'; // Import stylů

const Home = () => {
  const { launches, loading, error } = useSpaceX();
  const [filter, setFilter] = useState<'all' | 'success' | 'failure'>('all');
  const [searchTerm, setSearchTerm] = useState<string>(''); // Stav pro hledání podle názvu mise
  const [currentPage, setCurrentPage] = useState(1); // Stav pro aktuální stránku
  // Výchozí počet položek na stránku bude 5, ale může být upraven podle potřeby
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);

  if (loading) return <p>Načítání dat...</p>;
    if (error) return <p>Chyba: {error}</p>;

    // Výpočty pro statistiky
    const totalMissions = launches.length;
  const successCount = launches.filter(l => l.success === true).length;
  const failureCount = launches.filter(l => l.success === false).length;

    // Filtrace a hledání misí
    const filteredLaunches = [...launches] // Vytvoření kopie pole pro zachování původních dat
    .sort((a, b) => new Date(b.date_utc).getTime() - new Date(a.date_utc).getTime()) // Seřazení podle data (nejdříve nejnovější)
    .filter((launch) => {
        const matchesFilter =
            filter === 'all' ||
            (filter === 'success' && launch.success === true) ||
            (filter === 'failure' && launch.success === false);
        const matchesSearch = launch.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    // Výpočet pro stránkování
    const totalPages = Math.ceil(filteredLaunches.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = filteredLaunches.slice(indexOfFirstItem, indexOfLastItem);

    // Funkce pro změnu filtru
    const handleFilterChange = (newFilter: 'all' | 'success' | 'failure') => {
        setFilter(newFilter);
        setCurrentPage(1); // Resetovat na první stránku při změně filtru
    };

    // Funkce pro změnu vyhledávacího pole
    const handleSearchChange = (value: string) => {
        setSearchTerm(value);
        setCurrentPage(1); // Resetovat na první stránku při změně hledání
    };

    // Funkce pro změnu počtu položek na stránku    
    const handleItemsPerPageChange = (value: number) => {
        setItemsPerPage(value);
        setCurrentPage(1); // Resetovat na první stránku při změně počtu položek
    }

    return (
        <div>
            {/* Vyhledávací pole */}
            <div className={styles.searchContainer}>
                <input
                type="text"
                placeholder="Vyhledat misi podle názvu..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className={styles.searchInput}
                />
            </div>

                {/* Statistiky */}
            <div className={styles.statsContainer}>
                <div className={styles.statBox}>
                <span className={styles.statNumber}>{totalMissions}</span>
                <span className={styles.statLabel}>Celkem misí</span>
                </div>
                <div className={styles.statBox}>
                <span className={styles.statNumber} style={{ color: '#2ecc71' }}>{successCount}</span>
                <span className={styles.statLabel}>Úspěšné</span>
                </div>
                <div className={styles.statBox}>
                <span className={styles.statNumber} style={{ color: '#e74c3c' }}>{failureCount}</span>
                <span className={styles.statLabel}>Neúspěšné</span>
                </div>
            </div>
            <div className={styles.filterContainer}>
                <button className={`${styles.filterButton} ${filter === 'all' ? styles.filterButtonActive : ''}`} onClick={() => handleFilterChange('all')}>Vše</button>
                <button className={`${styles.filterButton} ${filter === 'success' ? styles.filterButtonActive : ''}`} onClick={() => handleFilterChange('success')}>Úspěšné</button>
                <button className={`${styles.filterButton} ${filter === 'failure' ? styles.filterButtonActive : ''}`} onClick={() => handleFilterChange('failure')}>Neúspěšné</button>
            </div>
                {/* Ovládání počtu položek na stránku */}
            <div className={styles.perPageContainer}>
                <label htmlFor="perPageSelect">Položek na stránku:</label>
                <select 
                    id="perPageSelect"
                    value={itemsPerPage}
                    onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
                    className={styles.perPageSelect}
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                </select>
            </div>
            <div>
                {currentItems.length > 0 ? (
                currentItems.map((launch) => (
                    <MissionCard key={launch.id} launch={launch} />
                ))
                ) : (
                <p className={styles.noResults}>Žádné mise neodpovídají výběru.</p>
                )}
            </div>
            {/* Ovládání stránkování */}
            {totalPages > 0 && (
            <div className={styles.paginationContainer}>
            <button 
                className={styles.pageButton} 
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
            >
                ← Předchozí
            </button>
            
            <span className={styles.pageInfo}>
                Strana {currentPage} z {totalPages}
            </span>
            
            <button 
                className={styles.pageButton} 
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
            >
                Následující →
            </button>
            </div>
        )}
        </div>
    );
};

export default Home;