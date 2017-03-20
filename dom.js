var donateBtn = document.getElementById("donateBtn");
var inputName = document.getElementById("name")
var inputEmail = document.getElementById("email");
var inputAmount = document.getElementById("amount");
donateBtn.addEventListener("click", addNewDonor);

function addNewDonor() {
    let newDonor = {};
    newDonor.name = inputName.value;
    newDonor.email = inputEmail.value;
    newDonor.amount = inputAmount.value;
    if (document.getElementById("oneTime").checked === true) {
        newDonor.method = "One-time"
    } else {
        newDonor.method = "Per-lap"
    }
    Donors.addDonor(newDonor);
    Donors.displayDonors();
    inputName.value = "";
    inputEmail.value = "";
    inputAmount.value = "";
}
