let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// <i class='bx bx-x'></i>
searchBox.addEventListener("click", ()=>{
    navbar.classList.toggle("showInput");
    if(navbar.classList.contains("showInput")){
        searchBox.classList.replace("bx-search" ,"bx-x");
    }else {
        searchBox.classList.replace("bx-x" ,"bx-search");
    }
})


// sidebar open close js Code

let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let closeOpenBtn = document.querySelector(".nav-links .bx-x");
let navLinks = document.querySelector(".nav-links");

menuOpenBtn.addEventListener("click", ()=>{
    navLinks.style.left= "0";
});
closeOpenBtn.addEventListener("click", ()=>{
    navLinks.style.left= "-100%";
});


//sidebar sub menu open close js Code

let sixMonthArrow = document.querySelector(".sixMonth-arrow");
sixMonthArrow.addEventListener("click", ()=>{
    navLinks.classList.toggle("show1");
});

//sidebar sub menu open close js Code

let sixWeekArrow = document.querySelector(".sixWeek-arrow");
sixWeekArrow.addEventListener("click", ()=>{
    navLinks.classList.toggle("show1");
});





// VAT constant
const VAT = 0.15;

// Calculate total fees when the button is clicked
document.getElementById('calculate-btn').addEventListener('click', function () {
    let total = 0;

    // Get all the checkboxes
    const checkboxes = document.querySelectorAll('.course-list input[type="checkbox"]');

    // Loop through all checkboxes and add the values of checked boxes
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            total += parseFloat(checkbox.value);
        }
    });

    // Calculate VAT and final total
    const vatAmount = total * VAT;
    const finalTotal = total + vatAmount;

    // Update the total fee display
    document.getElementById('total-fee').innerText = finalTotal.toFixed(2);
});
