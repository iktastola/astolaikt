import React from "react";
import SEO from "../SEO";

const CalendarSection = ({ language }) => {
    return (
        <>
            <SEO
                title={
                    language === "es" ? "Calendario de Eventos" : "Ekitaldien Egutegia"
                }
                description={
                    language === "es"
                        ? "Calendario oficial de competiciones, entrenamientos y eventos del Club de Natación Astola I.K.T. Abadiño."
                        : "Astola I.K.T. Abadiñoko Igeriketa Klubaren lehiaketa, entrenamendu eta ekitaldien egutegi ofiziala."
                }
            />
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                        {language === "es"
                            ? "Calendario de Eventos"
                            : "Ekitaldien Egutegia"}
                    </h2>
                    <div className="flex justify-center">
                        <iframe
                            src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FMadrid&showPrint=0&showCalendars=0&title=astolaikt&src=aWt0YXN0b2xAZ21haWwuY29t&color=%23039be5"
                            style={{ border: 0 }}
                            width="100%"
                            height="600"
                            frameBorder="0"
                            scrolling="no"
                            title="Calendario Astole IKT"
                        ></iframe>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CalendarSection;
