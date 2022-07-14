var currentDay = $('#currentDay');


var tableRow = $('tr')

var nineBtn = $('#9save')

var rowClass = tableRow.class;

nineBtn.click (
    
    function () {
    var inputValue = $({rowClass} + `input`).val();
    localStorage.setItem ('nineInput',inputValue);
}
)

// nine.val(localStorage.getItem('nineInput'))

currentDay.text(moment().format('MMMM Do YYYY'))

for (let i = 0; i < tableRow.length; i++) {
    var inputArea = $(tableRow[i]);
    var tableRowHour = inputArea.attr("class")
    // var hourNow = moment().format("H")

    hourNow = 11

    if (hourNow > tableRowHour) {
        inputArea.addClass("past");
    } 
    
    else if (hourNow == tableRowHour) {

        inputArea.addClass("present")
    }

    if (hourNow < tableRowHour) {
        inputArea.addClass("future")
    }
}