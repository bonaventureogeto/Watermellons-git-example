let about = document.getElementById('about');
about.textContent = "Welcome";
about.style.color = "red";
// document object model

// event handling
let contactBtn = document.getElementById('contact');
contactBtn.addEventListener('click', () => {
    contactBtn.style.color = "indigo";
    alert("Button Clicked");
});
