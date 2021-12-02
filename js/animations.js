ScrollReveal().reveal(".container-item1", {
    origin: "top",
    distance: "80px",
    duration: 1000,
    reset: false,
    delay: 2200,
});

ScrollReveal().reveal(".container-item2", {
    origin: "left",
    distance: "80px",
    duration: 1000,
    reset: false,
    delay: 2600,
});

ScrollReveal().reveal(".container-item3", {
    origin: "bottom",
    distance: "80px",
    duration: 1000,
    reset: false,
    delay: 3000,
});

ScrollReveal().reveal(".container-item4", {
    origin: "bottom",
    distance: "80px",
    duration: 1000,
    reset: false,
    delay: 3400,
});

ScrollReveal().reveal(".container-item5", {
    origin: "right",
    distance: "30px",
    duration: 1000,
    reset: false,
    delay: 3800,
});
ScrollReveal().reveal(".container-item6", {
    origin: "right",
    distance: "30px",
    duration: 1000,
    reset: false,
    delay: 4200,
});
////////////////text//////////////////////

ScrollReveal().reveal(".cont-top", {
    origin: "bottom",
    distance: "30px",
    duration: 1000,
    reset: false,
    scale: 1.5,
});

ScrollReveal().reveal(".cont-left", {
    origin: "top",
    distance: "30px",
    duration: 1000,
    reset: false,
    scale: 2,
    delay: 1000,
    rotate: {
        x: 20,
        z: 50
    }
    
});

ScrollReveal().reveal(".cont-right", {
    origin: "top",
    distance: "30px",
    duration: 1000,
    reset: false,
    scale: 2,
    delay: 1800,
    rotate: {
        x: 20,
        z: 50
    }
});

///////////////////////
ScrollReveal().reveal(".scrollToBottom", {
    origin: "top",
    distance: "30px",
    duration: 2000,
    reset: false,
    scale: 2,
    delay: 5000,
    scale: 5
});



/////////////***FULL PAGE.js *//////////////

// new fullpage('#fullPage', {
//     autoScrolling: fals,
//     navigation: fals,
//     navigationTooltips: ['firstSlide', 'secondSlide'],
// 	showActiveTooltip: fals,
//     easingcss3: 'ease',
    
// });
///////////////////SCROLL TO TOP///////////////////////

const scrollToTop = document.querySelector(".scrollToTop");

window.addEventListener("scroll", () => {
    window.pageYOffset > 1200
    ? (scrollToTop.style.display = "block")
    : (scrollToTop.style.display = "none");
});
scrollToTop.addEventListener("click", () => {
    window.scroll({ top: 0})
});
//////////////////scroll to BOTTOM////////////////////

const scrollToBottom = document.querySelector(".scrollToBottom");

window.addEventListener("scroll", () => {
    window.pageYOffset < 50
    ? (scrollToBottom.style.display = "block")
    : (scrollToBottom.style.display = "none");
});
scrollToBottom.addEventListener("click", () => {
    window.scrollTo(0,document.body.scrollHeight);
});




///////////////////////////////////////
ScrollReveal().reveal(".container-item7", {
    origin: "left",
    distance: "120px",
    duration: 1000,
    reset: false,
    
});

ScrollReveal().reveal(".container-item8", {
    origin: "right",
    distance: "120px",
    duration: 1000,
    reset: false,
    delay: 1000,
});

ScrollReveal().reveal(".container-item9", {
    origin: "left",
    distance: "120px",
    duration: 2000,
    reset: false,
    delay: 2500,
    scale: 2,
    rotate: {
        x: 180,
        z: 180
    }
});

ScrollReveal().reveal(".container-item10", {
    origin: "bottom",
    distance: "120px",
    duration: 1000,
    reset: false,
    delay: 2000,
});

ScrollReveal().reveal(".container-item11", {
    origin: "left",
    distance: "120px",
    duration: 1000,
    reset: false,
    delay: 1500,
});