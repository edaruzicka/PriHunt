// Assign variables: modal window, 'a' elemenet for window to pop up and the close button
var modalSignup = document.getElementById("modalSignup");
var aSignup = document.getElementById("aSignup");
var closeBtn = document.getElementsByClassName("closeBtn")[0];

// On 'a' element click, display the modal window
aSignup.onclick = function() {
    modalSignup.style.display = "block";
}

// On close button click, close the pop up window
closeBtn.onclick = function() {
    modalSignup.style.display = "none";
}