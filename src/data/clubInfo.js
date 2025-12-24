import udalekuak from "../assets/astola_igeriketa_talea_udalekuak.png";
import jardunaldiak from "../assets/astola_igeriketa_talea_jardunaldiak.png";
import eh_txapelketa from "../assets/astola_igeriketa_talea_eh_txapelketa.png";
import master from "../assets/astola_igeriketa_talea_master.png";
import bizkaia from "../assets/astola_igeriketa_talea_bizkaia.png";
import igerilariak from "../assets/astola_igeriketa_talea_igerilariak.png";
import denborak from "../assets/astola_igeriketa_talea_denborak.png";
import ekintzak from "../assets/astola_igeriketa_talea_ekintzak.png";
// Logos de federaciones
import bizkaiaLogo from "../assets/astola_igeriketa_talea_bizkaia_federazioa_logo.png";
import euskadiLogo from "../assets/astola_igeriketa_talea_euskadi_federazioa_logo.png";
import arabaLogo from "../assets/astola_igeriketa_talea_araba_federazioa_logo.png";
import gipuzkoaLogo from "../assets/astola_igeriketa_talea_gipuzkoa_federazioa_logo.png";
import navarraLogo from "../assets/astola_igeriketa_talea_navarra_federazioa_logo.png";
import rfenLogo from "../assets/astola_igeriketa_talea_rfen_logo.png";

export const getInstagramCategories = (t) => [
    { id: "udalekuak", name: t.summerCamps, image: udalekuak },
    { id: "masterrak", name: t.masters, image: master },
    { id: "eh-txapelketa", name: t.basqueChampionship, image: eh_txapelketa },
    { id: "bizkaia-txapelketa", name: t.bizkaiaChampionship, image: bizkaia },
    { id: "jardunaldiak", name: t.competition, image: jardunaldiak },
    { id: "denborak", name: t.times, image: denborak },
    { id: "gure-igerilariak", name: t.ourSwimmers, image: igerilariak },
    { id: "ekintzak", name: t.actions, image: ekintzak },
];

export const instagramCategoryUrls = {
    udalekuak: "https://www.instagram.com/stories/highlights/18067081628120919/",
    masterrak: "https://www.instagram.com/stories/highlights/18305997631168481/",
    "eh-txapelketa":
        "https://www.instagram.com/stories/highlights/18053520869135974/",
    "bizkaia-txapelketa":
        "https://www.instagram.com/stories/highlights/18043628621270354/",
    jardunaldiak:
        "https://www.instagram.com/stories/highlights/17853377253323369/",
    denborak: "https://www.instagram.com/stories/highlights/18011278007479973/",
    "gure-igerilariak":
        "https://www.instagram.com/stories/highlights/18112680724457408/",
    ekintzak: "https://www.instagram.com/stories/highlights/18112680724457408/",
};

export const getClubInfo = (t) => ({
    name: "Astola I.K.T. Abadiño",
    slogan: t.swimmingSince,
    description: t.clubDescription,
    values: t.values,
    instagram: "https://www.instagram.com/astola.ikt/",
    facebook: "https://www.facebook.com/profile.php?id=61561550206896&locale=es_ES",
    tiktok: "https://www.tiktok.com/@astola.igeriketa.taldea",
});

export const getTrainingSchedule = (language) => [
    {
        group: "Prebenjamin/Benjamín",
        age: language === "es" ? "2018/2017/2016" : "2018/2017/2016",
        schedule:
            language === "es"
                ? ["Martes, Jueves 17:30-18:30"]
                : [
                    "Asteartea, Osteguna 17:30-18:30",
                ],
    },
    {
        group: "Benjamín/Alevín",
        age: language === "es" ? "2015/2014/2013" : "2015/2014/2013",
        schedule:
            language === "es"
                ? ["Lunes, Miércoles 17:00-18:00", "Martes, Jueves 18:30-19:30"]
                : [
                    "Astelehena, Asteazkena 17:00-18:00",
                    "Asteartea, Osteguna 18:30-19:30",
                ],
    },
    {
        group: "G3",
        age: language === "es" ? "2012/2011/2010" : "2012/2011/2010",
        schedule:
            language === "es"
                ? ["Lunes, Miércoles 17:00-18:00", "Martes, Jueves 18:30-19:30"]
                : [
                    "Astelehena, Asteazkena 17:00-18:00",
                    "Asteartea, Osteguna 18:30-19:30",
                ],
    },
    {
        group: "Masters",
        age: language === "es" ? "Adultos" : "Adin handikoa",
        schedule:
            language === "es"
                ? "Martes, Jueves 19:30-20:30"
                : "Asteartea, Osteguna 19:30-20:30",
    },
];

export const getStaff = (language) => [
    {
        name: "Alfonso",
        role: language === "es" ? "Presidente" : "Presidentea",
        experience: "",
    },
    {
        name: "Jokin",
        role: language === "es" ? "Entrenador Principal" : "Entrenatzaile Nagusia",
        experience: "",
    },
];

export const getInterestLinks = (t) => [
    {
        name: t.federationBizkaia,
        url: "https://bizkaiaigeri.es/index2.php",
        logo: bizkaiaLogo,
    },
    {
        name: t.federationEuskadi,
        url: "http://www.eif-fvn.org/inicio.php",
        logo: euskadiLogo,
    },
    {
        name: t.federationAraba,
        url: "http://www.alavesanatacion.org/",
        logo: arabaLogo,
    },
    {
        name: t.federationGipuzkoa,
        url: "https://www.gif.eus/",
        logo: gipuzkoaLogo,
    },
    {
        name: t.federationNavarra,
        url: "https://www.fnn-nif.com/",
        logo: navarraLogo,
    },
    {
        name: t.federationSpain,
        url: "https://rfen.es/publicacion/principal.asp",
        logo: rfenLogo,
    },
];

export const mainNavItems = [
    "hasiera",
    "kluba",
    "horarios",
    "enlaces",
    "tienda",
    "zonaPrivada",
    "redes",
    "calendario",
    "contacto",
    "aviso-legal",
];
