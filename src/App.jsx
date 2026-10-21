import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import ProfilPage from './pages/Profil/ProfilPage';
import ProjectPage from './pages/Projet/ProjectsPage';
import ContactPage from './pages/Contact/ContactPage';
import { translations } from './data/translation';

function App() {
  const [activePage, setActivePage] = useState('accueil');
  const [isEnglish, setIsEnglish] = useState(false);

  const lang = isEnglish ? 'EN' : 'FR';
  const t = translations[lang];

  return (
    <div className={`min-h-screen flex flex-col bg-[#FCF6F7] text-gray-800`}>
      <Header 
        activePage={activePage} 
        setActivePage={setActivePage} 
        isEnglish={isEnglish}
        setIsEnglish={setIsEnglish}
        t={t.nav}
      />

      {/* Affichage de la page sélectionnée */}
      {activePage === 'accueil' && <Home setActivePage={setActivePage} t={t.home}/>}
      {activePage === 'projets' && <ProjectPage t={t.projects} isEnglish={isEnglish} />}
      {activePage === 'profil' && <ProfilPage t={t.profile} isEnglish={isEnglish}/>}
      {activePage === 'contact' && <ContactPage t={t.contact}/>}

      <Footer t={t.footer}/>
    </div>
  )
}

export default App
