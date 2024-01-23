// Event handler for save buttons
$(document).ready(function () {
  $(".saveBtn").click(function () {
    // Get the hour ID and agenda entry
    var hourId = this.parentElement.id;
    var agendaEntry = this.parentElement.querySelector(".description").value;

    // Save the agenda entry to localStorage
    localStorage.setItem(hourId, agendaEntry);
  });

  // Get the current hour using dayjs
  var currentHour = dayjs().hour();

  // Update the styling for each hour block based on the current time
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

  // Retrieve saved agenda entries from localStorage and update textarea values
  for (var i = 5; i < 24; i++) {
    var entryText = localStorage.getItem(i.toString()); // Convert i to a string
    console.log(entryText);

    // Set the value of the <textarea> based on the saved entry
    document.getElementById(i.toString()).querySelector(".description").value = entryText;
  }

  // Display the current date in the header
  var todaysDate = dayjs().format('dddd, MMMM D, YYYY h:mm A');
  var headerDate = document.getElementById("currentDay");
  headerDate.textContent = todaysDate;
});
