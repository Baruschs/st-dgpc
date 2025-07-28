export const chapters = {
titulo: {
id: "titulo",
title: "",
description: "",
location: {
center: [-102.1057, 25.25189],
zoom: 4.7,
pitch: 0,
bearing: 0,
},
},

imagen1: {
id: "imagen1",
type: "image",
title: "¿QUÉ ES LA DGPC?",
description: `La Dirección General de Participación y Consultas (DGPC) es una unidad encargada de garantizar que los procesos de consultas, especialmente aquellos que involucran a pueblos y comunidades indígenas, se realicen de acuerdo al marco normativo y mejores estándares aplicables.`,
stats: [
{ label:
"Su misión implica tanto el cumplimiento de normas nacionales e internacionales como el fortalecimiento de la democracia participativa en México. "
},
],
imageUrl: "{`${import.meta.env.BASE_URL}data/images/ind_mex.jpg",
},

imagen2: {
id: "imagen2",
type: "image",
title: "FUNCIONES SUSTANTIVAS",
description: `Órgano estratégico de la AdmnistraciónPública Federal mexicana, cuya función principal es diseñar, coordinar, supervisar y evaluar políticas públicas y procesos relacionados con l aparticipación social y la consulta indígena.`,
stats: [
{ label: "Diseño y normatividad. " },
{ label: "Coordinación interinstitucional y representación. " },
{ label: "Supervisión y asesorría. " },
{ label: "Sistematización y mejora continua. " },
],
imageUrl: "//data/images/trab_equipo.jpg",
},

imagen3: {
id: "imagen3",
type: "image",
title: "CONSULTA INDÍGENA",
description: `La Consulta Indígena a los pueblos indígenas y afromexicanos es un mecanismo esencial para la construcción de paz durarera y con justicia en el país`,
imageUrl: "//data/images/Collage_1_con-ind.jpg",
},

conind1: {
id: "conind1",
type: "map",
title: "CONSULTA INDÍGENA",
description:
"A los pueblos Yaquis sobre la Manifestación de Impacto Ambiental (MIA) y operación del Acueducto Independencia.",
location: {
center: [-110.03709, 27.35844],
zoom: 9,
pitch: 65,
bearing: 0,
},
pmtileUrl: "pmtiles://data/terr_yaqui.pmtiles",
sourceLayer: "terr_yaqui_tile",
layerType: "polygon",
},

conind2: {
id: "conind2",
type: "map",
title: "CONSULTA INDÍGENA",
description: "Del Proyecto Vista Pacífico",
location: {
center: [-109.054, 25.59],
zoom: 14,
pitch: 65,
bearing: 0,
},
pmtileUrl: "pmtiles://data/Topolobampo.pmtiles",
sourceLayer: "Topolobampo_tile",
layerType: "polygon",
},

conind3: {
id: "conind3",
type: "map",
title: "CONSULTA INDÍGENA",
description: "Para el Proyecto Helax",
location: {
center: [-95.2, 16.1],
zoom: 10,
pitch: 65,
bearing: 0,
},
pmtileUrl: "pmtiles://data/mun_Helax.pmtiles",
sourceLayer: "mun_Helax_tile",
layerType: "polygon",
},

leygraldpia: {
id: "leygraldpia",
type: "map",
title: "LEY GENERAL SOBRE LOS DERECHOS DE LOS PUEBLOS INDÍGENAS Y AFROMEXICANOS",
stats: [
{ label: "Se trabaja en corrdinación con el Comité Técnico." },
{ label: "Se realizan sesiones de trabajo con los representantes de los pueblos indígenas." },
{ label: "Se realizan las consultas en los pueblos indígenas para la aprobacion de la Ley." },
],
location: {
center: [-102.1057, 25.25189],
zoom: 4.7,
pitch: 0,
bearing: 0,
},
pmtileUrl: "pmtiles://data/comunidades_inpi.pmtiles",
sourceLayer: "comunidades_inpi_tile",
layerType: "point",
},

trenmexqro: {
id: "trenmexqro",
type: "map",
title: "SEGUIMIENTO A LOS PROYECTOS DE TRENES DEL GOBIERNO DE MÉXICO",
stats: [
{ label: "Tren Ciudad de México hacia el estado de Querétaro" },
],
location: {
center: [-99.80342, 20.10214],
zoom: 8.4,
pitch: 65,
bearing: 0,
},
layers: [{
id: 'ent-Mex-Qro',
pmtileUrl: "pmtiles://data/ent_Tren_Mex-Qro.pmtiles",
sourceLayer: "ent_Tren_MexQro_tile",
layerType: "polygon",
},
{
id: 'trazomeqro',
pmtileUrl: "pmtiles://data/trazo_Mex-Qro.pmtiles",
sourceLayer: "trazo_MexQro_tile",
layerType: "line",
// 👇 Coordenadas añadidas para este tramo
startCoords: [-99.151472, 19.451804],
endCoords: [-100.4164969, 20.6007303]
}
]
},

trenaifapach: {
id: "trenaifapach",
type: "map",
title: "SEGUIMIENTO A LOS PROYECTOS DE TRENES DEL GOBIERNO DE MÉXICO",
stats: [
{ label: "Tren Aeropuerto Internacional Felipe Ángeles (AIFA) a Pachuca, Hgo." },
],
location: {
center: [-98.89374, 19.89560],
zoom: 9.6,
pitch: 65,
bearing: 0,
},
layers: [{
id: 'ent-AIFA-Pach',
pmtileUrl: "pmtiles://data/ent_AIFA-Pachuca.pmtiles",
sourceLayer: "ent_AIFAPachuca_tile",
layerType: "polygon",
},
{
id: 'trazoaifapach', // Cambiado ID para que sea único
pmtileUrl: "pmtiles://data/trazo_AIFA-Pachuca.pmtiles",
sourceLayer: "trazo_AIFAPachuca_tile",
layerType: "line",
// 👇 Coordenadas añadidas para este tramo (con la corrección de typo)
startCoords: [-99.077292, 19.70631],
endCoords: [-98.747895, 20.06939]
}
]
},

estconstpaz: {
id: "estconstpaz",
title: "ESTRATEGIA DE CONSTRUCCION DE PAZ",
stats: [
{ label: "BRIGADAS POR LA PAZ (Chihuahua y Guanajuato)." },
{ label: "SÍ, AL DESARME (Ciudad de México)." },
{ label: "TIANGUIS DEL BIENESTAR (Guerrero)." },
],
location: {
center: [-102.1057, 25.25189],
zoom: 4.7,
pitch: 0,
bearing: 0,
},
layers: [{
id: 'ent_ecp', 
pmtileUrl: "pmtiles://data/ent_ecp.pmtiles",
sourceLayer: "ent_ecp_tile",
layerType: "polygon",
},
]
},

juarez: {
id: "juarez",
title: "SÍ, AL DESARME - CIUDAD JUÁREZ, CHIH.",
stats: [
{ label: "XXXXX Armas canjeadas por efectivo." },
],
location: {
center: [-106.45464, 31.73198],
zoom: 8.9,
pitch: 65,
bearing: 0,
},
layers: [{
id: 'ent_ecp', 
pmtileUrl: "pmtiles://data/cdjuarez.pmtiles",
sourceLayer: "cdjuarez_tile",
layerType: "polygon",
},
]
},

celaya: {
id: "celaya",
title: "BRIGADAS POR LA PAZ - CELAYA, GTO.",
stats: [
{ label: "26,262 Atenciones brindadas." },
{ label: "5,007 Domicilios visitados." },
{ label: "1,773 Personas censadas." },
{ label: "270 Peticiones recibidas." },
{ label: "11 Comités de Paz." },
{ label: "7 Ferias de paz." },
],
location: {
center: [-100.81871, 20.52065],
zoom: 10.4,
pitch: 65,
bearing: 0,
},
layers: [{
id: 'Celaya', 
pmtileUrl: "pmtiles://data/Celaya.pmtiles",
sourceLayer: "Celaya_tile",
layerType: "polygon",
},
]
},

gam: {
id: "gam",
title: "SÍ, AL DESSARME - GUSTAVO A. MADERO, CDMX.",
stats: [
{ label: "XXXXX Armas canjeadas por efectivo." },
],
location: {
center: [-99.11808, 19.50969],
zoom: 11.8,
pitch: 65,
bearing: 0,
},
layers: [{
id: 'gam', 
pmtileUrl: "pmtiles://data/gam.pmtiles",
sourceLayer: "gam_tile",
layerType: "polygon",
},
]
},

tlapa: {
id: "tlapa",
title: "TIANGUIS DEL BIENESTAR - TLAPA DE COMONFORT, GRO.",
stats: [
{ label: "XXXXX Atenciones brindadas." },
],
location: {
center: [-98.685, 17.58],
zoom: 10,
pitch: 65,
bearing: 0,
},
layers: [{
id: 'tlapa', 
pmtileUrl: "pmtiles://data/tlapa-gro.pmtiles",
sourceLayer: "tlapagro_tile",
layerType: "polygon",
},
]
},
};