document.getElementById("mbl-lines-container").addEventListener("click", myFunction); 
document.getElementById("mbl-menu").style.display = "none";

function myFunction() {
    var menu = document.getElementById("mbl-menu");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}
