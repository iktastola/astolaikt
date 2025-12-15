import React from "react";
import SEO from "../SEO";
import { getInterestLinks } from "../../data/clubInfo";

const LinksSection = ({ t, language }) => {
    const interestLinks = getInterestLinks(t);

    return (
        <>
            <SEO
                title={language === "es" ? "Enlaces de Interés" : "Interes Estekak"}
                description={
                    language === "es"
                        ? "Federaciones oficiales de natación: Bizkaia, Euskadi, Álava, Gipuzkoa, Navarra y RFEN."
                        : "Igeriketako federazio ofizialak: Bizkaia, Euskadi, Araba, Gipuzkoa, Nafarroa eta RFEN."
                }
            />
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white bg-opacity-90 rounded-lg p-8">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                            {t.interesLinks}
                        </h2>
                        <div className="space-y-6">
                            {interestLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
                                >
                                    <img
                                        src={link.logo}
                                        alt={`${link.name} logo`}
                                        className="w-8 h-8 mr-4 rounded"
                                    />
                                    <span className="text-gray-800 font-medium group-hover:text-[#00A63E]">
                                        {link.name}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LinksSection;
