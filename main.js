const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".nav-menu");

function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");

        // add menu icon
        toggle.innerHTML = `<i class="fas fa-bars">`;
    }
    else {
        menu.classList.add("active");

        // add x (close menu) icon
        toggle.innerHTML = `<i class="fas fa-times"></i>`;
    }
}

toggle.addEventListener("click", toggleMenu, false);
// Define a variable to store the visitor count
let visitorCount = 0;

// Function to increment the visitor count
function incrementVisitorCount() {
  visitorCount++;
}

// Call the function to increment the visitor count when the page loads
incrementVisitorCount();

// Display the visitor count on the page
document.getElementById("visitorCount").innerText = visitorCount;
// Function to update the time
function updateTime() {
    // Get the current time
    var currentTime = new Date();
    
    // Extract the hour, minute, and second
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    
    // Format the time as HH:MM:SS
    var timeString = hours + ":" + minutes + ":" + seconds;
    
    // Update the content of the HTML element
    document.getElementById("currentTime").innerText = timeString;
  }
  
  // Call the updateTime function every second
  setInterval(updateTime, 1000);
