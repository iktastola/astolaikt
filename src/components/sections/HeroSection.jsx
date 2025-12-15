import React, { useEffect, useState } from "react";
import SEO from "../SEO";
import piscina from "../../assets/astola_igeriketa_talea_piscina.png";
import { Instagram, Calendar, ArrowRight } from "lucide-react";
import { client } from "../../prismicio";

const HeroSection = ({
    t,
    language,
    setActiveSection,
    setSocialMediaTab,
    setSelectedNews,
}) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLatestNews = async () => {
            try {
                const response = await client.getByType("news", {
                    pageSize: 4,
                    orderings: [
                        {
                            field: "my.news.fecha",
                            direction: "desc",
                        },
                    ],
                });
                setNews(response.results);
            } catch (err) {
                console.error("Error fetching news widget:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchLatestNews();
    }, []);

    return (
        <>
            <SEO
                title={language === "es" ? "Inicio" : "Hasiera"}
                description={t.clubDescription}
            />
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-[85vh] flex flex-col lg:block items-center justify-center overflow-hidden">
                {/* Background Image - Absolute positioned */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={piscina}
                        alt="Piscina Astola"
                        className="w-full h-full object-cover"
                        style={{ objectPosition: "center 58%" }}
                    />
                    {/* No Overlay for maximum brightness as requested */}
                </div>

                {/* Content Container */}
                {/* Content Container - Just for Text now to keep it centered */}
                <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center justify-center text-center lg:block lg:text-center">

                    {/* Centered Welcome Text */}
                    <div className="flex flex-col items-center justify-center lg:h-full lg:pt-12">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg text-white">
                            {t.welcome} <span className="text-[#00A63E]">Astola I.K.T.</span>
                        </h2>
                        <div className="text-lg md:text-xl font-medium mb-8 space-y-4 drop-shadow-md text-white max-w-3xl">
                            {Array.isArray(t.clubDescription) ? (
                                t.clubDescription.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))
                            ) : (
                                <p>{t.clubDescription}</p>
                            )}
                        </div>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <button
                                onClick={() => setActiveSection("kluba")}
                                className="bg-[#00A63E] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#008a34] transition-colors shadow-lg"
                            >
                                {t.knowClub}
                            </button>
                            <button
                                onClick={() => {
                                    setActiveSection("redes");
                                    setSocialMediaTab("instagram");
                                }}
                                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-bold hover:from-purple-700 hover:to-pink-700 transition-colors flex items-center justify-center shadow-lg"
                            >
                                <Instagram className="w-5 h-5 mr-2" />
                                {t.followInstagram}
                            </button>
                        </div>
                    </div>
                </div>

                {/* News Widget - Absolute Right of the SCREEN (outside content container) */}
                <div className="relative z-20 max-w-7xl mx-auto lg:absolute lg:inset-x-0 lg:max-w-none lg:mx-0 w-full pointer-events-none">
                    <div className="pointer-events-auto bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-2xl w-full max-w-md mx-auto mt-12 lg:mt-0 lg:absolute lg:right-0 lg:top-0 lg:w-96 text-left">
                        <div className="flex justify-between items-center mb-3 border-b pb-2">
                            <h3 className="text-lg font-bold text-gray-800">
                                {language === "es" ? "Últimas Noticias" : "Azken Albisteak"}
                            </h3>
                        </div>

                        {loading ? (
                            <div className="flex justify-center py-6">
                                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#00A63E]"></div>
                            </div>
                        ) : news.length > 0 ? (
                            <div className="space-y-3">
                                {news.map((item) => (
                                    <div
                                        key={item.id}
                                        className="group cursor-pointer border-l-4 border-[#00A63E] pl-3 py-1 hover:bg-gray-50 transition-colors"
                                        onClick={() => {
                                            if (setSelectedNews) {
                                                setSelectedNews(item);
                                                setActiveSection("noticias");
                                            }
                                        }}
                                    >
                                        <div className="flex items-center text-xs text-gray-500 mb-0.5">
                                            <Calendar className="w-3 h-3 mr-1" />
                                            {item.data.fecha
                                                ? new Date(item.data.fecha).toLocaleDateString(
                                                    language === "es" ? "es-ES" : "eu-ES"
                                                )
                                                : ""}
                                        </div>
                                        <h4 className="font-semibold text-gray-800 text-sm line-clamp-2 group-hover:text-[#00A63E] transition-colors leading-tight">
                                            {item.data.title?.[0]?.text || "Sin título"}
                                        </h4>
                                    </div>
                                ))}
                                <button
                                    onClick={() => setActiveSection("noticias")}
                                    className="w-full mt-2 flex items-center justify-center text-[#00A63E] font-bold text-sm hover:underline"
                                >
                                    {language === "es"
                                        ? "Ver todas"
                                        : "Ikusi guztiak"}
                                    <ArrowRight className="w-4 h-4 ml-1" />
                                </button>
                            </div>
                        ) : (
                            <p className="text-gray-500 text-center py-2 text-sm">
                                {language === "es"
                                    ? "No hay noticias."
                                    : "Ez dago albisterik."}
                            </p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
