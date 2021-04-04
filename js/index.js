AOS.init();

const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})
document.addEventListener("click", ()=>{
    cursor.classList.add("expand");

    setTimeout(()=>{
        cursor.classList.remove("expand");
    }, 500)
})

window.addEventListener("scroll", ()=>{
    var header = document.querySelector("header");
    header.classList.toggle("window", window.scrollY > 0);
    var logo = document.querySelector("#logo");
    logo.classList.toggle("logo-scroll", window.scrollY > 0);
    var contBtn = document.querySelector(".contact-btn");
    contBtn.classList.toggle("contact-scroll", window.scrollY > 0);
    
})



document.querySelector(".dark-btn").addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    var main = document.querySelector("#main");
    main.classList.toggle("dark");
    for(var i =0; i<2; i++){
        var spans = document.querySelectorAll("span")[i];
        spans.classList.toggle("dark");
    }
    var darkLogo = document.querySelector(".logo");
    darkLogo.classList.toggle("dark");
    var darkContBtn = document.querySelector(".contact-btn");
    darkContBtn.classList.toggle("dark");
})





const toggleButton = document.getElementsByClassName("toggle")[0];
const navLinks = document.getElementsByClassName("nav-links2")[0];

toggleButton.addEventListener('click', ()=>{
    navLinks.classList.toggle('active');
})





//   ----------------------CarouselStart--------------------------


const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";


//btnListeners

nextBtn.addEventListener("click", ()=>{
    if(counter >= carouselImages.length - 1) return;


    carouselSlide.style.transition = "transform 0.8s ease-in-out";
    counter++;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
});

prevBtn.addEventListener("click", ()=>{
    if(counter <= 0) return;

    carouselSlide.style.transition = "transform 0.8s ease-in-out";
    counter--;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
});

carouselSlide.addEventListener("transitionend", ()=>{
    if(carouselImages[counter].id==="lastClone"){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }

    if(carouselImages[counter].id==="firstClone"){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
});