function up () {
    document.getElementsByClassName("znvs")[0].style.bottom = "100%";
    document.getElementsByClassName("znvs")[0].style.transition = "1s";
}

document.getElementsByClassName("light")[0].style.display = "none";
function turn_on () {
    if(document.getElementsByClassName("light")[0].style.display == "none") {
        document.getElementsByClassName("light")[0].style.display= "block";
        document.getElementsByClassName("magician")[0].style.display= "block";
        document.getElementsByClassName("magician_hat")[0].style.display= "block";
        document.getElementsByClassName("rabbit")[0].style.display= "block";
        document.getElementsByClassName("pigeon")[0].style.display= "block";
    }
    else {
        document.getElementsByClassName("light")[0].style.display= "none";
        document.getElementsByClassName("magician")[0].style.display= "none";
        document.getElementsByClassName("magician_hat")[0].style.display= "none";
        document.getElementsByClassName("rabbit")[0].style.display= "none";
        document.getElementsByClassName("pigeon")[0].style.display= "none";
    }
    document.getElementsByClassName("lamp_button")[0].style.width= "25px";

}

function turn_off () {
    document.getElementsByClassName("lamp_button")[0].style.width= "20px";
}

var change = true;
document.getElementsByClassName("for_focus")[0].onclick = function () {
    if (change) {
        setTimeout(() => {document.getElementsByClassName("pigeon")[0].style.bottom = "25%" }, 500);
        document.getElementsByClassName("rabbit")[0].style.bottom = "15%";
        change = false;
        
    }
    else {
        setTimeout(() => {document.getElementsByClassName("rabbit")[0].style.bottom = "25%" }, 500);
        document.getElementsByClassName("pigeon")[0].style.bottom = "15%";
        change = true;
    }
}