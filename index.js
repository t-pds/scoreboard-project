let homeScore = 0;
let homeScoreElement = document.getElementById("home-score-el");

function addHomeScoreOne(){
    homeScore = homeScore + 1;
    homeScoreElement.innerText = homeScore;
}

function addHomeScoreTwo(){
    homeScore = homeScore + 2;
    homeScoreElement.innerText = homeScore;
}

function addHomeScoreThree(){
    homeScore = homeScore + 3;
    homeScoreElement.innerText = homeScore;
}

let guestScore = 0;
let guestScoreElement = document.getElementById("guest-score-el");

function addGuestScoreOne(){
    guestScore = guestScore + 1;
    guestScoreElement.innerText = guestScore;
}

function addGuestScoreTwo(){
    guestScore = guestScore + 2;
    guestScoreElement.innerText = guestScore;
}

function addGuestScoreThree(){
    guestScore = guestScore + 3;
    guestScoreElement.innerText = guestScore;
}

function resetPoints(){
    homeScore = 0;
    guestScore = 0;
    homeScoreElement.innerText = homeScore;
    guestScoreElement.innerText = guestScore;
}
