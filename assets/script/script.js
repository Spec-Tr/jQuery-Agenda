$(document).ready(function () {
  $(".saveBtn").click(function () {
    var hourId = this.parentElement.parentElement.id;
    var agendaEntry = this.parentElement.children[1].value;

    localStorage.setItem(hourId, agendaEntry);
  });

  var currentHour = dayjs().hour();

  for (var i = 5; i < 24; i++) {
    var otherHour = document.getElementById(i);

    if (otherHour) {
      otherHour.classList.remove('past', 'present', 'future');

      if (i < currentHour) {
        otherHour.classList.add('past');
      } else if (i === currentHour) {
        otherHour.classList.add('present');
      } else {
        otherHour.classList.add('future');
      }
    } else {
      console.log("Element with ID " + i + " not found.");
    }
  }

  for (var i = 5; i < 24; i++) {
    var entryText = localStorage.getItem(i);
    document.getElementById(i).children[1].value = entryText;
  }

  var todaysDate = dayjs().format('dddd, MMMM D, YYYY h:mm A');
  var headerDate = document.getElementById("currentDay");
  headerDate.textContent = todaysDate;
});

 // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.