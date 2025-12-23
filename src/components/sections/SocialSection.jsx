import React from "react";
import SEO from "../SEO";
import { Instagram, Facebook, Music, Camera } from "lucide-react";
import {
    getClubInfo,
    getInstagramCategories,
    instagramCategoryUrls,
} from "../../data/clubInfo";

const SocialSection = ({ t, language, socialMediaTab, setSocialMediaTab }) => {
    const clubInfo = getClubInfo(t);
    const instagramCategories = getInstagramCategories(t);

    return (
        <>
            <SEO
                title={language === "es" ? "Redes Sociales" : "Sare Sozialak"}
                description={
                    language === "es"
                        ? "Síguenos en Instagram, Facebook y TikTok para ver fotos, videos y novedades del Club Astola I.K.T."
                        : "Jarraitu gaitzazu Instagramen, Facebooken eta TikTokean Astola I.K.T. Klubaren argazkiak, bideoak eta berriak ikusteko."
                }
            />
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white bg-opacity-90 rounded-lg p-8">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                {t.redes}
                            </h2>
                            <p className="text-gray-600 mb-6">{t.stayUpdated}</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a
                                    href={clubInfo.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-colors"
                                >
                                    <Instagram className="w-5 h-5 mr-2" />
                                    @astola.ikt
                                </a>
                                <a
                                    href={clubInfo.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                                >
                                    <Facebook className="w-5 h-5 mr-2" />
                                    {language === "es" ? "Facebook" : "Facebook"}
                                </a>
                                <a
                                    href={clubInfo.tiktok}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                                >
                                    <Music className="w-5 h-5 mr-2" />
                                    TikTok
                                </a>
                            </div>
                        </div>
                        {/* Tabs */}
                        <div className="flex justify-center mb-8">
                            <div className="inline-flex bg-gray-100 rounded-lg p-1">
                                <button
                                    onClick={() => setSocialMediaTab("instagram")}
                                    className={`px-6 py-2 rounded-md text-sm font-medium ${socialMediaTab === "instagram"
                                            ? "bg-white text-gray-900 shadow-sm"
                                            : "text-gray-600 hover:text-gray-900"
                                        }`}
                                >
                                    <Instagram className="w-4 h-4 inline mr-1" />
                                    Instagram
                                </button>
                                <button
                                    onClick={() => setSocialMediaTab("facebook")}
                                    className={`px-6 py-2 rounded-md text-sm font-medium ${socialMediaTab === "facebook"
                                            ? "bg-white text-gray-900 shadow-sm"
                                            : "text-gray-600 hover:text-gray-900"
                                        }`}
                                >
                                    <Facebook className="w-4 h-4 inline mr-1" />
                                    Facebook
                                </button>
                                <button
                                    onClick={() => setSocialMediaTab("tiktok")}
                                    className={`px-6 py-2 rounded-md text-sm font-medium ${socialMediaTab === "tiktok"
                                            ? "bg-white text-gray-900 shadow-sm"
                                            : "text-gray-600 hover:text-gray-900"
                                        }`}
                                >
                                    <Music className="w-4 h-4 inline mr-1" />
                                    TikTok
                                </button>
                            </div>
                        </div>
                        {/* Instagram Content */}
                        {socialMediaTab === "instagram" && (
                            <>
                                <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                                    {t.categories}
                                </h3>
                                <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                                    {language === "es"
                                        ? "Explora nuestras categorías en Instagram. Haz clic en cualquier imagen para ir a nuestro perfil y ver los Highlights."
                                        : "Esploratu gure kategoriak Instagramen. Egin klik edozein iruditan gure profilera joateko eta Highlight-ak ikusteko."}
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {instagramCategories.map((category) => (
                                        <a
                                            key={category.id}
                                            href={
                                                instagramCategoryUrls[category.id] || clubInfo.instagram
                                            }
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block relative group cursor-pointer"
                                        >
                                            <img
                                                src={category.image}
                                                alt={category.name}
                                                className="w-full aspect-square object-cover rounded-lg"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 rounded-lg flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 p-4">
                                                <div className="text-white text-center">
                                                    <Camera className="w-8 h-8 mx-auto mb-2" />
                                                    <h4 className="text-lg font-bold mb-1">
                                                        {category.name}
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="absolute bottom-4 left-4 right-4">
                                                <div className="bg-white bg-opacity-90 rounded-lg p-3">
                                                    <h4 className="font-semibold text-gray-900">
                                                        {category.name}
                                                    </h4>
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                                <div className="text-center mt-12">
                                    <a
                                        href={clubInfo.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center bg-[#00A63E] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#008a34] transition-colors"
                                    >
                                        <Instagram className="w-5 h-5 mr-2" />
                                        {t.viewAllPosts}
                                    </a>
                                </div>
                            </>
                        )}
                        {/* Facebook Content */}
                        {socialMediaTab === "facebook" && (
                            <div className="text-center py-12">
                                <Facebook className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {t.followUsFacebook}
                                </h3>
                                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                                    {language === "es"
                                        ? "Síguenos en Facebook para estar al tanto de todas nuestras novedades, eventos y actividades del club."
                                        : "Jarraitu gaitzazu Facebooken klubearen berri guztiak, ekitaldiak eta jarduerak ez galdutzeko."}
                                </p>
                                <a
                                    href={clubInfo.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                                >
                                    <Facebook className="w-5 h-5 mr-2" />
                                    {language === "es" ? "Ir a Facebook" : "Joan Facebookera"}
                                </a>
                            </div>
                        )}
                        {/* TikTok Content */}
                        {socialMediaTab === "tiktok" && (
                            <div className="text-center py-12">
                                <Music className="w-16 h-16 text-black mx-auto mb-6" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {t.followUsTikTok}
                                </h3>
                                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                                    {language === "es"
                                        ? "Síguenos en TikTok para ver nuestros videos más divertidos, entrenamientos y momentos especiales del club."
                                        : "Jarraitu gaitzazu TikTokean klubearen bideo dibertigarrienak, entrenamenduak eta momentu bereziak ikusteko."}
                                </p>
                                <a
                                    href={clubInfo.tiktok}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                                >
                                    <Music className="w-5 h-5 mr-2" />
                                    {language === "es" ? "Ir a TikTok" : "Joan TikTokera"}
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default SocialSection;
