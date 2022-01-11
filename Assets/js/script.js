
// Pseudocode
    //retrieve time from api
    //append timeblocks to page in order
        // color code timeblocks based of off current time
            // use for loop
        // add ability to add text to block
        // have a button that saves event to local storage

var today = moment();
// var currentHour = today.format("HH")
var currentHour = 11;
var container = document.querySelector(".container");
var inputs = document.querySelectorAll("input");

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


$("button").on("click",)









// for( i = -3 ; i < 21 ; i++){

//     var timeblocks = moment(today).add(i, "hours").format("HH");
//     console.log("Timeblock " + timeblocks);
    
    // if (i < 0){
    //     var time = moment(timeblocks, "HH").format("hh A");
    //     $(container).append("<div></div>").children().addClass("row").attr("id", time);
    //     //need to figure out how to select the div i made
    //     $("#time").append("<div>"+time+"</div>").children().eq(0).addClass("col-2");
    //     $("#time").append("<div></div>").children().eq(1).addClass("col-8 bg-secondary text-white");
    //     $("#time").append("<button></button>").children().eq(2).addClass("col-2 btn btn-primary").attr("type", "button");
        
    // } else if (i == 0) { 
    //     var time = moment(timeblocks, "HH").format("hh A");
    //     $(container).append("<div></div>").children().addClass("row").attr("id", time);
    //     $("#time").append("<div>"+time+"</div>").children().eq(0).addClass("col-2");
    //     $("#time").append("<div></div>").children().eq(1).addClass("col-8 bg-danger text-white");
    //     $("#time").append("<button></button>").children().eq(2).addClass("col-2 btn btn-primary").attr("type", "button");

    // } else {
    //     var time = moment(timeblocks, "HH").format("hh A");
    //     $(container).append("<div></div>").children().addClass("row").attr("id", time);
    //     $("#time").append("<div>"+time+"</div>").children().eq(0).addClass("col-2");
    //     $("#time").append("<div></div>").children().eq(1).addClass("col-8 bg-success text-white");
    //     $("#time").append("<button></button>").children().eq(2).addClass("col-2 btn btn-primary savebtn").attr("type", "button");

    // }
//     console.log(time);
// };

// $("<row></row>").appendTo(".container")
// $('#myTable').append('<tr><td>my data</td><td>more data</td></tr>');



// Save button code

// var saveButton = document.querySelectorAll(".savebtn")

// saveButton.addEventListener("click", function(event){
//     event.preventDefault();

//     var savedTime = document.querySelector("#time"+[i]).value;
//     var note = document.querySelector("#note"+[i]).textContent;

// });