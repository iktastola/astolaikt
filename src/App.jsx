import React, { useState, useEffect, lazy, Suspense } from "react";
import { translations } from "./data/translations";
import { getStoredValue, setStoredValue } from "./utils/storage";
import { client } from "./prismicio";

// Components
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";

// Sections (lazy: se cargan solo cuando se navega a ellas)
const HeroSection = lazy(() => import("./components/sections/HeroSection"));
const ClubSection = lazy(() => import("./components/sections/ClubSection"));
const ScheduleSection = lazy(() => import("./components/sections/ScheduleSection"));
const LinksSection = lazy(() => import("./components/sections/LinksSection"));
const StoreSection = lazy(() => import("./components/sections/StoreSection"));
const PrivateZoneSection = lazy(() => import("./components/sections/PrivateZoneSection"));
const SocialSection = lazy(() => import("./components/sections/SocialSection"));
const CalendarSection = lazy(() => import("./components/sections/CalendarSection"));
const ContactSection = lazy(() => import("./components/sections/ContactSection"));
const LegalSection = lazy(() => import("./components/sections/LegalSection"));
const AllNewsSection = lazy(() => import("./components/sections/AllNewsSection"));

const App = () => {
  // Estados con persistencia en localStorage
  const [activeSection, setActiveSection] = useState(() =>
    getStoredValue("astola_activeSection", "hasiera")
  );
  const [language, setLanguage] = useState(() =>
    getStoredValue("astola_language", "eu")
  );
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

  // El atributo lang del <html> debe reflejar el idioma activo (es/eu)
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Ruta /sorteo -> abre la noticia concreta de Prismic
  useEffect(() => {
    if (window.location.pathname.replace(/\/+$/, "") === "/sorteo") {
      (async () => {
        try {
          const doc = await client.getByUID(
            "news",
            "4e472f47-037d-49e1-aa96-77805a3faea3"
          );
          setSelectedNews(doc);
          setActiveSection("noticias");
        } catch (e) {
          console.error("No se pudo cargar la noticia /sorteo", e);
        }
      })();
    }
  }, []);

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

      {/* Secciones (lazy-loaded con Suspense) */}
      <Suspense
        fallback={
          <div className="min-h-[60vh] flex items-center justify-center text-white text-lg animate-pulse">
            Cargando...
          </div>
        }
      >
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
        {activeSection === "zonaPrivada" && (
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
      </Suspense>

      <Footer
        t={t}
        language={language}
        setActiveSection={setActiveSection}
      />

      {/* Widget flotante de WhatsApp */}
      <WhatsAppWidget t={t} />
    </div>
  );
};

export default App;
