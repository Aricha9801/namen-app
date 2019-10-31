import React from 'react';

class StartScreen extends React.Component {
    render() {
        return (
            <div className="startScreen">
                <p className="boldHeaderText">Hoe werkt het?</p>
                <p className="explainText">
                    De brt bestaat uit objecten. Al deze objecten hebben een naam. Objecten kunnen gemeentes, buurten of provincies zijn.
                    Je kan een naam zoeken in het zoekveld. Probeer verschillende dingen en zie wat je kan ontdekken. Ook kan je zoeken met de kaart. Klik met de rechtermuis knop op de kaart en zie wat er gebeurt.
                    Als je bent ingezoomd, krijg je ook nauwkeurigere klik resultaten.
                    Sommige objecten zijn verdeeld in stukken (Bijv rivieren). Als je iets interessant vindt, kopieer de naam in het zoekveld, misschien dat je meer te zien krijgt.
                </p>
                <p className="boldHeaderText">Wat is het?</p>
                <p className="explainText">Dit is een applicatie die objecten uit de brt haalt. Denk hierbij
                    aan buurten, straaten, meren en zelf bomen. Deze objecten hebben allemaal een naam.
                    Aan de hand van deze naam kan je de objecten ophalen. Deze objecten hebben ook andere
                    eigenschappen die je kunt bekijken. (nog aanvullen)</p>
                <p className="boldHeaderText">Wie doe dit?</p>
                <p className="explainText">brt (nog aanvullen)</p>
                <p className="boldHeaderText">Andere leuke dingen gedaan met de brt</p>
                <p className="explainText"><a href="https://labs.kadaster.nl/stories/religieuze-gebouwen/">Datastroy
                    religieuze gebouwen</a> waar brt informatie over religieuze gebouwen wordt getoond op een
                    interactieve manier.</p>
            </div>
        )
    }
}

export default StartScreen;