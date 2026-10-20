import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';

function App() {
  const [activePage, setActivePage] = useState('accueil');
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`min-h-screen flex flex-col bg-[#FCF6F7] text-gray-800 ${isDark ? 'dark bg-gray-900 text-white' : ''}`}>
      <Header 
        activePage={activePage} 
        setActivePage={setActivePage} 
        isDark={isDark} 
        setIsDark={setIsDark} 
      />

      {/* Affichage de la page sélectionnée */}
      {activePage === 'accueil' && <Home setActivePage={setActivePage} />}

      <Footer />
    </div>
  )
}

export default App
