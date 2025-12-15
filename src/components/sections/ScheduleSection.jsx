import React from "react";
import SEO from "../SEO";
import { Clock } from "lucide-react";
import { getTrainingSchedule } from "../../data/clubInfo";

const ScheduleSection = ({ t, language }) => {
    const trainingSchedule = getTrainingSchedule(language);

    return (
        <>
            <SEO
                title={language === "es" ? "Horarios de Entrenamiento" : "Entrenamendu Ordutegiak"}
                description={
                    language === "es"
                        ? "Consulta los horarios de entrenamiento por categorías en el Club de Natación Astola I.K.T. Abadiño."
                        : "Kontsultatu kategoriaren arabera entrenamendu-ordutegiak Astola I.K.T. Abadiñoko Igeriketa Kluban."
                }
            />
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white bg-opacity-90 rounded-lg p-8">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                            {t.trainingSchedule}
                        </h2>
                        <div className="space-y-4">
                            {trainingSchedule.map((group, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900">
                                                {group.group}
                                            </h3>
                                            <p className="text-gray-600">{group.age}</p>
                                        </div>
                                        <div className="mt-2 md:mt-0 text-gray-700">
                                            <div className="flex items-start">
                                                <Clock className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                                                <div>
                                                    {Array.isArray(group.schedule)
                                                        ? group.schedule.map((line, i) => (
                                                            <span key={i} className="block">
                                                                {line}
                                                            </span>
                                                        ))
                                                        : group.schedule.split("\n").map((line, i) => (
                                                            <span key={i} className="block">
                                                                {line.trim()}
                                                            </span>
                                                        ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ScheduleSection;
