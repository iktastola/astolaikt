import React from "react";
import SEO from "../SEO";
import {
    MapPin,
    Phone,
    Mail,
    Calendar,
    Instagram,
    Facebook,
    Music,
} from "lucide-react";
import { getClubInfo } from "../../data/clubInfo";

const ContactSection = ({ t, language }) => {
    const clubInfo = getClubInfo(t);

    return (
        <>
            <SEO
                title={language === "es" ? "Contacto" : "Kontaktua"}
                description={
                    language === "es"
                        ? "Ponte en contacto con el Club de Natación Astola I.K.T. Abadiño: teléfono, email y dirección en la piscina municipal."
                        : "Jar zaitez harremanetan Astola I.K.T. Abadiñoko Igeriketa Klubarekin: telefonoa, posta elektronikoa eta helbidea."
                }
            />
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white bg-opacity-90 rounded-lg p-8">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                            {t.contact}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                                    {t.contactInfo}
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <MapPin className="w-5 h-5 text-[#00A63E] mr-3" />
                                        <a
                                            href="https://www.google.com/maps/place//data=!4m2!3m1!1s0xd4e2d38af442f49:0x6c99d47732957a95?sa=X&ved=1t:8290&ictx=111"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-700 hover:underline"
                                        >
                                            {t.address}
                                        </a>
                                    </div>
                                    <div className="flex items-center">
                                        <Phone className="w-5 h-5 text-[#00A63E] mr-3" />
                                        <a
                                            href="tel:+34679636518"
                                            className="text-gray-700 hover:underline"
                                        >
                                            +34 679 636 518
                                        </a>
                                    </div>
                                    <div className="flex items-center">
                                        <Mail className="w-5 h-5 text-[#00A63E] mr-3" />
                                        <a
                                            href="mailto:astolait@gmail.com"
                                            className="text-gray-700 hover:underline"
                                        >
                                            astolait@gmail.com
                                        </a>
                                    </div>
                                    <div className="flex items-center">
                                        <Calendar className="w-5 h-5 text-[#00A63E] mr-3" />
                                        <span className="text-gray-700">{t.hours}</span>
                                    </div>
                                    <div className="flex items-center pt-4 border-t border-gray-200">
                                        <Instagram className="w-5 h-5 text-purple-600 mr-3" />
                                        <a
                                            href={clubInfo.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-purple-600 hover:text-purple-700 font-medium"
                                        >
                                            @astola.it
                                        </a>
                                    </div>
                                    <div className="flex items-center">
                                        <Facebook className="w-5 h-5 text-blue-600 mr-3" />
                                        <a
                                            href={clubInfo.facebook}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-700 font-medium"
                                        >
                                            {language === "es" ? "Facebook" : "Facebook"}
                                        </a>
                                    </div>
                                    <div className="flex items-center">
                                        <Music className="w-5 h-5 text-black mr-3" />
                                        <a
                                            href={clubInfo.tiktok}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-black hover:text-gray-800 font-medium"
                                        >
                                            TikTok
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                                    {t.contactForm}
                                </h3>
                                <form
                                    action="https://formspree.io/f/mnnggdeq"
                                    method="POST"
                                    className="space-y-4"
                                >
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder={t.fullName}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A63E] focus:border-transparent"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder={t.emailAddress}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A63E] focus:border-transparent"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            name="message"
                                            rows="4"
                                            placeholder={t.message}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A63E] focus:border-transparent"
                                            required
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-[#00A63E] text-white py-2 rounded-lg font-medium hover:bg-[#008a34] transition-colors"
                                    >
                                        {t.sendMessage}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactSection;
