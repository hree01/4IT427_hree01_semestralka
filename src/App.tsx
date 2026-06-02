import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Detail from '@/pages/Detail';
import NotFound from '@/pages/NotFound';
import styles from './App.module.css';

function App() {
  return (
  // BrowserRouter obaluje celou aplikaci a hlídá změny URL v prohlížeči
    <BrowserRouter>
      {/* Použití stylů z CSS modulu */}
      <div className={styles.appContainer}>
        <h1 className={styles.mainTitle}>SpaceX Mise 🚀</h1>
        <hr className={styles.separator} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/launch/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} /> {/* Zachytí všechny neznámé cesty */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;