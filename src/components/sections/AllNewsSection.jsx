import React, { useEffect, useState } from "react";
import { PrismicRichText } from "@prismicio/react";
import { Calendar, ArrowLeft } from "lucide-react";
import { client } from "../../prismicio";

const AllNewsSection = ({
    language,
    setActiveSection,
    selectedNews,
    setSelectedNews,
}) => {
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const docs = await client.getAllByType("news", {
                    orderings: {
                        field: "my.news.fecha",
                        direction: "desc",
                    },
                });
                setDocuments(docs);
            } catch (err) {
                console.error("Error fetching news:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (error) {
        return (
            <div className="text-center py-20 text-red-600">
                Error al cargar noticias.
            </div>
        );
    }

    // DETAII VIEW
    if (selectedNews) {
        return (
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
                <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Back Button */}
                    <div className="p-6 border-b border-gray-100">
                        <button
                            onClick={() => setSelectedNews(null)}
                            className="flex items-center text-gray-600 hover:text-[#00A63E] transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            {language === "es" ? "Volver a noticias" : "Itzuli albisteetara"}
                        </button>
                    </div>

                    {/* Image */}
                    {selectedNews.data.imagen_principal && selectedNews.data.imagen_principal.url && (
                        <div className="w-full flex justify-center bg-gray-50">
                            <img
                                src={selectedNews.data.imagen_principal.url}
                                alt={selectedNews.data.imagen_principal.alt || ""}
                                className="max-w-full h-auto max-h-[85vh] object-contain"
                            />
                        </div>
                    )}

                    {/* Content */}
                    <div className="p-8 md:p-12">
                        <div className="flex items-center text-sm text-gray-500 mb-6">
                            <Calendar className="w-4 h-4 mr-2" />
                            <time>
                                {selectedNews.data.fecha
                                    ? new Date(selectedNews.data.fecha).toLocaleDateString(
                                        language === "es" ? "es-ES" : "eu-ES",
                                        {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        }
                                    )
                                    : ""}
                            </time>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                            {selectedNews.data.title?.[0]?.text || "Sin título"}
                        </h1>

                        <div className="prose prose-lg prose-green max-w-none text-gray-700">
                            {selectedNews.data.contenido &&
                                Array.isArray(selectedNews.data.contenido) &&
                                selectedNews.data.contenido.length > 0 ? (
                                <PrismicRichText field={selectedNews.data.contenido} />
                            ) : (
                                <p className="text-gray-500 italic">
                                    {language === "es"
                                        ? "Esta noticia no tiene contenido adicional."
                                        : "Albiste honek ez du eduki gehigarririk."}
                                </p>
                            )}
                        </div>
                    </div>
                </article>
            </section>
        );
    }

    // LIST VIEW
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center mb-12">
                    <button
                        onClick={() => setActiveSection("hasiera")}
                        className="flex items-center text-gray-600 hover:text-[#00A63E] transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        {language === "es" ? "Volver" : "Itzuli"}
                    </button>
                </div>

                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    {language === "es" ? "Todas las Noticias" : "Albiste Guztiak"}
                </h2>

                {loading ? (
                    <div className="flex justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00A63E]"></div>
                    </div>
                ) : documents.length === 0 ? (
                    <p className="text-center text-gray-500">
                        {language === "es"
                            ? "No hay noticias disponibles."
                            : "Ez dago albisterik eskuragarri."}
                    </p>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {documents.map((doc) => (
                            <article
                                key={doc.id}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100 flex flex-col cursor-pointer"
                                onClick={() => setSelectedNews(doc)}
                            >
                                {doc.data.imagen_principal && doc.data.imagen_principal.url && (
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={doc.data.imagen_principal.url}
                                            alt={doc.data.imagen_principal.alt || ""}
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                )}
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center text-sm text-gray-500 mb-3">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        <time>
                                            {doc.data.fecha
                                                ? new Date(doc.data.fecha).toLocaleDateString(
                                                    language === "es" ? "es-ES" : "eu-ES",
                                                    {
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "numeric",
                                                    }
                                                )
                                                : ""}
                                        </time>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                        {doc.data.title && doc.data.title[0]
                                            ? doc.data.title[0].text
                                            : "Sin título"}
                                    </h3>
                                    <div className="text-gray-600 mb-4 flex-1 line-clamp-3 prose prose-sm prose-green">
                                        {/* Preview Content in Card */}
                                        {doc.data.contenido ? (
                                            <div className="line-clamp-3">
                                                <PrismicRichText field={doc.data.contenido} />
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default AllNewsSection;
