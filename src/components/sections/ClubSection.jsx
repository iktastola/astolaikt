import React from "react";
import SEO from "../SEO";
import { Star, User } from "lucide-react";
import { getStaff } from "../../data/clubInfo";

const ClubSection = ({ t, language }) => {
    const staff = getStaff(language);

    return (
        <>
            <SEO
                title={language === "es" ? "Nuestro Club" : "Gure Kluba"}
                description={
                    language === "es"
                        ? "Conoce la historia, valores y equipo técnico del Club de Natación Astola I.K.T. Abadiño."
                        : "Ezagutu Astola IKT Abadiñoko Igeriketa Klubaren historia, balioak eta teknikari taldea."
                }
            />
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white bg-opacity-90 rounded-lg p-8">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                            {t.aboutClub}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                    {t.ourHistory}
                                </h3>
                                <div className="text-gray-600 space-y-6">
                                    {t.founded.map((paragraph, index) => (
                                        <p
                                            key={index}
                                            className={
                                                index % 2 === 0 ? "font-bold text-gray-800" : ""
                                            }
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                                <p className="text-gray-600">{t.nameMeaning}</p>
                            </div>
                            <div className="bg-green-100 rounded-lg p-8">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    {t.ourValues}
                                </h3>
                                <ul className="space-y-2">
                                    {t.values.map((value, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center text-gray-700"
                                        >
                                            <Star className="w-4 h-4 text-[#00A63E] mr-2" />
                                            {value}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                                {t.technicalTeam}
                            </h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {staff.map((member, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-6 rounded-lg shadow-md border"
                                    >
                                        <User className="w-12 h-12 text-[#00A63E] mx-auto mb-4" />
                                        <h4 className="font-semibold text-gray-900">
                                            {member.name}
                                        </h4>
                                        <p className="text-[#00A63E] text-sm">{member.role}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ClubSection;
