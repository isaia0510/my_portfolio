import { Languages } from "lucide-react";
import logo from '../assets/portfolio_logo.png';

export default function Header({ activePage, setActivePage, isEnglish, setIsEnglish, t }) {
    const navItems = [
        { id: 'accueil', label: t.accueil },
        { id: 'projets', label: t.projets },
        { id: 'profil', label: t.profil },
        { id: 'contact', label: t.contact }
    ];

    return (
        <header className="w-full bg-white border-b border-pink-border-color py-4 px-8 sticky top-0 z-50 flex items-center justify-between">
            { /* Logo*/ }
            <div className="flex items-center cursor-not-allowed">
                <img src={logo} alt="Logo de mon portfolio" className="h-10 w-auto"/>
            </div>

            { /* Lien de navigation */ }
            <nav className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActivePage(item.id)}
                        className={`font-medium text-sm tracking-wider transition-all relative py-1 ${
                            activePage === item.id
                                ? 'text-primary-text-color border-b-2 border-pink-secondary-text-color'
                                : 'text-primary-text-color hover:text-pink-secondary-text-color'
                            }`}
                    >
                        {item.label}
                    </button>
                ))}
            </nav>

            { /* Bouton recruter + mode */}
            <div className="flex items-center space-x-4">
                <button
                    onClick={() => setActivePage('contact')}
                    className="bg-pink-button-color text-text-button-color font-medium px-5 py-2 rounded-full text-xs tracking-wider uppercase shadow-sm transition-all hover:bg-rose-50 hover:border hover:border-pink-secondary-text-color hover:text-pink-secondary-text-color cursor-pointer"
                >
                    {t.recruter}
                </button>

                <button
                    onClick={() => setIsEnglish(!isEnglish)}
                    className="flex items-center gap-1.5 p-2 text-primary-text-color rounded-full transition-colors hover:text-pink-secondary-text-color cursor-pointer"
                    title={isEnglish ? "Passer en français" : "Switch to English"}
                    aria-label={isEnglish ? "Passer en français" : "Switch to English"}
                >
                    <Languages size={20} />
                    <span className="text-xs font-medium tracking-wider">
                        {isEnglish ? "EN" : "FR"}
                    </span>
                </button>
            </div>
        </header>
    );
}
