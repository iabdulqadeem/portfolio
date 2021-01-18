const toggleBtn = document.getElementsByClassName("toggle")[0];
const navLinks = document.getElementsByClassName("navLinks")[0];

toggleBtn.addEventListener("click", () =>{
    navLinks.classList.toggle("active");
})