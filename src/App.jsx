import React, { useState, useEffect } from "react";
import { translations } from "./data/translations";
import { getStoredValue, setStoredValue } from "./utils/storage";

// Components
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import Footer from "./components/Footer";

// Sections
import HeroSection from "./components/sections/HeroSection";
import ClubSection from "./components/sections/ClubSection";
import ScheduleSection from "./components/sections/ScheduleSection";
import LinksSection from "./components/sections/LinksSection";
import StoreSection from "./components/sections/StoreSection";
import PrivateZoneSection from "./components/sections/PrivateZoneSection";
import SocialSection from "./components/sections/SocialSection";
import CalendarSection from "./components/sections/CalendarSection";
import ContactSection from "./components/sections/ContactSection";
import LegalSection from "./components/sections/LegalSection";
import AllNewsSection from "./components/sections/AllNewsSection";

const App = () => {
  // Estados con persistencia en localStorage
  const [activeSection, setActiveSection] = useState(() =>
    getStoredValue("astola_activeSection", "hasiera")
  );
  const [language, setLanguage] = useState(() =>
    getStoredValue("astola_language", "eu")
  );
  // eslint-disable-next-line no-unused-vars
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [socialMediaTab, setSocialMediaTab] = useState(() =>
    getStoredValue("astola_socialMediaTab", "instagram")
  );
  const [selectedNews, setSelectedNews] = useState(null);

  // Guardar estados en localStorage cuando cambien
  useEffect(() => {
    setStoredValue("astola_activeSection", activeSection);
  }, [activeSection]);
  useEffect(() => {
    setStoredValue("astola_language", language);
  }, [language]);
  useEffect(() => {
    setStoredValue("astola_socialMediaTab", socialMediaTab);
  }, [socialMediaTab]);

  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#00A63E] to-[#008a34]">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isMobileMenuOpen={isMobileMenuOpen}
        language={language}
        setLanguage={setLanguage}
        t={t}
      />

      {isMobileMenuOpen && (
        <MobileMenu
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          t={t}
        />
      )}

      {/* Hero Section - hasiera */}
      {activeSection === "hasiera" && (
        <HeroSection
          t={t}
          language={language}
          setActiveSection={setActiveSection}
          setSocialMediaTab={setSocialMediaTab}
          setSelectedNews={setSelectedNews}
        />
      )}

      {/* Noticias Section (Full Page) */}
      {activeSection === "noticias" && (
        <AllNewsSection
          language={language}
          setActiveSection={setActiveSection}
          selectedNews={selectedNews}
          setSelectedNews={setSelectedNews}
        />
      )}

      {/* Kluba Section */}
      {activeSection === "kluba" && <ClubSection t={t} language={language} />}

      {/* Horarios Section */}
      {activeSection === "horarios" && (
        <ScheduleSection t={t} language={language} />
      )}

      {/* Enlaces de interés Section */}
      {activeSection === "enlaces" && (
        <LinksSection t={t} language={language} />
      )}

      {/* Tienda Section */}
      {activeSection === "tienda" && <StoreSection t={t} language={language} />}

      {/* Zona Privada Section */}
      {activeSection === "zona-privada" && (
        <PrivateZoneSection language={language} />
      )}

      {/* Redes Section */}
      {activeSection === "redes" && (
        <SocialSection
          t={t}
          language={language}
          socialMediaTab={socialMediaTab}
          setSocialMediaTab={setSocialMediaTab}
        />
      )}

      {/* Calendario Section */}
      {activeSection === "calendario" && <CalendarSection language={language} />}

      {/* Contacto Section */}
      {activeSection === "contacto" && (
        <ContactSection t={t} language={language} />
      )}

      {/* Aviso Legal Section */}
      {activeSection === "aviso-legal" && (
        <LegalSection t={t} language={language} />
      )}

      <Footer
        t={t}
        language={language}
        setActiveSection={setActiveSection}
      />
    </div>
  );
};

export default App;
