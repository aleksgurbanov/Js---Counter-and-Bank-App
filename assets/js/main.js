function git() {

    var x = confirm("backgroundu deyishmek isteyirsiz ?");

    if (x) {


        document.body.style.backgroundColor = 'black';


    } else {
        alert("Deyisihilmedi.");
    }

}


var age = prompt("Yashinizi daxil edin ");
if (age < 18) {
    alert("Boyuyende gelersen")
} else alert("daxil oldunuz")