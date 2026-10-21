import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import ProjectsPage from './pages/Projet/ProjectsPage';
import ProfilPage from './pages/Profil/ProfilPage';
import ContactPage from './pages/Contact/ContactPage';

function App() {
  const [activePage, setActivePage] = useState('accueil');

  return (
    <div className={`min-h-screen flex flex-col bg-[#FCF6F7] text-gray-800`}>
      <Header 
        activePage={activePage} 
        setActivePage={setActivePage} 
      />

      {/* Affichage de la page sélectionnée */}
      {activePage === 'accueil' && <Home setActivePage={setActivePage} />}
      {activePage === 'projets' && <ProjectsPage />}
      {activePage === 'profil' && <ProfilPage />}
      {activePage === 'contact' && <ContactPage />}

      <Footer />
    </div>
  )
}

export default App
