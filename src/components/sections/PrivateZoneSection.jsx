import React from "react";
import SEO from "../SEO";
import { ShoppingCart } from "lucide-react";

const PrivateZoneSection = ({ language }) => {
    return (
        <>
            <SEO
                title={language === "es" ? "Zona Privada" : "Gune Pribatua"}
                description={
                    language === "es"
                        ? "Acceso privado para nadadores y entrenadores del Club Astola I.K.T."
                        : "Astola I.K.T. klubeko igerilari eta entrenatzaileentzako sarbide pribatua."
                }
            />

            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white bg-opacity-90 rounded-lg p-8 shadow-lg">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
                            {language === "es" ? "Zona Privada" : "Gune Pribatua"}
                        </h2>

                        <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
                            {language === "es"
                                ? "Accede a tu zona privada: resultados, entrenamientos, tiempos y más."
                                : "Sartu zure zona pribatura: emaitzak, entrenamenduak, denborak eta gehiago."}
                        </p>
                        <div className="flex justify-center mb-8">
                            <a
                                href="https://swin-frontend.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center bg-[#00A63E] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#008a34] transition-colors shadow-lg"
                            >
                                <ShoppingCart className="w-5 h-5 mr-2" />
                                {language === "es"
                                    ? "Ir a la zona privada"
                                    : "Joan gune pribatura"}
                            </a>
                        </div>

                        {/* 🔥 IFRAME DE SWIN */}
                        <div className="border rounded-lg overflow-hidden bg-gray-50 h-[700px] shadow-inner">
                            <iframe
                                src="https://swin-frontend.vercel.app/"
                                title="Zona Privada - Swin"
                                className="w-full h-full"
                                style={{ border: "none" }}
                                loading="lazy"
                            />
                        </div>

                        <p className="text-center text-sm text-gray-500 mt-4">
                            {language === "es"
                                ? "Si no se carga correctamente, abre el enlace en otra pestaña."
                                : "Ondo ez bada kargatzen, ireki esteka beste fitxa batean."}
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PrivateZoneSection;
