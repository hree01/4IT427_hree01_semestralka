import { useSpaceX } from './hooks/useSpaceX';

function App() {
  // Zavoláme náš nový hook
  const { launches, loading } = useSpaceX();

  // Vypíšeme data do vývojářské konzole v prohlížeči
  console.log('Načítá se:', loading);
  console.log('Stažené mise ze SpaceX:', launches);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Otestování SpaceX Hooku 🚀</h1>
      {loading ? (
        <p>Stahuji data z vesmíru...</p>
      ) : (
        <p>Data úspěšně stažena! Počet misí: {launches.length}</p>
      )}
    </div>
  );
}

export default App;