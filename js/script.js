// document.getElementsByClassName("title-cont")[0].style.color = "red";


document.getElementById("main-button-menu").onclick = function () {
    document.getElementById("product").scrollIntoView ( {behavior: "smooth"});
}


let links = document.querySelectorAll(".memu-items > a");
for (let i = 0; i < links.length; i++ ) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView ( {behavior: "smooth"});
    }
}


let buttons = document.getElementsByClassName("button")
for (let i = 0; i < buttons.length; i++ ) {
    buttons[i].onclick = function () {
        document.getElementById("order").scrollIntoView ( {behavior: "smooth"});
    }
}