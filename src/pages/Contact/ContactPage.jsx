import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import GitHubIcon from '../../assets/github.png';
import WhatsappIcon from '../../assets/whatsapp.png';
import LinkedInIcon from '../../assets/linkedin.png';

export default function ContactPage({t}) {
    const [formData, setFormData] = useState({
        nom: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ici on va connecter un service
        console.log("Formulaire envoyé :", formData);
        setSubmitted(true);
        setFormData({ nom: '', email: '', message: '' });
    };

    return (
        <div className="max-w-6xl mx-auto px-6 py-12 flex-1 w-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* CÔTÉ GAUCHE : Coordonnées & Infos */}
        <div className="flex-1 space-y-6 w-full">
            <div>
            <h2 className="font-smile text-4xl text-pink-smile-text-color mb-2">
                {t.title}
            </h2>
            <p className="text-primary-text-color text-sm">
                {t.subtitle}
            </p>
            </div>

            {/* Liste des infos */}
            <div className="space-y-4 pt-2">
            {/* Adresse email */}
            <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center p-2">
                    <Mail size={25} className="text-pink-smile-text-color" />
                </div>
                <div>
                <p className="text-xs font-semibold text-pink-secondary-text-color">{t.email}</p>
                <p className="text-xs text-gray-700 font-medium">isaiajoellenirina@gmail.com</p>
                </div>
            </div>

            {/* Téléphone */}
            <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center p-2">
                    <Phone size={25} className="text-pink-smile-text-color" />
                </div>
                <div>
                <p className="text-xs font-semibold text-pink-secondary-text-color">{t.phone}</p>
                <p className="text-xs text-gray-700 font-medium">+261 38 45 691 73</p>
                </div>
            </div>

            {/* Adresse */}
            <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center p-2">
                    <MapPin size={25} className="text-pink-smile-text-color" />
                </div>
                <div>
                <p className="text-xs font-semibold text-pink-secondary-text-color">{t.location}</p>
                <p className="text-xs text-gray-700 font-medium">Antananarivo, Madagascar</p>
                </div>
            </div>
            </div>

            <div className="pt-2">
            <a
                href="/cv/NIRINA_Isaia_Joelle_CV_french.pdf" 
                download
                className="inline-block bg-pink-button-color text-white font-medium px-6 py-2.5 rounded-full text-sm shadow-md transition-all hover:border hover:border-pink-secondary-text-color hover:bg-white hover:text-pink-secondary-text-color cursor-pink-button-color"
            >
                {t.downloadCV}
            </a>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex space-x-3 pt-2">
                <a href="https://github.com/isaia0510" target="_blank" rel="noopener noreferrer" aria-label="Mon profil GitHub">
                    <img src={GitHubIcon} className="w-8 h-8 flex items-center justify-center transition-all" />
                </a> 
                <a href="https://wa.me/261325886159" target="_blank" rel="noopener noreferrer" aria-label="Mon profil WhatsApp">
                    <img src={WhatsappIcon} className="w-8 h-8 flex items-center justify-center transition-all" />
                </a>
                <a href="https://www.linkedin.com/in/nirina-isaia-joëlle-57b411407?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" aria-label="Mon profil LinkedIn">
                    <img src={LinkedInIcon} className="w-8 h-8 flex items-center justify-center transition-all" />
                </a>
            </div>
        </div>

        {/* CÔTÉ DROIT : Formulaire de contact */}
        <div className="flex-1 w-full max-w-lg">
            <div className="border border-rose-300 rounded-3xl p-8 bg-white shadow-sm">
            {submitted ? (
                <div className="text-center py-8 space-y-3">
                <span className="text-4xl">✨</span>
                <p className="text-brand-rose font-bold text-lg">{t.form.successMsg}</p>
                <p className="text-xs text-gray-600">{t.form.successSub}</p>
                <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs text-brand-rose underline font-semibold"
                >
                    {t.form.sendAnother}
                </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                {/* Champ Nom */}
                <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">{t.form.name}</label>
                    <input
                    type="text"
                    name="nom"
                    required
                    value={formData.nom}
                    onChange={handleChange}
                    placeholder="..."
                    className="w-full border border-rose-200 rounded-2xl px-4 py-2.5 text-xs focus:outline-none focus:border-brand-rose transition-colors"
                    />
                </div>

                {/* Champ Email */}
                <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">{t.form.email}</label>
                    <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="..."
                    className="w-full border border-rose-200 rounded-2xl px-4 py-2.5 text-xs focus:outline-none focus:border-brand-rose transition-colors"
                    />
                </div>

                {/* Champ Message */}
                <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">{t.form.message}</label>
                    <textarea
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="..."
                    className="w-full border border-rose-200 rounded-2xl px-4 py-2.5 text-xs focus:outline-none focus:border-brand-rose transition-colors resize-none"
                    ></textarea>
                </div>

                {/* Bouton Envoyer */}
                <div className="flex justify-center pt-2">
                    <button
                    type="submit"
                    className="bg-pink-button-color text-white font-medium px-6 py-2.5 rounded-full text-sm shadow-md transition-all hover:border hover:border-pink-secondary-text-color hover:bg-white hover:text-pink-secondary-text-color cursor-pink-button-color"
                    >
                    {t.form.send}
                    </button>
                </div>
                </form>
            )}
            </div>
        </div>

        </div>
    );

}