var rateStart = document.querySelector(".rating");
var thankYou = document.querySelector(".thankYou");
var form = document.getElementById("ratingForm");

document.getElementById("ratingForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get the selected rating value
  var selector = "input[name=rate]:checked";
  var checkedInput = document.querySelector(selector);

  // form validation 
  if(checkedInput !== null){
    var selectedRating = document.querySelector(".rateTxt");
    selectedRating.textContent = "You selected " + checkedInput.getAttribute("value") + " out of 5"
    rateStart.classList.add("hidden");
    thankYou.classList.remove("hidden");
  }
});
