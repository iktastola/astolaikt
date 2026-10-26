import React from "react";
import SEO from "../SEO";
import { HeartHandshake, Building2, Coffee, Hotel, Mail } from "lucide-react";

const patrocinadores = [
    { name: "Asier Morato", icon: HeartHandshake },
    { name: "Abadiño Udala", icon: Building2 },
];

const colaboradores = [
    { name: "Cafes Baque", icon: Coffee },
    { name: "Urkiola Hotela", icon: Hotel },
];

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
                                    <div
                                        key={item.name}
                                        className="bg-white p-6 rounded-lg shadow-md border flex flex-col items-center text-center"
                                    >
                                        {React.createElement(item.icon, {
                                            className:
                                                "w-12 h-12 text-[#00A63E] mb-4",
                                        })}
                                        <h4 className="font-semibold text-gray-900">
                                            {item.name}
                                        </h4>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                                {t.nuestrosColaboradores}
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {colaboradores.map((item) => (
                                    <div
                                        key={item.name}
                                        className="bg-white p-6 rounded-lg shadow-md border flex flex-col items-center text-center"
                                    >
                                        {React.createElement(item.icon, {
                                            className:
                                                "w-12 h-12 text-[#00A63E] mb-4",
                                        })}
                                        <h4 className="font-semibold text-gray-900">
                                            {item.name}
                                        </h4>
                                    </div>
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
