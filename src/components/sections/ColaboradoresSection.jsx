import React from "react";
import SEO from "../SEO";
import { Mail } from "lucide-react";
import moratoLogo from "../../assets/astola_igeriketa_talea_asier_morato_logo.jpeg";
import cafebaqueLogo from "../../assets/astola_igeriketa_talea_cafes_baque_logo.png";
import urkiolaLogo from "../../assets/astola_igeriketa_talea_urkiola_hotela_logo.jpg";
import abadinoLogo from "../../assets/astola_igeriketa_talea_abadino_udala_logo.gif";

const patrocinadores = [
    {
        name: "Asier Morato",
        logo: moratoLogo,
        url: "https://fontaneriaasiermorato.com/",
    },
    {
        name: "Abadiño Udala",
        logo: abadinoLogo,
        url: "https://www.xn--abadio-0wa.org/",
    },
];

const colaboradores = [
    {
        name: "Café Baqué",
        logo: cafebaqueLogo,
        url: "https://www.baque.com/",
    },
    {
        name: "Urkiola Hotela",
        logo: urkiolaLogo,
        url: "https://www.urkiola.eus/",
    },
];

const ColaboradorCard = ({ item }) => {
    const cardClassName =
        "bg-white p-6 rounded-lg shadow-md border flex flex-col items-center text-center transition-shadow";
    const content = (
        <>
            <div className="h-24 flex items-center justify-center mb-4">
                <img
                    src={item.logo}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    className="max-h-24 max-w-full object-contain"
                />
            </div>
            <h4 className="font-semibold text-gray-900">{item.name}</h4>
        </>
    );

    if (!item.url) {
        return <div className={cardClassName}>{content}</div>;
    }

    return (
        <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${cardClassName} hover:shadow-lg`}
        >
            {content}
        </a>
    );
};

const ColaboradoresSection = ({ t, language }) => {
    return (
        <>
            <SEO
                title={t.colaboradores}
                description={
                    language === "es"
                        ? "Patrocinadores y colaboradores del Club de Natación Astola I.K.T. Abadiño."
                        : "Astola I.K.T. Abadiñoko Igeriketa Klubaren babesleak eta kolaboratzaileak."
                }
            />
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white bg-opacity-90 rounded-lg p-8">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
                            {t.colaboradores}
                        </h2>
                        <p className="text-center text-gray-600 mb-12">
                            {t.colaboradoresIntro}
                        </p>

                        <div className="mb-12">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                                {t.patrocinadores}
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {patrocinadores.map((item) => (
                                    <ColaboradorCard key={item.name} item={item} />
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                                {t.nuestrosColaboradores}
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {colaboradores.map((item) => (
                                    <ColaboradorCard key={item.name} item={item} />
                                ))}
                            </div>
                        </div>

                        <div className="text-center mt-12 pt-8 border-t border-gray-200">
                            <p className="text-gray-600 mb-3">{t.colaboraConNosotros}</p>
                            <a
                                href="mailto:astolait@gmail.com"
                                className="inline-flex items-center text-[#00A63E] font-medium hover:text-[#008a34]"
                            >
                                <Mail className="w-5 h-5 mr-2" />
                                astolait@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ColaboradoresSection;
