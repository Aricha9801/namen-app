/**
 * Een file die alle classen van de brt bevat.
 * @type {*[]}
 */

let classes = ["Grasland", "BosGemengdBos", "Akkerland", "BosNaaldbos", "Dodenakker", "BosLoofbos", "Spoorbaanlichaam", "Heide", "BebouwdGebied", "Populieren", "Boomgaard", "Boomkwekerij", "Zand", "Duin", "Fruitkwekerij", "BasaltblokkenSteenglooiing", "BosGriend", "Braakliggend", "Aanlegsteiger_terrein", "DodenakkerMetBos", "BronWel", "GreppelDrogeSloot", "Waterloop", "MeerPlas", "Droogvallend", "Droogvallend_LAT", "Zee_waterdeel", "KasWarenhuis", "Tank", "Huizenblok", "KloosterAbdij", "Zwembad_gebouw", "Sporthal", "ParkeerdakParkeerdekParkeergarage", "Gemeentehuis", "Toren", "WindmolenKorenmolen", "Gemaal", "Kapel", "Uitzichttoren", "Pompstation", "Manege", "Fort", "Rune", "Transformatorstation_gebouw", "Tankstation", "Museum", "Kasteel", "School", "Waterradmolen", "Ziekenhuis", "Postkantoor", "Bunker", "Koeltoren", "Vuurtoren", "Watertoren", "WindmolenWatermolen", "Universiteit", "RadiotorenTelevisietoren", "Bezoekerscentrum", "PsychiatrischZiekenhuisPsychiatrischCentrum", "Gevangenis", "Elektriciteitscentrale", "Politiebureau", "Radarpost", "Schaapskooi", "Lichttoren", "Werf_gebouw", "Radartoren", "Dok", "Veiling", "Fabriek", "Peilmeetstation", "Windmolen", "Schoorsteen", "Crematorium", "Stadion", "Paleis", "Kunstijsbaan", "Telecommunicatietoren", "Klokkentoren", "Zendtoren", "Brandweerkazerne", "Stationsgebouw", "MarkantGebouw", "Reddingboothuisje", "KliniekInrichtingSanatorium", "Recreatiecentrum", "Verkeerstoren", "Koepel", "KerncentraleKernreactor", "StadskantoorHulpsecretarie", "Hotel", "Remise", "Kerk", "Brandtoren", "Luchtwachttoren", "Silo", "Moskee", "OverigReligieusGebouw", "Synagoge", "MilitairGebouw", "Windturbine", "Tol_gebouw", "Boortoren", "Observatorium", "Wegrestaurant", "Bomenrij", "Koedam", "HegHaag", "Aanlegsteiger_inrichtingselement", "Hekwerk", "Wegafsluiting", "Verkeersgeleider", "Stuw", "Muur", "Geluidswering", "StrekdamKribGolfbreker", "Hoogspanningsleiding", "Sluisdeur", "Schietbaan", "Kabelbaan", "Paalwerk", "Stormvloedkering", "Tol_inrichtingselement", "Boom", "Strandpaal", "Hoogspanningsmast", "Wegwijzer", "Grenspunt", "Kruis", "Pijler", "Kilometerraaibord", "Paal", "Zendmast", "Kilometerpaal", "Windmolentje", "Dukdalf", "Peilschaal", "Scheepvaartlicht", "Botenhelling", "KilometerpaalWater", "KogelvangerSchietbaan", "GedenktekenMonument", "KilometerpaalSpoorweg", "Radiotelescoop", "MarkantObject", "Seinmast", "GpsKernnetpunt", "Kilometerraaipaal", "Klokkenstoel", "Vlampijp", "Busstation", "Oliepompinstallatie", "Hunebed", "Uitzichtpunt", "Baak", "ZichtbaarWrak", "Golfmeetpaal", "Helikopterlandingsplatform", "Kraan", "Gaswinning_inrichtingselement", "Metrostation", "Treinstation", "Sneltramhalte", "Kaap", "Havenhoofd", "Vliedberg", "Kabelbaanmast", "Plaatsnaambord", "Calamiteitendoorgang", "Leiding", "Luchtvaartlicht", "Radiobaken", "RdPunt", "Weg", "Spoor", "Water", "Wijk", "Buurtschap", "Gehucht", "Deelkern", "Buurt", "Woonkern", "Industriekern", "Recreatiekern", "Stadsdeel", "TaludHoogteverschil", "SteileRandAardrand", "Wal", "Trein", "Metro", "Tram", "Sneltram", "Gemengd", "Werf_functioneelGebied", "Park", "Gebouwencomplex", "Haven_functioneelGebied", "Natuurgebied", "Landgoed", "Infiltratiegebied", "Verdedigingswerk", "Boswachterij", "Tennispark", "Bedrijventerrein", "Eendenkooi", "Woonwagencentrum", "Transformatorstation_functioneelGebied", "Zuiveringsinstallatie", "SportterreinSportcomplex", "Begraafplaats", "Wildwissel", "Jachthaven", "Stortplaats", "Bungalowpark", "CampingKampeerterrein", "Heemtuin", "Volkstuinen", "Vakantiepark", "Sluizencomplex", "Ijsbaan", "DierentuinSafaripark", "Zenderpark", "Circuit", "Viskwekerij_functioneelGebied", "Ziekenhuiscomplex", "Verzorgingsplaats", "Openluchtmuseum", "Crossbaan", "Openluchttheater", "Waterkering", "Mosselbank", "Milieustraat", "Kassengebied", "VliegveldLuchthaven", "BotanischeTuin", "Golfterrein", "Zonnepark", "Kartingbaan", "Caravanpark", "Visvijvercomplex", "Erebegraafplaats", "KazerneLegerplaats", "MilitairOefengebiedSchietterrein", "ZwembadComplex", "Gaswinning_functioneelGebied", "Zweefvliegveldterrein", "Renbaan", "Attractiepark", "Grafheuvel", "Windturbinepark", "Tuincentrum", "Zandwinning", "Recreatiegebied", "Skibaan", "Productie-installatie", "Groeve", "Campus", "Helikopterlandingsterrein", "Zoutwinning", "GebiedVoorRadioastronomie", "NationaalPark", "Grindwinning", "Slipschool", "Emplacement", "Mijn", "Oliewinning", "Plantsoen", "Arboretum", "GebiedMetHogeObjecten", "NatuurgebiedNatuurreservaat", "Veerverbinding", "Autosnelweg", "RegionaleWeg", "Hoofdweg", "LokaleWeg", "Straat", "ParkeerplaatsCarpool", "Parkeerplaats", "RolbaanPlatform", "StartbaanLandingsbaan", "ParkeerplaatsPR", "Polder", "StreekVeld", "Bosgebied", "GeulVaargeul", "Heidegebied", "HeuvelBerg", "BankOndieptePlaat", "ZeegatZeearm", "Eiland", "KaapHoek", "Duingebied", "Zee_geografischGebied", "Wad", "TerpWierde", "Watergebied", "Hoogtepunt", "Dieptepunt", "Peil", "PeilWinterpeil", "PeilZomerpeil", "Laagwaterlijn", "Hoogtelijn", "Dieptelijn", "Hoogwaterlijn", "Gemeente", "Provincie", "Land", "TerritorialeZee", "Waterschap", "Overig_terrein", "Overig_waterdeel", "Overig_gebouw", "Overig_inrichtingselement", "Overig_planTopografie", "Overig_functioneelGebied", "Overig_wegdeel", "Overig_geografischGebied", "Terrein", "Waterdeel", "Gebouw", "Inrichtingselement", "PlanTopografie", "Plaats", "Relief", "Spoorbaandeel", "FunctioneelGebied", "Wegdeel", "GeografischGebied", "Hoogte", "RegistratiefGebied"];

/**
 * Hier kan je de index opvragen van een element in de array
 * @param className string
 * @returns {number}
 */
export default function getIndexOfClasses(className) {
    return classes.indexOf(className);
}
