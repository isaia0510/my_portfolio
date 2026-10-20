import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/portfolio_logo.png';
import GitHubIcon from '../assets/github.png';
import WhatsappIcon from '../assets/whatsapp.png';
import LinkedInIcon from '../assets/linkedin.png';

export default function Footer() {
    return(
        <footer className="w-full bg-white border-t border-pink-border-color py-8 px-8 md:px-16 mt-auto">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                 { /* Citation et logo */}
                 <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <p className="text-2xl text-center text-primary-text-color italic">
                        "It always seems <span className="text-pink-secondary-text-color">impossible </span>
                        <br/>until it's <span className="text-pink-secondary-text-color">done</span>."
                    </p>
                    { /* <img src={logo} alt="Logo de mon portfolio" className="h-10 w-auto mt-2"/> */ }
                 </div>

                 { /* Informations de contact */}
                 <div className="space-y-2 text-xs text-primary-text-color">
                    <div className="flex items-center space-x-2">
                        <Mail size={16} className="text-pink-smile-text-color" />
                        <span>isaiajoellenirina@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Phone size={16} className="text-pink-smile-text-color" />
                        <span>+261 38 45 691 73</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <MapPin size={16} className="text-pink-smile-text-color" />
                        <span>Antananarivo, Madagascar</span>
                    </div>
                 </div>

                 { /* Social */}
                 <div className="flex flex-col items-center md:items-end">
                    <span className="text-md text-primary-text-color mb-2">Let's connect</span>
                    <div className="flex space-x-3">
                        <img src={GitHubIcon} className="w-8 h-8 flex items-center justify-center transition-all" />
                        <img src={WhatsappIcon} className="w-8 h-8 flex items-center justify-center transition-all" />
                        <img src={LinkedInIcon} className="w-8 h-8 flex items-center justify-center transition-all" />
                    </div>
                 </div>
            </div>
        </footer>
    );
}