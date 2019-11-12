/**
 * Libs
 */
import L from "leaflet";
import React from 'react';
import * as turf from '@turf/turf';

/**
 * UI
 */
import Routes from './routes/Routes'
import {Search, Icon, Dropdown} from 'semantic-ui-react'
import NavBar from "./components/NavBar";
import Loader from "./components/Loader";

/**
 * Assets
 */
import './App.css';
import KadasterImg from './assets/Logo-kadaster.png';
import MarkerGold from './assets/GoldMarker.png';

/**
 * Netwerk
 */
import *  as Communicator from './network/Communicator' ;
import {Link, withRouter, matchPath} from "react-router-dom";

/**
 * Model
 */
import ResultatenHouder from './model/ResultatenHouder';
import ClickedResultaat from "./model/ClickedResultaat";
import {GoldIcon, DefaultIcon} from "./components/GoldIcon";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: "",
            isFetching: false,
            results: new ResultatenHouder(),
            updateIng: false,
            currentSelected: "tsp"
        }

        //subscribe aan de resulatatenHouder
        this.state.results.subscribe(this);
    }

    /**
     * Bij comonent did mount de kaart initaliseren en terug naar het hoofdscherm gaan
     **/
    componentDidMount() {
        this.mapInit();
        this.props.history.push('/');
    }

    /**
     * Initeert de kaart.
     **/
    mapInit = () => {
        //opties van de kaart
        this.map = L.map(
            'map',
            {
                minZoom: 8,
                center: [52.20936, 5.2],
                zoom: 8,
                maxBounds: [
                    [56, 10],
                    [49, 0],
                ]
            });

        //zet de kaart tile layer aka de brt
        L.tileLayer('https://geodata.nationaalgeoregister.nl/tiles/service/wmts/brtachtergrondkaart/EPSG:3857/{z}/{x}/{y}.png', {
            attribution: 'Kaartgegevens &copy; <a href="https://www.kadaster.nl/" target="_blank" rel = "noreferrer noopener">Kadaster</a> | <a href="https://www.verbeterdekaart.nl" target="_blank" rel = "noreferrer noopener">Verbeter de kaart</a> '
        }).addTo(this.map);

        //Wanneer je dubbelklikt op de kaart krijg dan alle locaties terug er om heen.
        this.map.on('contextmenu', this.handleRightMouseClick);

        //zet de geojson layer en de functies die worden aangeroepen.
        //On each feature elke geojson object
        //point to layer bij elke marker
        this.geoJsonLayer = L.geoJSON([], {
            onEachFeature: this.handleGeoJsonLayerDrawing,
            pointToLayer: this.addMarker,
            style: this.getStyle
        }).addTo(this.map);

        //de groep voor de markers
        this.markerGroup = L.featureGroup().addTo(this.map);
    };

    getStyle(feature){
        if(feature.properties){
            // this.getHexFromColor()
        }
    }

    getHexFromColor(color){
        if(color === "yellow"){
            return "#FDFD66";
        }else {
            return undefined;
        }
    }

    /**
     * Handel de dubbel klik.
     * Als je op de dubbel klikt op de kaart krijg je alle nabije namen.
     * Moet nog geimplemteert worden.
     **/
    handleRightMouseClick = (e) => {
        let latLong = e.latlng;

        let match = matchPath(this.props.location.pathname, {
            path: "/result/:id",
            exact: true,
            strict: true
        })

        this.setState({
            searchQuery : ""
        })
        this.state.results.clearAll();

        if(match){
            this.props.history.goBack();
        } else if (this.props.location.pathname !== "/result") {
            this.props.history.push(`/result`);
        }

        let bounds = this.map.getBounds();

        this.setState({
            isFetching: true
        })

        Communicator.getFromCoordinates(latLong.lat, latLong.lng, bounds.getNorth(), bounds.getWest(), bounds.getSouth(), bounds.getEast()).then(res => {
            if(res === "error"){

            }else if(res !== undefined){
                this.state.results.setDoubleResults(res);
                this.setState({
                    isFetching: false
                })
            }
        });
    }

    /**
     * De functie die de kaart aanroept elke keer als deze een marker wilt toevoegen.
     **/
    addMarker = (feature, latlng) => {
        let marker = L.marker(latlng, ).addTo(this.markerGroup);

        //dit is de pop up en de html die tevoorschijn komt.
        marker.bindPopup(`<div class = "marker">
                    <b>${feature.properties.getNaam()}</b>
                    <br/>
                    <span class = "subTextMarker">${feature.properties.getType()}</span><div>
            `, {
            autoPan: false,
            closeButton: false
        });


        let onHover = function(e){
            this.openPopup();
            this.setIcon(GoldIcon);
        }.bind(marker);

        let onHoverOff = function(e){
            this.closePopup();
            this.setIcon(DefaultIcon);
        }.bind(marker);

        //wanner je over de marker gaat laat de pop up zien
        marker.on('mouseover', onHover);
        feature.properties._setOnHover(onHover);

        //wanneer je er van af gaat laat het weg
        marker.on('mouseout', onHoverOff);
        feature.properties._setOnHoverOff(onHoverOff);

        //wanneer je er op klikt ga naar die marker
        marker.on('click', () => {
            this.onClickItem(feature.properties)
        });

        return marker;
    };

    /**
     * Tekent de objecten op de kaart.
     **/
    handleGeoJsonLayerDrawing = (feature, layer) => {
        if (feature.geometry.type !== 'Point') {
            //vindt eerst de center
            var latLong = this.getCenterGeoJson(feature);

            //op deze center voeg een marker toe
            let marker = this.addMarker(feature, latLong);

            //Dit is de pop up die getoond wordt wanneer je over het getekende deel gaat.
            layer.bindPopup(`<div class = "marker">
                    <b>${feature.properties.getNaam()}</b>
                    <br/>
                    <span class = "subTextMarker">${feature.properties.getType()}</span><div>
            `, {
                autoPan: false,
                closeButton: false
            });

            //laat de pop up zien als je erover gaat
            layer.on('mouseover', function (e) {
                marker.openPopup();
                marker.setIcon(GoldIcon);
            });

            //sluit de pop up als je er van af gaat
            layer.on('mouseout', function (e) {
                marker.closePopup();
                marker.setIcon(DefaultIcon);
            });

            //als je er op klikt ga er dan naartoe
            layer.on('click', () => {
                this.onClickItem(feature.properties)
            });
        }
    }

    /**
     * Wanneer iemand op een marker of getekend deel klikt, voer deze methode uit.
     **/
    onClickItem = (res) => {
        //maak een nieuwe clickedresultaat
        let clickedRes = new ClickedResultaat(res);

        //zet de resultatenhouder de clickedresultaat.
        this.state.results.setClickedResult(clickedRes);

        //krijg de center van de plek waar je naartoe wilt.
        let center = this.getCenterGeoJson(res.getGeoJson());
        let zoom = this.map.getZoom();

        //als de gebruiker ingezoomt is, zoom dan niet uit.
        if (zoom < 10) {
            zoom = 10;
        }

        //zet de view.
        this.map.setView(center, zoom);

        this.props.history.push(`/result/${res.getNaam()}`);
    }

    /**
     * Krijg de center van een geojson object.
     **/
    getCenterGeoJson = (geojson) => {
        //kijk eerst naar de center
        var centroid = turf.center(geojson);

        try {
            //als deze niet in het geojson object ligt, gebruik dan de centroid
            if (!turf.booleanContains(geojson, centroid)) {
                centroid = turf.centroid(geojson);
            }
        } catch (e) {
        }

        //krijg de lat en long
        var lon = centroid.geometry.coordinates[0];
        var lat = centroid.geometry.coordinates[1];

        return [lat, lon];
    }

    /**
     * Wordt aangeroepen wanneer er iets wordt getype
     **/
    onSearchChange = (e, data) => {
        let text = data.value;

        //als de text iets heef
        if (text) {
            //zet dan eerst de state
            this.setState({
                searchQuery: text
            })

            //haal vorige resultaten weg
            this.state.results.clearClickedResult();
            this.state.results.clearDoubleResults();

            //roep de methode aan die de zoek functie aanroept
            this.doSearch(text);

            //Als je op het hoofscherm bent ga dan naar de result screen
            if (this.props.location.pathname === "/") {
                this.props.history.push('/result')

                //als je niet op het resultaten scherm zit ga dan eentje terug
            } else if (this.props.location.pathname !== "/result") {
                this.props.history.goBack();
            }
        } else {
            //als de zoekbar text leeg is
            this.setState({
                searchQuery: "",
                isFetching : false
            });

            //verwijder alle resultaten
            this.state.results.clearAll();

            //ga terug naar het hoofdscherm
            if (this.props.location.pathname === "/result") {
                this.props.history.goBack();
            } else if (this.props.location.pathname !== '/') {
                this.props.history.go(-2);
            }
        }

        //centreer de kaart weer.
        if (this.map) {
            this.map.setView([52.20936, 5.2], 8);
        }
    }

    /**
     * Roept de communicator aan en haalt de resultaten op.
     **/
    doSearch = (text) => {
        //zet dit op true zodat de loader aan gaat.
        this.setState({
            isFetching: true
        });

        /**
         * Roep de getMatch functie aan van de communicator
         **/
        Communicator.getMatch(text.trim(), this.state.currentSelected).then(res => {
            //als je een error terug krijgt, dan betekent dat je wel een antwoord hebt maar dat het niet werkt.
            if (res === "error") {
                this.setState({
                    isFetching: false
                })

                //als je undefined terug krijgt betekent het dat het een oude search query is.
                //Dus als het niet undefined is, betekent dat het het huidige search query is.
            } else if (res !== undefined) {
                this.setState({
                    isFetching: false
                })
                this.state.results.setResults(res);
            }
        });
    }

    /**
     * Wanneer er op het kruisje in de search bar wordt geklikt.
     **/
    handleDeleteClick = () => {
        this.onSearchChange({}, {value: ""});
    }

    /**
     * Wanneer er op de terug knop wordt geklikt in de applicatie aka <-- terug.
     **/
    handleOnBackButtonClick = () => {
        /**
         * Kijk of je op een resultaat scherm bent
         */
        let match = matchPath(this.props.location.pathname, {
            path: "/result/:id",
            exact: true,
            strict: true
        })

        if(this.state.results.getDoubleResults().length > 1 && !match){
            this.state.results.clearDoubleResults();

            if(this.state.searchQuery === ""){
                this.props.history.goBack();
            }
        }else if (this.props.location.pathname === "/result") {
            //Als je op de result screen bent ga dan terug naar het hoofdscherm
            this.handleDeleteClick();
        } else if (match) {
            //ga eerst een pagina terug
            this.props.history.goBack();

            //Als je op een geklikte resultaat scherm bent ga dan terug naar de result scherm
            this.state.results.clearClickedResult();

            //krijg een timeout die je moet wachten voordat je de bounds kan ophalen
            let timeout = this.getTimeOut() + 10;

            //na deze timout haal de bounds op
            setTimeout(() => {
                try {
                    let bounds = this.markerGroup.getBounds();
                    let width = bounds.getEast() - bounds.getWest();
                    let height = bounds.getNorth() - bounds.getSouth();

                    //gebasseerd op breedte en lengte zoom uit
                    if (width > 1.8 || height > 1.3) {
                        this.map.fitBounds(this.markerGroup.getBounds());
                    } else if (width > 1.3 || height > 1.0) {
                        this.map.fitBounds(this.markerGroup.getBounds().pad(0.5));
                    } else if (width > 0.1 || height > 0.1) {
                        this.map.fitBounds(this.markerGroup.getBounds().pad(0.8));
                    } else if (width > 0.01 || height > 0.01) {
                        this.map.fitBounds(this.markerGroup.getBounds().pad(5));
                    }

                    //als het te ver is ingezoomt ga dan iets terug.
                    if(this.map.getZoom() > 10){
                        this.map.setZoom(10);
                    }
                } catch (e) {console.log(e)};
            }, timeout);
        }
    }

    /**
     * Krijg een timeout nummer gebasseerd op het aantal resultaten.
     * @returns {number}
     */
    getTimeOut = () => {
        let timeout = 100;
        let results = this.state.results;

        if (results.getResults().length > 40 || results.getDoubleResults().length > 1) {
            timeout = 600;
        } else if (results.getResults().length > 20) {
            timeout = 200;
        } else if (results.getResults().length > 10) {
            timeout = 100;
        }

        return timeout;
    }

    /**
     * Deze methode wordt aangeropen elke keer als de resultaten houder wordt geupdate.
     */
    update = () => {
        let results = this.state.results;

        this.setState({
            results: results
        })

        //updateing variabele kijkt of de kaart nu bezig is met het wachten op updating/
        if (!this.updateIng) {
            this.updateIng = true;

            //dit is voor de lader boven op de kaart
            this.setState({
                updateIng: true
            });

            //krijg een timeout ms
            let timeout;

            if (this.state.results.getClickedResult()) {
                timeout = 0;
            } else {
                timeout = this.getTimeOut();
            }

            //hierna roep de de settimout aan
            setTimeout(() => {
                this.updateMap(results);
            }, timeout);
        }
    }

    dropDownSelector = (e, v) => {
        if(this.state.currentSelected !== v.value){
            this.setState({
                currentSelected : v.value,
                isFetching : false
            }, () => {
                this.handleDeleteClick();
            })
        }
    }

    /**
     * Update de kaart.
     **/
    updateMap = () => {
        let results = this.state.results;

        //haal eerst alle marker weg
        this.markerGroup.clearLayers();
        this.geoJsonLayer.clearLayers();

        //als er een geklikt resultaat is, render dan alleen deze
        if (this.state.results.getClickedResult()) {
            let feature = this.state.results.getClickedResult().getAsFeature();
            this.geoJsonLayer.addData(feature);
        }else if(this.state.results.getDoubleResults().length > 0){
            let geoJsonResults = results.getClickedAllObjectsAsFeature();
            this.geoJsonLayer.addData(geoJsonResults);
        } else {
            //anders render alle opgehaalde resultaten.
            if (this.state.searchQuery) {
                let geoJsonResults = results.getSearchedAllObjectsAsFeature();
                this.geoJsonLayer.addData(geoJsonResults);
            }
        }

        //zet de updating naar false.
        this.setState({
            updateIng: false
        });
        this.updateIng = false;
    }

    onFocus = () => {
        if(this.state.searchQuery){
            this.onSearchChange({},{value: this.state.searchQuery});
        }else{
            this.handleDeleteClick();
        }
    }

    render() {
        const options = Communicator.getOptions();

        let icon;
        let className;

        if (this.state.searchQuery || this.state.results.getDoubleResults().length > 0) {
            icon = <Icon name='delete' link onClick={this.handleDeleteClick}/>;
        } else {
            icon = <Icon name='search'/>;
        }

        if (!this.state.updateIng) {
            className = "mapHolder";
        } else {
            className = "mapHolderLoading"
        }

        return (
            <section className="App">
                <div className="brtInfo">
                    <Link to="/" onClick={() => {
                        this.handleDeleteClick();
                    }}>
                        <div className="header">
                            <h1>Basisregistratie Topografie</h1><img src={KadasterImg} alt="kadaster logo"/>
                        </div>
                    </Link>
                    <div className="searchBar">
                        <Search input={{fluid: true}}
                                value={this.state.results.getDoubleResults().length > 1 ? "[ Kaartresultaten worden getoond ]" : this.state.searchQuery}
                                noResultsMessage="Geen resultaat"
                                icon={icon}
                                onSearchChange={this.onSearchChange}
                                open={false}
                                onFocus = {this.onFocus}
                        />
                    </div>
                    <div className="resultsContainer">
                        <NavBar
                            loading={this.state.isFetching}
                            onBack={this.handleOnBackButtonClick}
                        />
                        <div className="loaderDiv">
                            <Loader
                                loading={this.state.isFetching}
                            />
                        </div>
                        <div className="resultPartContainer">
                            <Routes
                                res={this.state.results}
                                clickedResult={this.state.results.getClickedResult()}
                                onClickItem={this.onClickItem}
                            />
                        </div>
                    </div>
                    <div className="footer">
                        <Dropdown
                            className = "cogIcon"
                            icon='cog'
                            upward = {true}
                        >
                            <Dropdown.Menu>
                                <Dropdown.Header
                                    content = "Selecteer end-point"
                                />
                                <Dropdown.Divider
                                />
                                {options.map((option) => (
                                    <Dropdown.Item
                                        className = "dropDownItem"
                                        key={option.value} {...option}
                                        active = {this.state.currentSelected === option.value}
                                        onClick = {this.dropDownSelector}
                                    />
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                        <a href="https://zakelijk.kadaster.nl/brt" target="_blank" rel = "noreferrer noopener">Lees meer over de Basisregistratie Topografie (BRT)</a>
                    </div>
                </div>
                <div className={className}>
                    <Loader
                        loading={this.state.updateIng}
                    />
                    <div id="map"/>
                </div>
            </section>
        )
    }
}

export default withRouter(App);