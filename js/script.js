document.querySelector("#test-form").addEventListener("submit", function(e){
    e.preventDefault()

    let paragraph = document.createElement("p")
    paragraph.textContent = event.target.elements.text.value

    document.querySelector(".from-form").appendChild(paragraph)
    event.target.elements.text.value = ""


})

// let nadpis = document.querySelector("h1")
// nadpis.addEventListener("mouseenter", function(e){
//     nadpis.style.color = "yellowgreen"
    
// })

// nadpis.addEventListener("mouseleave", function(e){
//     nadpis.style.color = "black"
    
// })

const scrollToTop = document.querySelector(".scrollToTop");

window.addEventListener("scroll", () => {
    window.pageYOffset > 250
    ? (scrollToTop.style.display = "block")
    : (scrollToTop.style.display = "none");
});
scrollToTop.addEventListener("click", () => {
    window.scroll({ top: 0})
});
