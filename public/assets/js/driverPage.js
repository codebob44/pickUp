var loadTravelers = function(data) {
    var travelerId;
    var travelerOrder;
    var travelerName;
    var travelerGender;
    var travelerDate;
    var travelerTime;
    var travelerFlight;
    var travelerPicked;
    var travelerNote;

    for (var i = 0; i < data.length; i++) {

        var travelerTr = $("<tr>");
        var travelerOrderTd = $("<td>");
        var travelerNameTd = $("<td>");
        var travelerGenderTd = $("<td>");
        var travelerDateTd = $("<td>");
        var travelerTimeTd = $("<td>");
        var travelerFlightTd = $("<td>");
        var travelerPickBtnTd = $("<td>");
        var travelerNoteTd = $("<td>");

        travelerId = data[i]._id;
        travelerOrder = i + 1;
        travelerName = data[i].name
        travelerGender = data[i].gender;
        travelerDate = data[i].arrivalDate;
        travelerTime = data[i].arrivalTime;
        travelerFlight = data[i].flightNumber;
        travelerNote = data[i].note;

        var pickBtn = $("<button>Pick up</button>");
        pickBtn.addClass("btn btn-default btn-info pickBtnFunction");
        pickBtn.attr('id', travelerId);

        travelerTr.append(travelerOrderTd);
        travelerTr.append(travelerNameTd);
        travelerTr.append(travelerGenderTd);
        travelerTr.append(travelerDateTd);
        travelerTr.append(travelerTimeTd);
        travelerTr.append(travelerFlightTd);
        travelerTr.append(travelerPickBtnTd);
        travelerTr.append(travelerNoteTd);

        $("#displayTravelersInfo").append(travelerTr);

        travelerOrderTd.html(travelerOrder);
        travelerNameTd.html(travelerName);
        travelerGenderTd.html(travelerGender);
        travelerDateTd.html(travelerDate);
        travelerTimeTd.html(travelerTime);
        travelerFlightTd.html(travelerFlight);
        travelerPickBtnTd.append(pickBtn);
        travelerNoteTd.html(travelerNote);
    };
};

var loadPickedTravelers = function(data) {
    var travelerId;
    var travelerOrder;
    var travelerName;
    var travelerGender;
    var travelerDate;
    var travelerTime;
    var travelerFlight;
    var travelerPicked;
    var travelerNote;

    for (var i = 0; i < data.length; i++) {

        var travelerTr = $("<tr>");
        var travelerOrderTd = $("<td>");
        var travelerNameTd = $("<td>");
        var travelerGenderTd = $("<td>");
        var travelerDateTd = $("<td>");
        var travelerTimeTd = $("<td>");
        var travelerFlightTd = $("<td>");
        var travelerPickBtnTd = $("<td>");
        var travelerNoteTd = $("<td>");

        travelerId = data[i]._id;
        travelerOrder = i + 1;
        travelerName = data[i].name
        travelerGender = data[i].gender;
        travelerDate = data[i].arrivalDate;
        travelerTime = data[i].arrivalTime;
        travelerFlight = data[i].flightNumber;
        travelerNote = data[i].note;

        var pickBtn = $("<button>unpick</button>");
        pickBtn.addClass("btn btn-default btn-info unpickBtnFunction");
        pickBtn.attr('id', travelerId);

        travelerTr.append(travelerOrderTd);
        travelerTr.append(travelerNameTd);
        travelerTr.append(travelerGenderTd);
        travelerTr.append(travelerDateTd);
        travelerTr.append(travelerTimeTd);
        travelerTr.append(travelerFlightTd);
        travelerTr.append(travelerPickBtnTd);
        travelerTr.append(travelerNoteTd);

        $("#displayPickedTravelersInfo").append(travelerTr);

        travelerOrderTd.html(travelerOrder);
        travelerNameTd.html(travelerName);
        travelerGenderTd.html(travelerGender);
        travelerDateTd.html(travelerDate);
        travelerTimeTd.html(travelerTime);
        travelerFlightTd.html(travelerFlight);
        travelerPickBtnTd.append(pickBtn);
        travelerNoteTd.html(travelerNote);
    };
};



$.getJSON("/passengerData", function(data) {
    loadTravelers(data);
});

$.getJSON("/pickedPassenger", function(data) {
    loadPickedTravelers(data);
});


$(document).on("click", ".pickBtnFunction", function() {
    var passengerId = $(this).attr("id");
    $.ajax({
        method: "POST",
        url: "/pickupConfirm",
        data: {
            passengerId: passengerId
        }
    }).done(function(data) {
        console.log("success");
    });
});


$(document).on("click", ".unpickBtnFunction", function() {
    var passengerId = $(this).attr("id");
    $.ajax({
        method: "POST",
        url: "/unpickConfirm",
        data: {
            passengerId: passengerId
        }
    }).done(function(data) {
        console.log("success");
    });
});
