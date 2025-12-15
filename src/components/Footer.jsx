import React from "react";
import logoabadino2 from "../assets/astola_igeriketa_talea_logoabadino-blanco.png";
import { MapPin, Phone, Mail, Instagram, Facebook, Music } from "lucide-react";
import { getClubInfo } from "../data/clubInfo";

const Footer = ({ t, language, setActiveSection }) => {
    const clubInfo = getClubInfo(t);

    return (
        <footer className="bg-gray-900 text-white py-12 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                        <div className="w-12 h-12 flex items-center justify-center">
                            <img
                                src={logoabadino2}
                                alt="Astola I.K.T. Abadiño"
                                className="w-12 h-12 object-contain"
                            />
                        </div>
                        <span className="text-xl font-bold">{clubInfo.name}</span>
                    </div>
                    <p className="text-gray-400 mb-6">{clubInfo.slogan}</p>
                    <div className="flex flex-col sm:flex-row justify-center sm:space-x-6 text-gray-400 mb-6">
                        <div className="flex items-center mb-2 sm:mb-0">
                            <MapPin className="w-4 h-4 mr-1" />
                            <a
                                href="https://www.google.com/maps?q=Piscina+Municipal+de+Abadiño,+Bizkaia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:underline"
                            >
                                {t.address}
                            </a>
                        </div>
                        <div className="flex items-center mb-2 sm:mb-0">
                            <Phone className="w-4 h-4 mr-1" />
                            <a
                                href="tel:+34679636518"
                                className="text-gray-700 hover:underline"
                            >
                                +34 679 636 518
                            </a>
                        </div>
                        <div className="flex items-center">
                            <Mail className="w-4 h-4 mr-1" />
                            <a
                                href="mailto:astolait@gmail.com"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                astolait@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center space-x-6 mb-6">
                        <a
                            href={clubInfo.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                        >
                            <Instagram className="w-5 h-5 mr-1" />
                            @astola.it
                        </a>
                        <a
                            href={clubInfo.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            <Facebook className="w-5 h-5 mr-1" />
                            Facebook
                        </a>
                        <a
                            href={clubInfo.tiktok}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-black hover:text-gray-800 transition-colors"
                        >
                            <Music className="w-5 h-5 mr-1" />
                            TikTok
                        </a>
                    </div>
                    <div className="mb-4">
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveSection("aviso-legal");
                            }}
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            {t.avisoLegal}
                        </a>
                    </div>
                    <div className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Astola I.K.T. Abadiño.{" "}
                        {language === "es"
                            ? "Todos los derechos reservados."
                            : "Eskubide guztiak erreserbaturik."}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
