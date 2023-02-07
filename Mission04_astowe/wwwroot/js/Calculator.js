$("#calcButton").click(function () {
    //get values and calculate percentage 
    let percentage = ($("#assignments").val() * 0.5) + ($("#intex").val() * 0.1) + ($("#final").val() * 0.1) + ($("#midterm").val() * 0.1) + ($("#quiz").val() * 0.1) + ($("#project").val() * 0.1);
    let letter = "";
    //get grade letter
    if (percentage >= 94) {
        letter = "A";
    }
    else if (percentage > 90) {
        letter = "A-";
    }
    else if (percentage > 87) {
        letter = "B+";
    }
    else if (percentage > 84) {
        letter = "B";
    }
    else if (percentage > 80) {
        letter = "B-";
    }
    else if (percentage > 77) {
        letter = "C+";
    }
    else if (percentage > 74) {
        letter = "C";
    }
    else if (percentage > 70) {
        letter = "C-";
    }
    else if (percentage > 67) {
        letter = "D+";
    }
    else if (percentage > 64) {
        letter = "D";
    }
    else if (percentage > 60) {
        letter = "D-";
    }
    else {
        letter = "E";
    }
    //output to html
    alert(letter);
})