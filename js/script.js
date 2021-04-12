const leeftijdsGrens = 18;
const isFemale = false;
const driverStatus = 'bob';

var leeftijd = 19;
var status = 'bos';

if (leeftijd >= leeftijdsGrens) {
    console.log("Deze persoon mag naar binnen");
}
else {
    console.log("Deze persoon is te jong om binnen te mogen");
}

if (isFemale) {
    console.log("Welkom mevrouw");
}
else {
    console.log("Vandaag is het alleen voor dames, maar morgen ben je weer welkom");
}

if (status == driverStatus) {
    console.log("Deze persoon mag naar huis rijden");
}
else {
    console.log("Waar is de chauffeur?");
}

