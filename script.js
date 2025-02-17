// JavaScript Functions

// Function with parameters and return values
function calculateArea(length, width) {
    return length * width;
  }
  
  // Function demonstrating scope
  let globalVar = "I am a global variable";
  
  function checkScope() {
    let localVar = "I am a local variable";
    console.log(globalVar); // Can access globalVar
    console.log(localVar);  // Can access localVar
  }
  
  checkScope();
  // console.log(localVar); // Uncommenting this will throw an error (localVar is not defined outside the function)
  
  // Function to toggle the modal
  function toggleModal() {
    const modal = document.getElementById("modal");
    modal.style.display = modal.style.display === "block" ? "none" : "block";
  }
  
  // Part 3: Combining CSS Animations with JavaScript
  document.querySelector(".toggle-modal-btn").addEventListener("click", function() {
    toggleModal(); // Toggle modal visibility
    document.querySelector(".modal-content").classList.add("fadeIn"); // Trigger the fade-in animation
  });
  
  // Close modal when close button is clicked
  document.getElementById("close-btn").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
  });
  
  // Calculate area when the button is clicked
  document.getElementById("calc-area-btn").addEventListener("click", function() {
    const length = prompt("Enter length:");
    const width = prompt("Enter width:");
    const area = calculateArea(length, width);
    document.getElementById("area-result").innerText = `The area is: ${area}`;
  });
  