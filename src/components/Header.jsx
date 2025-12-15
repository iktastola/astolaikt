import React, { useState } from "react";
import logoabadino from "../assets/astola_igeriketa_talea_logoabadino.png";
import { Globe, ChevronDown } from "lucide-react";
import { mainNavItems, getClubInfo } from "../data/clubInfo";

const Header = ({
    activeSection,
    setActiveSection,
    setIsMobileMenuOpen,
    isMobileMenuOpen,
    language,
    setLanguage,

    t,
}) => {
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
    const clubInfo = getClubInfo(t);

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 flex items-center justify-center">
                            <img
                                src={logoabadino}
                                alt="Astola I.K.T. Abadiño"
                                className="w-12 h-12 object-contain"
                            />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900">
                                {clubInfo.name}
                            </h1>
                            <p className="text-sm text-green-600">{clubInfo.slogan}</p>
                        </div>
                    </div>
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-6">
                        {mainNavItems.map((section) => (
                            <button
                                key={section}
                                onClick={() => {
                                    setActiveSection(section);
                                    setIsMobileMenuOpen(false);
                                }}
                                className={`capitalize font-medium transition-colors text-sm ${activeSection === section
                                    ? "text-[#00A63E] border-b-2 border-[#00A63E]"
                                    : "text-gray-700 hover:text-[#00A63E]"
                                    }`}
                            >
                                {t[section] || section}
                            </button>
                        ))}
                    </nav>
                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-gray-700 hover:text-[#00A63E]"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <button
                                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                                className="flex items-center space-x-1 text-gray-700 hover:text-[#00A63E] transition-colors"
                            >
                                <Globe className="w-5 h-5" />
                                <span className="text-sm font-medium">
                                    {language === "es" ? "ES" : "EU"}
                                </span>
                                <ChevronDown className="w-4 h-4" />
                            </button>
                            {isLanguageMenuOpen && (
                                <div className="absolute right-0 mt-2 w-24 bg-white rounded-lg shadow-lg border z-50">
                                    <button
                                        onClick={() => {
                                            setLanguage("es");
                                            setIsLanguageMenuOpen(false);
                                        }}
                                        className={`block w-full px-4 py-2 text-left text-sm ${language === "es" ? "text-[#00A63E] font-medium" : "text-gray-700 hover:bg-gray-100"}`}
                                    >
                                        Español
                                    </button>
                                    <button
                                        onClick={() => {
                                            setLanguage("eu");
                                            setIsLanguageMenuOpen(false);
                                        }}
                                        className={`block w-full px-4 py-2 text-left text-sm ${language === "eu" ? "text-[#00A63E] font-medium" : "text-gray-700 hover:bg-gray-100"}`}
                                    >
                                        Euskera
                                    </button>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
