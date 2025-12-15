import React from "react";
import SEO from "../SEO";
import { ShoppingCart } from "lucide-react";

const StoreSection = ({ t, language }) => {
    return (
        <>
            <SEO
                title={language === "es" ? "Tienda Oficial" : "Denda Ofiziala"}
                description={
                    language === "es"
                        ? "Compra productos oficiales del Club de Natación Astola I.K.T. Abadiño en TeamSignia."
                        : "Erosi Astola I.K.T. Abadiñoko Igeriketa Klubaren produktu ofizialak TeamSignian."
                }
            />
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white bg-opacity-90 rounded-lg p-8">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
                            {t.officialStore}
                        </h2>
                        <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
                            {language === "es"
                                ? "Nuestra tienda oficial está alojada en TeamSignia. Haz clic abajo para acceder."
                                : "Gure denda ofiziala TeamSignian dago. Sartu beheko estekan."}
                        </p>
                        <div className="flex justify-center mb-8">
                            <a
                                href="https://www.teamsignia.com/product-category/astola-ikt/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center bg-[#00A63E] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#008a34] transition-colors shadow-lg"
                            >
                                <ShoppingCart className="w-5 h-5 mr-2" />
                                {language === "es" ? "Ir a la Tienda" : "Joan Dendara"}
                            </a>
                        </div>
                        <div className="border rounded-lg overflow-hidden bg-gray-50 h-[600px]">
                            <iframe
                                src="https://www.teamsignia.com/product-category/astola-ikt/"
                                title="Tienda Astola I.K.T. - TeamSignia"
                                className="w-full h-full"
                                style={{ border: "none" }}
                                loading="lazy"
                            />
                        </div>
                        <p className="text-center text-sm text-gray-500 mt-4">
                            {language === "es"
                                ? "Si no ves la tienda, haz clic en el botón de arriba."
                                : "Denda ez bada ikusten, egin klik goiko botoian."}
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default StoreSection;
