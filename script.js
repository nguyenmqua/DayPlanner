var timeArray = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];

function displayTime(){
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").html(time);
    setTimeout(displayTime, 1000)
}


var timeDiv = $(".container");

function displayBlocks(){
for (var i = 0; i < timeArray.length; i++) {
    var Times = timeArray[i]
    const DivRow = $("<div>");
    DivRow.addClass("form-group row timeblock");
    DivRow.attr("id", "div" + timeArray[i])
    $(".container").append(DivRow)

    var Label = $("<label>")
    Label.addClass("col-sm-1 hour float-left");
    Label.html(Times);
    DivRow.append(Label)

    var textArea = $("<textarea>");
    textArea.addClass("form-control col-sm-10 float-left description row='3' ");
    textArea.attr("id", "area" )
    textArea.attr("name", Times)
    textArea.val(localStorage.getItem(Times))
    DivRow.append(textArea);

    
    var saveBtn = $("<button>");
    saveBtn.addClass("btn col-sm-1 btn-outline-primary float-left");
    saveBtn.html("Save");
    DivRow.append(saveBtn);

     if (window.localStorage){
         $(".description").keyup(function() {
             event.preventDefault()
             localStorage.setItem(this.name, this.value);}
        )};  
    
    var currentHour = moment().format('HH');
    console.log(currentHour)
    var hours = parseFloat(i) + 9

    console.log(hours)

    if (currentHour > hours){
        DivRow.addClass("past")
        $('.description').prop("disabled", true)
        $('.btn').prop("disabled", true)
        
    }
    else if (currentHour < hours) {
        DivRow.addClass("future")
    }
    else if (currentHour = hours) { 
        DivRow.addClass("present")
    }
}}


$(document).ready(function() {
    displayBlocks();
    displayTime();
});