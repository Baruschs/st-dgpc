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
title: "¿QUIÉNES SOMOS?",
description: `La DGPC es la unidad encargada de garantizar que los procesos de consultas, especialmente aquellos que involucran a pueblos y comunidades indígenas, se realicen de acuerdo al marco normativo y mejores estándares aplicables.`,
imageUrl: "./data/images/ind_mex.jpg",
},

imagen2: {
id: "imagen2",
type: "image",
title: "FUNCIONES",
description: `Algunas de nuestras funciones son:`,
stats: [
{ label: "Fungir en materia de asuntos indígenas, dentro de su ámbito de competencia, como enlace y representante de la Secretaría de Gobernación." },
{ label: "Vigilar que los procesos de participación y consultas de competencia federal se realicen conforme a la normativa aplicable." },
{ label: "Colaborar en el cumplimiento de los objetivos de las unidades administrativas adscritas a la Subsecretaría de Construcción de Paz, Participación Social y Asuntos Religiosos." },
],
imageUrl: "./data/images/trab_equipo.jpg",
},

imagen3: {
id: "imagen3",
type: "image",
title: "CONSULTAS INDÍGENAS",
description: `La consulta a los pueblos indígenas y afromexicanos es un mecanismo esencial para la construcción de una paz duradera y con justicia en el país. Te presentamos los temas de consultas que están en análisis.`,
imageUrl: "./data/images/Collage_1_con-ind.jpg",
},

conind1: {
id: "conind1",
type: "map",
title: "CONSULTAS INDÍGENAS",
description: `Consulta a los pueblos yaquis sobre la Manifestación de Impacto Ambiental (MIA) y operación del Acueducto Independencia.`,
stats: [
{ label: "Estas consultas han buscado que los pueblos yaquis de sean informados y que participen en las decisiones que afectan su territorio y recursos hídricos." },
{ label: "Se llevan a cabo consultas a los pueblos yaquis." },
{ label: "El proceso ha sido supervisado por la Secretaría de Gobernación para garantizar su legalidad y legitimidad." },
],
location: {
center: [-110.03709, 27.35844],
zoom: 9,
pitch: 65,
bearing: 0,
},
layers: [{
id: 'teryaqui',
pmtileUrl: "pmtiles://data/terr_yaqui.pmtiles",
sourceLayer: "terr_yaqui_tile",
layerType: "polygon",
},
{
id: 'pueblosyaqui', // Cambiado ID para que sea único
pmtileUrl: "pmtiles://data/Pueblos_Yaqui.pmtiles",
sourceLayer: "Pueblos_Yaqui_tile",
layerType: "point",
},]
},

conind2: {
id: "conind2",
type: "map",
title: "CONSULTAS INDÍGENAS",
description: "Consulta Indígena del Proyecto Vista Pacífico",
stats:[
{ label: "Los pueblos Mayo Yoremes de Sinaloa se consultarán en las decisiones que afecten su territorio y recurso hídricos." },
{ label: "La SENER realiza consultas a los pueblos Mayo-Yoremes." },
{ label: "El proceso ha sido supervisado por la Secretaría de Gobernación para garantizar su legalidad y legitimidad." },
],
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
stats:[
{ label: "En enero de 2025 comenzó la fase informativa de la consulta indígena convocada por la Secretaría de Energía." },
{ label: "Se identificaron al menos 9 municipios y 10 localidades como zona de impacto." },
{ label: "El proceso ha sido supervisado por la Secretaría de Gobernación para garantizar su legalidad y legitimidad." },
],
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
{ label: "Se trabaja en coordinación con el Comité Técnico el cual esta conformado por la Secretaría de Gobernación, Consultoría jurídica de presidencia y el Instituto Nacional de los Pueblos indígenas." },
{ label: "Se realizan sesiones de trabajo con los representantes de los 72 pueblos indígenas, quienes comunican y expresan las opiniones de los diversos pueblos indígenas." },
{ label: "Próximamente se llevarán a cabo consultas en los pueblos indígenas para la aprobación de la Ley." },
],
location: {
center: [-102.1057, 25.25189],
zoom: 4.7,
pitch: 0,
bearing: 0,
},
layers: [{
id: 'cobeturaccpi',
pmtileUrl: "pmtiles://data/Cobertura_ORC_CCPI.pmtiles",
sourceLayer: "Cobertura_ORC_CCPI_tile",
layerType: "point",
},
{
id: 'comunidadesinpi', 
pmtileUrl: "pmtiles://data/comunidades_inpi.pmtiles",
sourceLayer: "comunidades_inpi_tile",
layerType: "point",
},]
},

trenmexqro: {
id: "trenmexqro",
type: "map",
title: "SEGUIMIENTO A LOS PROYECTOS DE TRENES DEL GOBIERNO DE MÉXICO",
description: "Tren Ciudad de México hacia el estado de Querétaro.",
stats: [
{ label: "El tren cubrirá aproximadamente 226 km entre la Ciudad de México y Querétaro, pasando por los estados de México, Hidalgo y Querétaro. " },
{ label: "Infraestructura: Contará con dos vías exclusivas para pasajeros, aprovechando en su mayoría el derecho de vía existente, y se estima que reducirá el tiempo de viaje a una hora y 40 minutos. " },
{ label: "El proceso ha sido supervisado por la Secretaría de Gobernación para garantizar su legalidad y legitimidad." },
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
startCoords: [-99.151472, 19.451804],
endCoords: [-100.4164969, 20.6007303]
}
]
},

trenaifapach: {
id: "trenaifapach",
type: "map",
title: "SEGUIMIENTO A LOS PROYECTOS DE TRENES DEL GOBIERNO DE MÉXICO",
description: "Tren Aeropuerto Internacional Felipe Ángeles (AIFA) a Pachuca, Hgo.",
stats: [
{ label: "El tramo AIFA Pachuca comprende alrededor de 57–64 km de vía doble electrificada, que conectará el Aeropuerto Internacional Felipe Ángeles (AIFA) con Pachuca, Hidalgo, atravesando municipios como Zumpango, Tizayuca, Zempoala y Mineral de la Reforma." },
{ label: "La Manifestación de Impacto Ambiental (MIA) del proyecto está disponible para consulta pública hasta el 5 de marzo de 2025." },
{ label: "El proceso ha sido supervisado por la Secretaría de Gobernación para garantizar su legalidad y legitimidad." },
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
startCoords: [-99.077292, 19.70631],
endCoords: [-98.747895, 20.06939]
}
]
},

estconstpaz: {
id: "estconstpaz",
title: "ESTRATEGIA DE CONSTRUCCION DE PAZ",
stats: [
{ label: "BRIGADAS POR LA PAZ: Colaboró en las atenciones y promoción de la participación ciudadana a través de ferias, módulos de servicios y actividades comunitarias, en los programas." },
{ label: "SÍ, AL DESARME, SÍ A LA PAZ: El programa consiste en el canje de armas de fuego y municiones, de manera anónima, por dinero en efectivo." },
{ label: "TIANGUIS DEL BIENESTAR: Es un programa del gobierno mexicano que distribuye bienes confiscados o decomisados a personas en situación de vulnerabilidad o pobreza, de forma gratuita." },
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
title: "SÍ, AL DESARME, SÍ A LA PAZ \nCIUDAD JUÁREZ, CHIH.",
description: "Entre el 10 de enero y el 21 de marzo de 2025, se registraron los siguientes datos en Ciudad Juárez:",
stats: [
{ label: "437 armas largas canjeadas, estableciendo un récord nacional en este tipo de armas." },
{ label: "782 armas cortas, además de granadas, cartuchos y cargadores entregados." },
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
{ id: "juarez-punto1",
    layerType: "point",
    coords:[-106.4674959339246, 31.694129822834817],
    isPulsing: true
}
]
},

celaya: {
id: "celaya",
title: "BRIGADAS POR LA PAZ \nCELAYA, GTO.",
description: `Se colaboro en las atenciones y promoción de la participación ciudadana a través de ferias, módulos de servicios y actividades comunitarias, en los programas, teniendo como resultado lo siguiente:`,
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
{
  id: 'cols_celaya',
  pmtileUrl: "pmtiles://data/cols_celaya.pmtiles",
  sourceLayer: "cols_celaya_tile",
  layerType: "point",
}
]
},

gam: {
id: "gam",
title: "SÍ, AL DESARME, SÍ A LA PAZ \nGUSTAVO A. MADERO, CDMX.",
description: `Se recolectaron 400 armas de fuego, destruidas públicamente por Sedena:`,
stats: [
{ label: "318 armas cortas." },
{ label: "64 armas largas." },
{ label: "18 granadas." },
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
{
id: 'gam-punto1',
layerType: "point",
coords:[-99.11791759926417, 19.484791044640303],
isPulsing: true
}
]
},

tianguis: {
id: "tianguis",
title: "TIANGUIS DEL BIENESTAR",
description: "La DGPC contribuyó en la coordinación interinstitucional de los tres órdenes de gobierno para el programa de la Secretaría de Gobernación Tianguis del Bienestar, en el estado de Guerreo, con el cual se busca contribuir a la justicia social atendiendo a la población que más lo requiere a través de la entrega de artículos de primera necesidad incautados en aduana o decomisados a la delincuencia. Esto tuvo lugar en los municipios de:",
stats: [
  {label: "COCHOAPA"},
  {label: "METLÁTONOC"}
],
location: {
center: [-98.43840, 17.00011],
zoom: 10.5,
pitch: 65,
bearing: 0,
},
layers: [{
id: 'cocho',
pmtileUrl: "pmtiles://data/cochoapa.pmtiles",
sourceLayer: "cochoapa_tile",
layerType: "polygon",
},
{ id: "cochopa-punto1",
    layerType: "point",
    coords:[-98.45530535908473, 17.192911069940074],
  isPulsing: true
},
{
id: 'metlat',
pmtileUrl: "pmtiles://data/metlatonoc.pmtiles",
sourceLayer: "metlatonoc_tile",
layerType: "polygon",
},
{ id: "metlatonoc-punto1",
    layerType: "point",
    coords:[-98.40704864876398, 17.195468201810538],
  isPulsing: true
},
]
},
}