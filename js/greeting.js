// Get the hour
var currentDay = new Date();
var hour = currentDay.getHours();

// Here you can change your name
var name = "Jack!";

// Here you can change your greetings
var gree1 = "Go to sleep, ";
var gree2 = "Wake up and get to work, ";
var gree3 = "You've made it past noon, ";
var gree4 = "You can almost sleep, ";
var gree5 = "Good evening ";
var gree6 = "Good evening ";

// Define the hours of the greetings
if (hour >= 23 && hour < 5) {
  document.getElementById("greetings").innerText = gree1 + name;
} else if (hour >= 6 && hour < 12) {
  document.getElementById("greetings").innerText = gree2 + name;
} else if (hour >= 12 && hour < 17) {
  document.getElementById("greetings").innerText = gree3 + name;
} else if (hour >= 17 && hour < 23) {
  document.getElementById("greetings").innerText = gree4 + name;
}
