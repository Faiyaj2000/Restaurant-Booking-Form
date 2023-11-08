function updateForm() {
    var bookingChoice = document.getElementById("bookingChoice").value;
    var dateLabel = document.getElementById("dateLabel");
    var dateInput = document.getElementById("date");
    var timeLabel = document.getElementById("timeLabel");
    var timeInput = document.getElementById("time");
    var slotLabel = document.getElementById("slotLabel");
    var slotInput = document.getElementById("slot");

    dateLabel.style.display = "none";
    dateInput.style.display = "none";
    timeLabel.style.display = "none";
    timeInput.style.display = "none";
    slotLabel.style.display = "none";
    slotInput.style.display = "none";

    if (bookingChoice === "Full day booking") {
        dateLabel.style.display = "block";
        dateInput.style.display = "block";
    } else if (bookingChoice === "Half day booking") {
        dateLabel.style.display = "block";
        dateInput.style.display = "block";
        slotLabel.style.display = "block";
        slotInput.style.display = "block";
    } else if (bookingChoice === "Hourly booking") {
        dateLabel.style.display = "block";
        dateInput.style.display = "block";
        timeLabel.style.display = "block";
        timeInput.style.display = "block";
    }
}