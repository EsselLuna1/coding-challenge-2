document.getElementById("ratingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the selected rating value
    var selectedRating = document.getElementById("rating").value;
  
    // Perform any necessary processing or validation here
    // ...
  
    // Output the selected rating
    console.log("Submitted rating:", selectedRating);
  });