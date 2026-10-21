import AvatarIllustration from "../../assets/accueil.png";
import { useTypewriter } from "../../animation/useTypewriter";

export default function Home({setActivePage, t}) {
    const text = useTypewriter(t.bubble);

    return(
        <section className="flex-1 max-w-6xl w-full mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-12">
             { /* Texte de présentation */}
            <div className="flex-1 space-y-6 text-center md:text-left">
                <h2 className="text-3xl font-smile text-primary-text-color">
                    <span className="text-brand-rose">{t.hello}</span>, <span className="font-smile text-pink-smile-text-color text-4xl">Isaia Joëlle</span>
                </h2>
                
                <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-primary-text-color uppercase">
                    {t.job}
                </h1>

                <p className="text-text-long text-sm md:text-base leading-relaxed max-w-lg">
                    {t.bio}
                </p>

                {/* Boutons d'action */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
                    <button 
                        onClick={() => setActivePage('projets')}
                        className="bg-pink-button-color text-white font-medium px-6 py-2.5 rounded-full text-sm shadow-md transition-all hover:border hover:border-pink-secondary-text-color hover:bg-white hover:text-pink-secondary-text-color cursor-pink-button-color"
                    >
                        {t.myWork}
                    </button>
                
                    <a 
                        href="/cv/NIRINA_Isaia_Joelle_CV_french.pdf" 
                        download
                        className="border border-pink-button-color text-primary-text-color hover:bg-rose-100 hover:border-pink-secondary-text-color font-medium px-6 py-2.5 rounded-full text-sm transition-all"
                    >
                        {t.downloadCV}
                    </a>
                </div>
            </div>

            {/* Illustration & Bulle (Droite) */}
            <div className="flex-1 relative flex justify-center items-center">
                {/* Bulle de dialogue */}
                <div
                    className="
                        absolute -top-4 right-4 md:right-8
                        z-10
                        max-w-72.5 w-max
                        bg-rose-100
                        border border-pink-button-color
                        text-[#484747]
                        font-smile text-lg md:text-xl
                        px-6 py-3
                        rounded-3xl
                        shadow-sm
                        text-center
                        after:content-['']
                        after:absolute
                        after:-bottom-2.25
                        after:right-8
                        after:w-4 after:h-4
                        after:bg-rose-100
                        after:border-r after:border-b
                        after:border-pink-button-color
                        after:rotate-45
                        "
                    >
                    <span className="inline-block min-h-[1.5em]">
                        {text}
                        <span className="ml-0.5 inline-block w-0.5 h-[1em] bg-current align-middle animate-pulse" />
                    </span>
                </div>

                {/* Avatar */}
                <div className="relative">
                    <img 
                        src={AvatarIllustration} 
                        alt="Isaia Joëlle" 
                        className="w-72 md:w-76 object-contain"
                    />
                    <div className="w-full h-1 bg-pink-smile-text-color rounded-full"></div>
                </div>
            </div>
        </section>
    );
}