
// Pseudocode
    //retrieve time from api
    //append timeblocks to page in order
        // color code timeblocks based of off current time
            // use for loop
        // add ability to add text to block
        // have a button that saves event to local storage

var today = moment();
var currentHour = today.format("HH")
var currentDay = today.format("MMMM Do YYYY")
var daycontainer = document.getElementById("currentDay")
var container = document.querySelector(".container");
var inputs = document.querySelectorAll("input");
var input09 = document.getElementById("09i");
var save09 = document.getElementById("09b");

var input10 = document.getElementById("10i");
var save10 = document.getElementById("10b");

var input11 = document.getElementById("11i");
var save11 = document.getElementById("11b");

var input12 = document.getElementById("12i");
var save12 = document.getElementById("12b");

var input01 = document.getElementById("01i");
var save01 = document.getElementById("01b");

var input02 = document.getElementById("02i");
var save02 = document.getElementById("02b");

var input03 = document.getElementById("03i");
var save03 = document.getElementById("03b");

var input04 = document.getElementById("04i");
var save04 = document.getElementById("04b");

var input05 = document.getElementById("05i");
var save05 = document.getElementById("05b");


// Display Day
daycontainer.textContent = currentDay;

console.log(inputs);
console.log("Current Hour " + currentHour);

for ( i = 0 ; i < 9 ; i++){
    timeblock = 9+i;

    if(currentHour-timeblock > 0){
        console.log(timeblock);
        var time = moment(timeblock, "HH").format("hh");
        console.log("past " + time);
        $("input").eq(i).addClass("bg-secondary");

    } else if( currentHour-timeblock == 0) {
        console.log(timeblock);
        var time = moment(timeblock, "HH").format("hh");
        console.log("current " + time);
        $("input").eq(i).addClass("bg-danger");

    } else {
        console.log(timeblock);
        var time = moment(timeblock, "HH").format("hh");
        console.log("future " + time);
        $("input").eq(i).addClass("bg-success");

    };
};

renderLastRegistered09();

function renderLastRegistered09(){

    var input = localStorage.getItem("input09");

    if (!input){
        return;
    }

    input09.value = input;
}

save09.addEventListener("click", function(event){
    event.preventDefault();

    var input = document.getElementById("09i").value;

    localStorage.setItem("input09", input);

    console.log(input);
    renderLastRegistered09();
});

renderLastRegistered10();

function renderLastRegistered10(){

    var input = localStorage.getItem("input10");

    if (!input){
        return;
    }

    input10.value = input;
}

save10.addEventListener("click", function(event){
    event.preventDefault();

    var input = document.getElementById("10i").value;

    localStorage.setItem("input10", input);

    console.log(input);
    renderLastRegistered10();
});

renderLastRegistered11();

function renderLastRegistered11(){

    var input = localStorage.getItem("input11");

    if (!input){
        return;
    }

    input11.value = input;
}

save11.addEventListener("click", function(event){
    event.preventDefault();

    var input = document.getElementById("11i").value;

    localStorage.setItem("input11", input);

    console.log(input);
    renderLastRegistered11();
});

renderLastRegistered12();

function renderLastRegistered12(){

    var input = localStorage.getItem("input12");

    if (!input){
        return;
    }

    input12.value = input;
}

save12.addEventListener("click", function(event){
    event.preventDefault();

    var input = document.getElementById("12i").value;

    localStorage.setItem("input12", input);

    console.log(input);
    renderLastRegistered12();
});

renderLastRegistered01();

function renderLastRegistered01(){

    var input = localStorage.getItem("input01");

    if (!input){
        return;
    }

    input01.value = input;
}

save01.addEventListener("click", function(event){
    event.preventDefault();

    var input = document.getElementById("01i").value;

    localStorage.setItem("input01", input);

    console.log(input);
    renderLastRegistered01();
});

renderLastRegistered02();

function renderLastRegistered02(){

    var input = localStorage.getItem("input02");

    if (!input){
        return;
    }

    input02.value = input;
}

save02.addEventListener("click", function(event){
    event.preventDefault();

    var input = document.getElementById("02i").value;

    localStorage.setItem("input02", input);

    console.log(input);
    renderLastRegistered02();
});

renderLastRegistered03();

function renderLastRegistered03(){

    var input = localStorage.getItem("input03");

    if (!input){
        return;
    }

    input03.value = input;
}

save03.addEventListener("click", function(event){
    event.preventDefault();

    var input = document.getElementById("03i").value;

    localStorage.setItem("input03", input);

    console.log(input);
    renderLastRegistered03();
});

renderLastRegistered04();

function renderLastRegistered04(){

    var input = localStorage.getItem("input04");

    if (!input){
        return;
    }

    input04.value = input;
}

save04.addEventListener("click", function(event){
    event.preventDefault();

    var input = document.getElementById("04i").value;

    localStorage.setItem("input04", input);

    console.log(input);
    renderLastRegistered04();
});

renderLastRegistered05();

function renderLastRegistered05(){

    var input = localStorage.getItem("input05");

    if (!input){
        return;
    }

    input05.value = input;
}

save05.addEventListener("click", function(event){
    event.preventDefault();

    var input = document.getElementById("05i").value;

    localStorage.setItem("input05", input);

    console.log(input);
    renderLastRegistered05();
});