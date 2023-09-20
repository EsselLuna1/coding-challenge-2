// document.getElementById("ratingForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form submission
  
//     // Get the selected rating value
//     var selectedRating = document.getElementById("rating").value;
  
//     // Perform any necessary processing or validation here
//     // ...
  
//     // Output the selected rating
//     console.log("Submitted rating:", selectedRating);
//   });

const rateStart = document.querySelector(".rating");
const thankYou = document.querySelector(".thankYou");
const form = document.querySelector(".ratingForm");

form.addEventListener("submit", function(e){
    e.preventDefault(); //prevents Browser from refreshing
    const selector = "input[name=rate]:checked";
    const checkedInput = document.querySelector(selector);
        
    // User needs to select an Option in order to go on
    if(checkedInput !== null){
        const selectedRating = document.querySelector(".rateTxt");
        selectedRating.textContent = "You selected " + checkedInput.getAttribute("value") + " out of 5"
        rateStart.classList.add("hidden");
        thankYou.classList.remove("hidden");
    }
})