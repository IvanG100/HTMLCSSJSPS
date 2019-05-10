function responsive() {
    var x = document.getElementById("mytopnav");
    if (x.className === "navtop") {
        x.className += " responsive";
    } else {
        x.className = "navtop";
    }
}


var y = document.getElementById("mytopnav");
var z = document.getElementsByClassName("navegacion");
var i = 0;

for (i; i < z.length; i++) {
    z[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");


        current[0].className = current[0].className.replace(" active", "");

        this.className += " active";
    });
}

function desplegar() {
    document.getElementById("mydropmenu").classList.toggle("show");
}
window.onclick = function (e) {
    if (!e.target.matches('.btndropdown')) {
        var myDropmenu = document.getElementById("mydropmenu");
        if (myDropmenu.classList.contains('show')) {
            myDropmenu.classList.remove('show');
        }
    }
};


