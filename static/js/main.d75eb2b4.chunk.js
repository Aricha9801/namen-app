(this.webpackJsonpnamen_app=this.webpackJsonpnamen_app||[]).push([[0],{162:function(e,t,a){e.exports=a.p+"static/media/Logo-kadaster.5d975e1b.png"},178:function(e,t,a){e.exports=a(339)},210:function(e,t,a){},339:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(40),s=a.n(i),o=a(9),l=a(10),u=a(21),c=a(22),p=a(35),d=a(23),m=a(44),h=a.n(m),g=a(105),b=a(36),k=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"startScreen"},r.a.createElement("p",{className:"boldHeaderText"},"Wat is het?"),r.a.createElement("p",{className:"explainText"},"Dit is een applicatie die objecten uit de brt haalt. Denk hierbij aan buurten, straaten, meren en zelf bomen. Deze objecten hebben allemaal een naam. Aan de hand van deze naam kan je de objecten ophalen. Deze objecten hebben ook andere eigenschappen die je kunt bekijken. (nog aanvullen)"),r.a.createElement("p",{className:"boldHeaderText"},"Wie doe dit?"),r.a.createElement("p",{className:"explainText"},"brt (nog aanvullen)"),r.a.createElement("p",{className:"boldHeaderText"},"Hoe werkt het?"),r.a.createElement("p",{className:"explainText"},"Je kan een naam zoeken in het zoekveld. Dit kan bijvoorbeeld je gemeente, of buurt naam zijn. Probeer verschillende dingen en zie wat je kan ontdekken."),r.a.createElement("p",{className:"boldHeaderText"},"Andere leuke dingen gedaan met de brt"),r.a.createElement("p",{className:"explainText"},r.a.createElement("a",{href:"https://labs.kadaster.nl/stories/religieuze-gebouwen/"},"Datastroy religieuze gebouwen")," waar brt informatie over religieuze gebouwen wordt getoond op een interactieve manier."))}}]),t}(r.a.Component),f=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.res.getResults().map((function(t){var a=r.a.createElement("p",{className:"hoofdText"},"\xa0"),n=r.a.createElement("p",{className:"subText"},"\xa0");return t.getNaam()&&(a=r.a.createElement("p",{className:"hoofdText"},t.getNaam())),t.getType()&&(n=r.a.createElement("p",{className:"subText"},t.getType()?t.getType():String.fromCharCode(32))),r.a.createElement("li",{key:t.getUrl()+t.getNaam(),className:"liResultScreen",onClick:function(){e.props.onClickItem(t)}},a,n)}));return r.a.createElement("div",{className:"homeScreen"},r.a.createElement("ul",null,t))}}]),t}(r.a.Component),v=a(29),y=a.n(v),E=a(53),w=function(){function e(t,a,n,r){Object(o.a)(this,e),this._url=t,this._naam=a,this._type=n,this._geoJson=r,this._subscribers=[]}return Object(l.a)(e,[{key:"setSecondProperties",value:function(e,t,a){this._type=t,this._naam=e,this._geoJson=a,this.upDateSubScribers()}},{key:"getNaam",value:function(){return this._naam}},{key:"getUrl",value:function(){return this._url}},{key:"getType",value:function(){return this._type}},{key:"getGeoJson",value:function(){return this._geoJson}},{key:"upDateSubScribers",value:function(){this._subscribers.map((function(e){return e.update()}))}},{key:"subscribe",value:function(e){this._subscribers.push(e)}},{key:"unsubscribe",value:function(e){this._subscribers.filter((function(t){return t!==e}))}},{key:"getAsFeature",value:function(){return{type:"Feature",properties:this,geometry:this.getGeoJson()}}}]),e}(),j=a(158),_=["Grasland","BosGemengdBos","Akkerland","BosNaaldbos","Dodenakker","BosLoofbos","Spoorbaanlichaam","Heide","BebouwdGebied","Populieren","Boomgaard","Boomkwekerij","Zand","Duin","Fruitkwekerij","BasaltblokkenSteenglooiing","BosGriend","Braakliggend","Aanlegsteiger_terrein","DodenakkerMetBos","BronWel","GreppelDrogeSloot","Waterloop","MeerPlas","Droogvallend","Droogvallend_LAT","Zee_waterdeel","KasWarenhuis","Tank","Huizenblok","KloosterAbdij","Zwembad_gebouw","Sporthal","ParkeerdakParkeerdekParkeergarage","Gemeentehuis","Toren","WindmolenKorenmolen","Gemaal","Kapel","Uitzichttoren","Pompstation","Manege","Fort","Rune","Transformatorstation_gebouw","Tankstation","Museum","Kasteel","School","Waterradmolen","Ziekenhuis","Postkantoor","Bunker","Koeltoren","Vuurtoren","Watertoren","WindmolenWatermolen","Universiteit","RadiotorenTelevisietoren","Bezoekerscentrum","PsychiatrischZiekenhuisPsychiatrischCentrum","Gevangenis","Elektriciteitscentrale","Politiebureau","Radarpost","Schaapskooi","Lichttoren","Werf_gebouw","Radartoren","Dok","Veiling","Fabriek","Peilmeetstation","Windmolen","Schoorsteen","Crematorium","Stadion","Paleis","Kunstijsbaan","Telecommunicatietoren","Klokkentoren","Zendtoren","Brandweerkazerne","Stationsgebouw","MarkantGebouw","Reddingboothuisje","KliniekInrichtingSanatorium","Recreatiecentrum","Verkeerstoren","Koepel","KerncentraleKernreactor","StadskantoorHulpsecretarie","Hotel","Remise","Kerk","Brandtoren","Luchtwachttoren","Silo","Moskee","OverigReligieusGebouw","Synagoge","MilitairGebouw","Windturbine","Tol_gebouw","Boortoren","Observatorium","Wegrestaurant","Bomenrij","Koedam","HegHaag","Aanlegsteiger_inrichtingselement","Hekwerk","Wegafsluiting","Verkeersgeleider","Stuw","Muur","Geluidswering","StrekdamKribGolfbreker","Hoogspanningsleiding","Sluisdeur","Schietbaan","Kabelbaan","Paalwerk","Stormvloedkering","Tol_inrichtingselement","Boom","Strandpaal","Hoogspanningsmast","Wegwijzer","Grenspunt","Kruis","Pijler","Kilometerraaibord","Paal","Zendmast","Kilometerpaal","Windmolentje","Dukdalf","Peilschaal","Scheepvaartlicht","Botenhelling","KilometerpaalWater","KogelvangerSchietbaan","GedenktekenMonument","KilometerpaalSpoorweg","Radiotelescoop","MarkantObject","Seinmast","GpsKernnetpunt","Kilometerraaipaal","Klokkenstoel","Vlampijp","Busstation","Oliepompinstallatie","Hunebed","Uitzichtpunt","Baak","ZichtbaarWrak","Golfmeetpaal","Helikopterlandingsplatform","Kraan","Gaswinning_inrichtingselement","Metrostation","Treinstation","Sneltramhalte","Kaap","Havenhoofd","Vliedberg","Kabelbaanmast","Plaatsnaambord","Calamiteitendoorgang","Leiding","Luchtvaartlicht","Radiobaken","RdPunt","Weg","Spoor","Water","Wijk","Buurtschap","Gehucht","Deelkern","Buurt","Woonkern","Industriekern","Recreatiekern","Stadsdeel","TaludHoogteverschil","SteileRandAardrand","Wal","Trein","Metro","Tram","Sneltram","Gemengd","Werf_functioneelGebied","Park","Gebouwencomplex","Haven_functioneelGebied","Natuurgebied","Landgoed","Infiltratiegebied","Verdedigingswerk","Boswachterij","Tennispark","Bedrijventerrein","Eendenkooi","Woonwagencentrum","Transformatorstation_functioneelGebied","Zuiveringsinstallatie","SportterreinSportcomplex","Begraafplaats","Wildwissel","Jachthaven","Stortplaats","Bungalowpark","CampingKampeerterrein","Heemtuin","Volkstuinen","Vakantiepark","Sluizencomplex","Ijsbaan","DierentuinSafaripark","Zenderpark","Circuit","Viskwekerij_functioneelGebied","Ziekenhuiscomplex","Verzorgingsplaats","Openluchtmuseum","Crossbaan","Openluchttheater","Waterkering","Mosselbank","Milieustraat","Kassengebied","VliegveldLuchthaven","BotanischeTuin","Golfterrein","Zonnepark","Kartingbaan","Caravanpark","Visvijvercomplex","Erebegraafplaats","KazerneLegerplaats","MilitairOefengebiedSchietterrein","ZwembadComplex","Gaswinning_functioneelGebied","Zweefvliegveldterrein","Renbaan","Attractiepark","Grafheuvel","Windturbinepark","Tuincentrum","Zandwinning","Recreatiegebied","Skibaan","Productie-installatie","Groeve","Campus","Helikopterlandingsterrein","Zoutwinning","GebiedVoorRadioastronomie","NationaalPark","Grindwinning","Slipschool","Emplacement","Mijn","Oliewinning","Plantsoen","Arboretum","GebiedMetHogeObjecten","NatuurgebiedNatuurreservaat","Veerverbinding","Autosnelweg","RegionaleWeg","Hoofdweg","LokaleWeg","Straat","ParkeerplaatsCarpool","Parkeerplaats","RolbaanPlatform","StartbaanLandingsbaan","ParkeerplaatsPR","Polder","StreekVeld","Bosgebied","GeulVaargeul","Heidegebied","HeuvelBerg","BankOndieptePlaat","ZeegatZeearm","Eiland","KaapHoek","Duingebied","Zee_geografischGebied","Wad","TerpWierde","Watergebied","Hoogtepunt","Dieptepunt","Peil","PeilWinterpeil","PeilZomerpeil","Laagwaterlijn","Hoogtelijn","Dieptelijn","Hoogwaterlijn","Gemeente","Provincie","Land","TerritorialeZee","Waterschap","Overig_terrein","Overig_waterdeel","Overig_gebouw","Overig_inrichtingselement","Overig_planTopografie","Overig_functioneelGebied","Overig_wegdeel","Overig_geografischGebied","Terrein","Waterdeel","Gebouw","Inrichtingselement","PlanTopografie","Plaats","Relief","Spoorbaandeel","FunctioneelGebied","Wegdeel","GeografischGebied","Hoogte","RegistratiefGebied"];function S(e){return _.indexOf(e)}var N="";function R(){return(R=Object(E.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N=t,e.next=3,F((i=P(t),'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n            PREFIX brt: <http://brt.basisregistraties.overheid.nl/def/top10nl#>\n            \n            SELECT distinct * WHERE {\n              {?obj brt:naamNL "'.concat(i,'".} union {?obj brt:naam "').concat(i,'".} union {?obj brt:Fries "').concat(i,'".}\n            }\n')));case 3:return a=e.sent,e.next=6,a.text();case 6:if(a=e.sent,a=C(JSON.parse(a)),N===t){e.next=12;break}return e.abrupt("return",void 0);case 12:if(!(a.status>300)){e.next=14;break}return e.abrupt("return","error");case 14:return e.next=16,F('PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n            PREFIX brt: <http://brt.basisregistraties.overheid.nl/def/top10nl#>\n            \n            SELECT distinct ?obj WHERE {\n            { ?obj brt:naam ?label } UNION { ?obj brt:naamNL ?label } UNION {?obj brt:naamFries ?label}.\n              \n              FILTER(REGEX(?label, "'.concat(r=t,'", "i") || REGEX(?naamNl, "').concat(r,'", "i") || REGEX(?naamFries, "').concat(r,'", "i")).\n            }\n            LIMIT 31\n            '));case 16:if(n=e.sent,N===t){e.next=21;break}return e.abrupt("return",void 0);case 21:if(!(n.status>300)){e.next=23;break}return e.abrupt("return","error");case 23:return e.next=25,n.text();case 25:return n=e.sent,n=C(JSON.parse(n)),e.abrupt("return",T(a,n));case 28:case"end":return e.stop()}var r,i}),e)})))).apply(this,arguments)}function O(){return(O=Object(E.a)(y.a.mark((function e(t){var a,n,r,i,s,o,l,u,c,p,d,m,h,g,b;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.getUrl(),e.next=3,F("PREFIX brt: <http://brt.basisregistraties.overheid.nl/def/top10nl#>\n            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\n            SELECT * WHERE {\n                <".concat(a,"> ?prd ?obj.\n            }"));case 3:return n=e.sent,e.next=6,n.text();case 6:for(n=e.sent,n=JSON.parse(n),r=n.results.bindings,l=[],u=[],c=0;c<r.length;c++)p=r[c].prd.value,d=r[c].obj.value,"http://brt.basisregistraties.overheid.nl/def/top10nl#naam"===p?i=d:"http://brt.basisregistraties.overheid.nl/def/top10nl#naamNL"===p?s=d:"http://brt.basisregistraties.overheid.nl/def/top10nl#naamFries"===p?o=d:"http://www.w3.org/1999/02/22-rdf-syntax-ns#type"===p?l.push(G(d)):("isBAGwoonplaats"!==(p=G(p))&&"bebouwdeKom"!==p||(console.log(d),d=x(d),console.log(d)),u.push({key:p,value:d}));for(m=[],h=0;h<l.length;h++)g=S(l[h]),b=B(l[h]),m.push({index:g,type:b});m.sort((function(e,t){return e.index-t.index})),l=[],m.forEach((function(e){l.push(e.type)})),t.loadInAttributes(i,s,o,[m[0].type],u);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return"1"===e?"ja":"nee"}function B(e){return(e=e.split(/(?=[A-Z])/)).forEach((function(e,t,a){0!==t&&(a[t]=a[t].charAt(0).toLowerCase()+a[t].slice(1))})),e.join(" ")}function G(e){return e.replace(/.*#/,"")}function C(e){e=e.results.bindings;for(var t=[],a=function(a){var n,r=new w(e[a].obj.value);F((n=r.getUrl(),"PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n            PREFIX brt: <http://brt.basisregistraties.overheid.nl/def/top10nl#>\n            PREFIX geo: <http://www.opengis.net/ont/geosparql#>\n\n            SELECT distinct * WHERE {\n               <".concat(n,"> a ?type\n             \n              Optional{<").concat(n,"> brt:naam ?naam.}.\n              Optional{<").concat(n,"> brt:naamNL ?naamNl.}.\n              Optional{<").concat(n,"> brt:naamFries ?naamFries}.\n              Optional{<").concat(n,"> geo:hasGeometry/geo:asWKT ?wktJson}.                \n            }"))).then(function(){var e=Object(E.a)(y.a.mark((function e(t){var a,n,i,s,o,l,u,c,p,d;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.text();case 2:if(t=e.sent,0===(t=(t=JSON.parse(t)).results.bindings).length){e.next=27;break}if(!(a=t[0]).naam){e.next=11;break}n=a.naam.value,e.next=22;break;case 11:if(!a.naamNl){e.next=15;break}n=a.naamNl.value,e.next=22;break;case 15:if(!a.naamFries){e.next=19;break}n=a.naamFries.value,e.next=22;break;case 19:throw console.log(a),console.log(r),Error("No name");case 22:if(void 0!==a.type){for(o=[],l=0;l<t.length;l++)u=G(t[l].type.value),c=S(u),o.push({index:c,type:u});o.sort((function(e,t){return e.index-t.index})),p=o[0].type,i=B(p)}void 0!==a.wktJson&&(d=a.wktJson.value,s=j.parse(d)),r.setSecondProperties(n,i,s),e.next=28;break;case 27:console.log("error: ",t,r);case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.push(r)},n=0;n<e.length;n++)a(n);return t}function P(e){return e.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")}function T(e,t){return e.forEach((function(e){t=t.filter((function(t){return e.getUrl()!==t.getUrl()}))})),e.concat(t)}function F(e){return W.apply(this,arguments)}function W(){return(W=Object(E.a)(y.a.mark((function e(t){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.kadaster.triply.cc/datasets/kadaster/brt/services/brt/sparql",{method:"POST",headers:{"Content-Type":"application/sparql-query",Accept:"application/sparql-results+json"},body:t});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).getNamenGegevens=function(e){e&&function(e){return O.apply(this,arguments)}(a.props.clickedResult).then((function(e){a.setState({res:a.props.clickedResult})}))},a.state={res:void 0},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getNamenGegevens(this.props.clickedResult)}},{key:"render",value:function(){var e,t,a,n,i=this.state.res;if(i){var s,o;e=r.a.createElement("h1",null,i.getNaam()),t=r.a.createElement("h3",null,i.getTypeString()),i.getNaamFries()&&(o=r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("b",null,"Naam Fries:")),r.a.createElement("td",null,i.getNaamFries()))),(i.getNaamNl()||void 0===i.getNaamFries())&&(s=r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("b",null,"Naam Nederlands:")),r.a.createElement("td",null,i.getNaamNl()?i.getNaamNl():i.getNaam()))),a=r.a.createElement("div",null,r.a.createElement("table",{className:"namenTable"},r.a.createElement("tbody",null,s,o)),r.a.createElement("hr",null));var l=i.getAttributes().map((function(e){var t=e.value;return t.startsWith("http://")&&(t=r.a.createElement("a",{href:t},t)),r.a.createElement("tr",{key:e.key+e.value},r.a.createElement("td",null,e.key),r.a.createElement("td",null,t))}));n=r.a.createElement("table",{className:"attributeSectionObjectScreen"},r.a.createElement("tbody",null,l))}return r.a.createElement("div",{className:"objectScreen"},e,t,a,n)}}]),t}(r.a.Component),L=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",component:k}),r.a.createElement(b.a,{exact:!0,path:"/result",render:function(t){return r.a.createElement(f,{res:e.props.res,onClickItem:e.props.onClickItem})}}),r.a.createElement(b.a,{exact:!0,path:"/result/:id",render:function(t){return r.a.createElement(I,{clickedResult:e.props.clickedResult})}}))}}]),t}(r.a.Component),D=a(52),K=a(348);function H(e){var t="nonLoadingButton";return e.loading&&(t="loadingButton"),r.a.createElement("div",{className:"backButton  "+t},r.a.createElement("p",null,"\xa0"))}function A(e){var t="nonLoadingButton";return e.loading&&(t="loadingButton"),r.a.createElement("div",{className:"backButton cursorPointer "+t,onClick:e.onBack},r.a.createElement("p",null,"\u2190 Terug"))}var M=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(H,{loading:e.props.loading})}}),r.a.createElement(b.a,{render:function(t){return r.a.createElement(A,{loading:e.props.loading,onBack:e.props.onBack})}}))}}]),t}(r.a.Component),J=a(161),Z=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(J.BarLoader,{loading:this.props.loading,width:"100%",color:"#6495ED",height:4})}}]),t}(r.a.Component),z=(a(210),a(162)),V=a.n(z),U=a(50),X=function(){function e(){Object(o.a)(this,e),this._results=[],this._clickedResult=void 0,this._subscribers=[]}return Object(l.a)(e,[{key:"upDateSubScribers",value:function(){this._subscribers.map((function(e){return e.update()}))}},{key:"subscribe",value:function(e){this._subscribers.push(e)}},{key:"unsubscribe",value:function(e){this._subscribers.filter((function(t){return t!==e}))}},{key:"setClickedResult",value:function(e){this._clickedResult=e,this._clickedResult.subscribe(this),this.upDateSubScribers()}},{key:"getClickedResult",value:function(){return this._clickedResult}},{key:"clearClickedResult",value:function(){this._clickedResult&&(this._clickedResult.unsubscribe(this),this._clickedResult=void 0,this.upDateSubScribers())}},{key:"clearAll",value:function(){var e=this;this._clickedResult&&(this._clickedResult.unsubscribe(this),this._clickedResult=void 0),this._results.forEach((function(t){t.unsubscribe(e)})),this._results=[],this.upDateSubScribers()}},{key:"setResults",value:function(e){var t=this;this._results.forEach((function(e){e.unsubscribe(t)})),e.forEach((function(e){e.subscribe(t)})),this._results=e,this.upDateSubScribers()}},{key:"getResults",value:function(){return this._results}},{key:"clearResults",value:function(){var e=this;this._results.forEach((function(t){t.unsubscribe(e)})),this._results=[],this.upDateSubScribers()}},{key:"update",value:function(){this.upDateSubScribers()}},{key:"getAllObjectsAsFeature",value:function(){var e=[];return this._results.forEach((function(t){t.getGeoJson()&&e.push(t.getAsFeature())})),e}}]),e}(),Q=function(){function e(t,a,n,r,i,s){if(Object(o.a)(this,e),this._res=t,this._naam=a,this._naamNL=n,this._naamFries=r,this._types=i||[],s){this._overige=s;var l=this._res.getUrl();this._overige.unshift({key:"brt link",value:l})}else this._overige=[];void 0===this._naam&&(void 0!==this._naamNL?this._naam=this._naamNL:this._naam=this._naamFries),this._subscribers=[]}return Object(l.a)(e,[{key:"getNaamFries",value:function(){return this._naamFries}},{key:"getNaamNl",value:function(){return this._naamNL}},{key:"loadInAttributes",value:function(e,t,a,n,r){this._naam=e,this._naamNL=t,this._naamFries=a,this._types=n,this._overige=r;var i=this._res.getUrl();this._overige.unshift({key:"brt link",value:i}),void 0===this._naam&&(void 0!==this._naamNL?this._naam=this._naamNL:this._naam=this._naamFries)}},{key:"upDateSubScribers",value:function(){this._subscribers.map((function(e){return e.update()}))}},{key:"subscribe",value:function(e){this._subscribers.push(e)}},{key:"unsubscribe",value:function(e){this._subscribers.filter((function(t){return t!==e}))}},{key:"getUrl",value:function(){return this._res.getUrl()}},{key:"getNaam",value:function(){return this._naam}},{key:"getAsFeature",value:function(){return this._res.getAsFeature()}},{key:"getTypeString",value:function(){return this._types.join(", ")}},{key:"getAttributes",value:function(){return this._overige}}]),e}(),q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).mapInit=function(){a.map=h.a.map("map",{minZoom:7,center:[52.20936,5.2],zoom:8,maxBounds:[[56,10],[49,0]]}),h.a.tileLayer("https://geodata.nationaalgeoregister.nl/tiles/service/wmts/brtachtergrondkaart/EPSG:3857/{z}/{x}/{y}.png",{attribution:'Kaartgegevens &copy; <a href="https://www.kadaster.nl/">Kadaster</a> | <a href="https://www.verbeterdekaart.nl">Verbeter de kaart</a> '}).addTo(a.map),a.map.on("dblclick",a.handleDoubleClick),a.map.doubleClickZoom.disable(),a.geoJsonLayer=h.a.geoJSON([],{onEachFeature:a.addCenterMarker,pointToLayer:a.addMarker}).addTo(a.map),a.markerGroup=h.a.featureGroup().addTo(a.map)},a.addMarker=function(e,t){var n=h.a.marker(t).addTo(a.markerGroup);n.bindPopup('<div class = "marker">\n                    <b>'.concat(e.properties.getNaam(),'</b>\n                    <br/>\n                    <span class = "subTextMarker">').concat(e.properties.getType(),"</span><div>\n            "),{autoPan:!1,closeButton:!1}),n.on("mouseover",(function(e){this.openPopup()})),n.on("mouseout",(function(e){this.closePopup()})),n.on("click",(function(){a.onClickItem(e.properties)}))},a.addCenterMarker=function(e,t){if("Point"!==e.geometry.type){var n=g.centroid(e),r=n.geometry.coordinates[0],i=n.geometry.coordinates[1],s=h.a.marker([i,r]).addTo(a.markerGroup);s.bindPopup('<div class = "marker">\n                    <b>'.concat(e.properties.getNaam(),'</b>\n                    <br/>\n                    <span class = "subTextMarker">').concat(e.properties.getType(),"</span><div>\n            "),{autoPan:!1,closeButton:!1}),s.on("mouseover",(function(e){this.openPopup()})),s.on("mouseout",(function(e){this.closePopup()})),s.on("click",(function(){a.onClickItem(e.properties)})),t.bindPopup('<div class = "marker">\n                    <b>'.concat(e.properties.getNaam(),'</b>\n                    <br/>\n                    <span class = "subTextMarker">').concat(e.properties.getType(),"</span><div>\n            "),{autoPan:!1,closeButton:!1}),t.on("mouseover",(function(e){this.openPopup()})),t.on("mouseout",(function(e){this.closePopup()})),t.on("click",(function(){a.onClickItem(e.properties)}))}},a.onClickItem=function(e){var t=new Q(e);a.state.results.setClickedResult(t);var n=a.getCenterGeoJson(e.getGeoJson()),r=a.map.getZoom();r<10&&(r=10),a.map.setView(n,r),a.props.history.push("/result/".concat(e.getNaam()))},a.getCenterGeoJson=function(e){var t=g.centroid(e),a=t.geometry.coordinates[0];return[t.geometry.coordinates[1],a]},a.onSearchChange=function(e,t){var n=t.value;n?(a.setState({searchQuery:n}),a.state.results.clearClickedResult(),a.doSearch(n),"/"===a.props.location.pathname?a.props.history.push("/result"):"/result"!==a.props.location.pathname&&a.props.history.goBack()):(a.setState({searchQuery:""}),a.state.results.clearAll(),"/result"===a.props.location.pathname?a.props.history.goBack():"/"!==a.props.location.pathname&&a.props.history.go(-2)),a.map&&a.map.setView([52.20936,5.2],8)},a.doSearch=function(e){a.setState({isFetching:!0}),function(e){return R.apply(this,arguments)}(e.trim()).then((function(e){"error"===e?a.setState({isFetching:!1}):void 0!==e&&(a.setState({isFetching:!1}),a.state.results.setResults(e))}))},a.handleDeleteClick=function(){a.onSearchChange({},{value:""}),a.state.results.clearResults()},a.handleOnBackButtonClick=function(){a.props.history.goBack();var e=Object(b.e)(a.props.location.pathname,{path:"/result/:id",exact:!0,strict:!0});if("/result"===a.props.location.pathname)a.setState({searchQuery:""}),a.state.results.clearResults(),a.map.setView([52.20936,5.2],8);else if(e){a.state.results.clearClickedResult();var t=100,n=a.state.results;n.getResults().length>40?t=600:n.getResults().length>20?t=200:n.getResults().length>10&&(t=100),setTimeout((function(){var e=a.markerGroup.getBounds(),t=e.getEast()-e.getWest(),n=e.getNorth()-e.getSouth();console.log(t),console.log(n),t>1.8||n>1.3?a.map.fitBounds(a.markerGroup.getBounds()):t>1.3||n>1?a.map.fitBounds(a.markerGroup.getBounds().pad(.5)):t>.1||n>.1?a.map.fitBounds(a.markerGroup.getBounds().pad(.8)):t>.01||n>.01?a.map.fitBounds(a.markerGroup.getBounds().pad(5)):a.map.fitBounds(a.markerGroup.getBounds().pad(30))}),t)}},a.update=function(){var e=a.state.results;if(a.setState({results:e}),!a.updateIng){a.updateIng=!0,a.setState({updateIng:!0});var t=0;a.state.results.getClickedResult()?t=0:e.getResults().length>40?t=600:e.getResults().length>20?t=200:e.getResults().length>10&&(t=100),setTimeout((function(){a.updateMap(e)}),t)}},a.updateMap=function(e){if(a.markerGroup.clearLayers(),a.geoJsonLayer.clearLayers(),a.state.results.getClickedResult()){var t=a.state.results.getClickedResult().getAsFeature();a.geoJsonLayer.addData(t)}else{a.state.results.getClickedResult()&&console.log("fout");var n=e.getAllObjectsAsFeature();a.geoJsonLayer.addData(n)}a.setState({updateIng:!1}),a.updateIng=!1},a.state={searchQuery:"",isFetching:!1,results:new X,updateIng:!1},a.state.results.subscribe(Object(p.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.mapInit(),this.props.history.push("/")}},{key:"handleDoubleClick",value:function(e){var t=e.latlng;console.log(t)}},{key:"render",value:function(){var e,t,a=this;return e=this.state.searchQuery?r.a.createElement(D.a,{name:"delete",link:!0,onClick:this.handleDeleteClick}):r.a.createElement(D.a,{name:"search"}),t=this.state.updateIng?"mapHolderLoading":"mapHolder",r.a.createElement("section",{className:"App"},r.a.createElement("div",{className:"brtInfo"},r.a.createElement(U.b,{to:"/",onClick:function(){a.setState({searchQuery:""}),a.state.results.clearResults()}},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Basisregistratie Topografie"),r.a.createElement("img",{src:V.a,alt:"kadaster logo"}))),r.a.createElement("div",{className:"searchBar"},r.a.createElement(K.a,{input:{fluid:!0},value:this.state.searchQuery,noResultsMessage:"Geen resultaat",icon:e,onSearchChange:this.onSearchChange,open:!1})),r.a.createElement("div",{className:"resultsContainer"},r.a.createElement(M,{loading:this.state.isFetching,onBack:this.handleOnBackButtonClick}),r.a.createElement("div",{className:"loaderDiv"},r.a.createElement(Z,{loading:this.state.isFetching})),r.a.createElement("div",{className:"resultPartContainer"},r.a.createElement(L,{res:this.state.results,clickedResult:this.state.results.getClickedResult(),onClickItem:this.onClickItem}))),r.a.createElement("div",{className:"footer"},r.a.createElement("a",{href:"https://zakelijk.kadaster.nl/brt"},"Leer meer over de brt"))),r.a.createElement("div",{className:t},r.a.createElement(Z,{loading:this.state.updateIng}),r.a.createElement("div",{id:"map"})))}}]),t}(r.a.Component),$=Object(b.f)(q);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(U.a,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[178,1,2]]]);
//# sourceMappingURL=main.d75eb2b4.chunk.js.map