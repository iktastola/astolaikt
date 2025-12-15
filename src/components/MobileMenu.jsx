import React from "react";
import logoabadino from "../assets/astola_igeriketa_talea_logoabadino.png";
import { mainNavItems, getClubInfo } from "../data/clubInfo";

const MobileMenu = ({
    activeSection,
    setActiveSection,
    setIsMobileMenuOpen,
    t,
}) => {
    const clubInfo = getClubInfo(t);

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b">
            <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 flex items-center justify-center">
                        <img
                            src={logoabadino}
                            alt="Astola I.K.T. Abadiño"
                            className="w-12 h-12 object-contain"
                        />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-gray-900">{clubInfo.name}</h1>
                        <p className="text-sm text-green-600">{clubInfo.slogan}</p>
                    </div>
                </div>
                <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-700 hover:text-[#00A63E]"
                >
                    ✕
                </button>
            </div>
            <div className="px-4 pt-2 pb-3 space-y-1">
                {mainNavItems.map((section) => (
                    <button
                        key={section}
                        onClick={() => {
                            setActiveSection(section);
                            setIsMobileMenuOpen(false);
                        }}
                        className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${activeSection === section
                                ? "text-[#00A63E] bg-green-50"
                                : "text-gray-700 hover:text-[#00A63E] hover:bg-gray-50"
                            }`}
                    >
                        {t[section] || section}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MobileMenu;
