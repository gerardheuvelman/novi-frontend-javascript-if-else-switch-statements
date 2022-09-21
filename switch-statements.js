// ==========================================
// Opdracht 1: schrijf een switch statement die op basis van de volgende variabele een bijbehorende foutmelding in de console logt.
// ==========================================

const errorCode = 1;

// Je mag ervanuit gaan dat deze variabele altijd een waarde tussen de 0 en de 4 bevat. Deze codes hebben de volgende betekenissen (foutmeldingen):
// 0: "Geen watertoevoer"
// 1: "Temperatuur te laag"
// 2: "Koffiebonen op"
// 3: "Afvalbak vol"
// 4: "Geen druk"

// Verwachtte uitkomsten:
// const errorCode = 0 geeft "Geen watertoevoer" in de terminal
// const errorCode = 4 geeft "Geen druk" in de terminal
// etc.

switch (errorCode) {
    case 0:
        console.log("Geen watertoevoer")
        break
    case 1:
        console.log("Temperatuur te laag")
        break
    case 2:
        console.log("Koffiebonen op")
        break
    case 3:
        console.log("Afvalbak vol")
        break
    case 4:
        console.log("Geen druk")
        break
    default:
        console.log("Onbekende fout")
}

// ==========================================
// Opdracht 2: schrijf een switch statement die op basis van de volgende variabele een bijbehorende foutmelding in de console logt.
// ==========================================

const monitorColor = "red";

// Deze variabele zal altijd een kleur bevatten. De specifieke kleuren waar een melding bij gemaakt moet worden zijn: "red", "green", "yellow" en "orange".
// Deze codes zijn gelinkt aan de volgende meldingen:
// "green": "Hartslag stabiel"
// "yellow": "Hartslag verhoogd"
// "orange": "Kritieke hartslag, actie vereist!"
// "red": "Kritieke hartslag, actie vereist!"
// Bij alle andere kleuren is de status van de hartslag onbekend.

// Verwachtte uitkomsten:
// const monitorColor = "red" geeft "Kritieke hartslag, actie vereist!" in de terminal
// const monitorColor = "green" geeft "Hartslag stabiel" in de terminal
// etc.

const HeartRate = {
    Green: "Hartslag stabiel",
    Yellow: "Hartslag verhoogd",
    Orange: "Ernstig verhoogde hartslag, actie vereist!",
    Red: "Kritieke hartslag, onmiddelijke actie vereist!"
}
const currentHeartRate = HeartRate.Red
console.log(currentHeartRate)

switch (currentHeartRate) {
    case HeartRate.Green:
    case HeartRate.Yellow:
    case HeartRate.Orange:
    case HeartRate.Red:
        console.log(currentHeartRate)
        break
    default:
        console.log("Er ging iets fout.")
}


// ==========================================
// [BONUSOPDRACHT] - optioneel: kun je de switch-statement uit opdracht 2 ook opschrijven met een aantal if-statements?
// ==========================================
if (monitorColor === "green") {
    console.log("Hartslag stabiel")
} else if (monitorColor === "yellow") {
    console.log("Hartslag verhoogd")
} else if (monitorColor === "orange") {
    console.log("Ernstig verhoogde hartslag, actie vereist!")
} else if (monitorColor === "red") {
    console.log("Kritieke hartslag, onmiddelijke actie vereist!")
}
