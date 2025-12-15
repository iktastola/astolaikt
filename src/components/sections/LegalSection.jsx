import React from "react";
import SEO from "../SEO";

const LegalSection = ({ t, language }) => {
    return (
        <>
            <SEO
                title={
                    language === "es"
                        ? "Aviso Legal y Privacidad"
                        : "Lege Oharra eta Pribatutasuna"
                }
                description={
                    language === "es"
                        ? "Información legal, política de privacidad y protección de datos del Club de Natación Astola I.K.T. Abadiño."
                        : "Astola I.K.T. Abadiñoko Igeriketa Klubaren informazio legala, pribatutasun politika eta datu-babesa."
                }
            />
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white bg-opacity-90 rounded-lg p-8">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                            {t.avisoLegal}
                        </h2>
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold mb-4">{t.legalNotice}</h3>
                            <p className="text-gray-700 mb-4">
                                El sitio web de Astola I.K.T. Abadiño tiene como objetivo
                                ofrecer información sobre las actividades del club y servir de
                                punto de contacto con sus miembros y simpatizantes.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Aunque el contenido se revisa cuidadosamente, el club no
                                garantiza que la información publicada sea completa, exacta o
                                actualizada, y no asume responsabilidad alguna derivada del uso
                                de dicha información.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Los textos, imágenes, logotipos y demás contenidos de este sitio
                                web están protegidos por derechos de autor y pertenecen a Astola
                                I.K.T. Abadiño. No está permitida su reproducción total o
                                parcial sin autorización previa y por escrito.
                            </p>
                            <p className="text-gray-700">
                                El club no se hace responsable del contenido de los enlaces
                                externos que puedan incluirse en este sitio web.
                            </p>
                        </div>
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold mb-4">{t.privacyPolicy}</h3>
                            <div className="mb-4">
                                <h4 className="text-lg font-medium">{t.responsible}</h4>
                                <p>Astola I.K.T. Abadiño</p>
                                <p>
                                    <strong>{t.email}:</strong>{" "}
                                    <a
                                        href="mailto:astolait@gamail.com"
                                        className="text-blue-600"
                                    >
                                        astolait@gamail.com
                                    </a>
                                </p>
                                <p>
                                    <strong>{t.addressFull}:</strong> Eulena 2, 48220 Abadiño
                                    (Bizkaia)
                                </p>
                            </div>
                            <div className="mb-4">
                                <h4 className="text-lg font-medium">{t.purpose}</h4>
                                <p>
                                    Los datos personales recabados a través de los formularios de
                                    contacto o inscripción se utilizan exclusivamente para
                                    gestionar la actividad deportiva del club, responder consultas
                                    or mantener la comunicación con socios y participantes.
                                </p>
                            </div>
                            <div className="mb-4">
                                <h4 className="text-lg font-medium">{t.legalBasis}</h4>
                                <p>
                                    El tratamiento de los datos se basa en el consentimiento de la
                                    persona interesada y/o en la relación asociativa que mantiene
                                    con el club.
                                </p>
                            </div>
                            <div className="mb-4">
                                <h4 className="text-lg font-medium">{t.recipients}</h4>
                                <p>
                                    Los datos no se cederán a terceros salvo obligación legal o
                                    cuando sea necesario para la correcta prestación de servicios
                                    relacionados con la actividad del club (por ejemplo,
                                    federaciones deportivas o aseguradoras). Cuando sea
                                    imprescindible utilizar proveedores que puedan acceder a datos
                                    (p. ej., alojamiento web, herramientas ofimáticas), el club
                                    firmará con ellos los contratos de encargo de tratamiento
                                    exigidos por el RGPD.
                                </p>
                            </div>
                            <div className="mb-4">
                                <h4 className="text-lg font-medium">{t.rights}</h4>
                                <p>
                                    Cualquier persona tiene derecho a obtener confirmación sobre
                                    si en Astola I.K.T. Abadiño tratamos datos personales que le
                                    conciernan. Las personas interesadas tienen derecho a acceder
                                    a sus datos personales, así como a solicitar la rectificación
                                    de los datos inexactos o, en su caso, solicitar su supresión
                                    cuando, entre otros motivos, los datos ya no sean necesarios
                                    para los fines que fueron recogidos. También podrán solicitar
                                    la limitación del tratamiento, la portabilidad de sus datos y
                                    oponerse al tratamiento en determinadas circunstancias.
                                </p>
                                <p className="mt-2">
                                    Para ejercer estos derechos, envía un correo a{" "}
                                    <a
                                        href="mailto:astolait@gamail.com"
                                        className="text-blue-600"
                                    >
                                        astolait@gamail.com
                                    </a>{" "}
                                    indicando el derecho que deseas ejercer.
                                </p>
                                <p>
                                    Asimismo, puedes presentar una reclamación ante la Agencia
                                    Española de Protección de Datos (
                                    <a
                                        href="https://www.aepd.es"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600"
                                    >
                                        www.aepd.es
                                    </a>
                                    ) si consideras que tus derechos no han sido atendidos
                                    correctamente.
                                </p>
                            </div>
                            <div className="mb-4">
                                <h4 className="text-lg font-medium">{t.dataRetention}</h4>
                                <p>
                                    Los datos personales se conservarán mientras dure la relación
                                    con el club y durante los plazos necesarios para cumplir las
                                    obligaciones legales correspondientes.
                                </p>
                            </div>
                            <div className="mb-4">
                                <h4 className="text-lg font-medium">{t.securityMeasures}</h4>
                                <p>
                                    Astola I.K.T. Abadiño aplica las medidas técnicas y
                                    organizativas necesarias para garantizar la confidencialidad e
                                    integridad de los datos personales conforme al Reglamento (UE)
                                    2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).
                                </p>
                            </div>
                            <div className="mb-4">
                                <h4 className="text-lg font-medium">{t.imageUse}</h4>
                                <p>
                                    El club podrá publicar en su web o redes sociales fotografías
                                    o vídeos de las actividades deportivas y eventos, siempre con
                                    fines informativos y de difusión de la actividad del club.
                                </p>
                                <p>
                                    Si no deseas que tu imagen o la de tus hijos/as aparezca,
                                    puedes solicitar su retirada escribiendo a{" "}
                                    <a
                                        href="mailto:astolait@gamail.com"
                                        className="text-blue-600"
                                    >
                                        astolait@gamail.com
                                    </a>
                                    . En caso de menores de edad, el club recabará, cuando
                                    corresponda, la autorización de sus progenitores o tutores.
                                </p>
                            </div>
                            <div className="mb-4">
                                <h4 className="text-lg font-medium">{t.cookies}</h4>
                                <p>
                                    Este sitio web puede utilizar cookies técnicas necesarias para
                                    su correcto funcionamiento. No se emplean cookies con fines
                                    publicitarios ni de seguimiento.
                                </p>
                                <p>
                                    Puedes configurar tu navegador para bloquear o eliminar las
                                    cookies en cualquier momento. Si en el futuro se incorporaran
                                    cookies analíticas o de terceros, se informará debidamente y
                                    se solicitará el consentimiento correspondiente.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-medium">{t.contact}</h4>
                                <p>
                                    Para cualquier duda relacionada con este aviso o con la
                                    política de privacidad, puedes escribir a{" "}
                                    <a
                                        href="mailto:astolait@gamail.com"
                                        className="text-blue-600"
                                    >
                                        astolait@gamail.com
                                    </a>{" "}
                                    o dirigirte por escrito a Astola I.K.T. Abadiño, Eulena 2,
                                    48220 Abadiño (Bizkaia).
                                </p>
                            </div>
                        </div>
                        <div className="text-center text-gray-600 mt-8">
                            <p>{t.lastUpdate}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LegalSection;
