var donateBtn = document.getElementById("donateBtn");
donateBtn.addEventListener("click", gatherData);

function gatherData() {
    let newDonor = {};
    newDonor.name = document.getElementById("name").value;
    newDonor.email = document.getElementById("email").value;
    newDonor.amount = document.getElementById("amount").value;
    if (document.getElementById("oneTime").checked === true) {
        newDonor.method = "One-time"
    } else {
        newDonor.method = "Per-lap"
    }
    Donors.addDonor(newDonor);
}

//Everything below is purely so that I can get some data in the table on page load
//It's a copy-paste from the IIFE

var dummyData = [{
    name: "Ben Greaves",
    email: "bsgreaves@gmail.com",
    amount: "$20.00",
    method: "One-time"
}, {
    name: "Billy Zane",
    email: "zany@gmail.com",
    amount: "$3.00",
    method: "Per-lap"
}, {
    name: "George Dubya",
    email: "georgieboy@gmail.com",
    amount: "$150.00",
    method: "One-time"
}];

function dummyDisplay(donors) {
    let donorStr = "";
    let donorDisplay = document.getElementById("donorDisplay");
    donorStr += `<table class="table table-striped">
						<th>
							<td class="bold">Amount</td>
							<td class="bold">Type</td>
							<td class="bold">Email</td>
						</th>`
    for (let i = 0; i < donors.length; i++) {
        currDonor = donors[i];
        donorStr += `<tr><td class="bold">${currDonor.name}</td><td>${currDonor.amount}</td><td>${currDonor.method}</td><td>${currDonor.email}</td></tr>`
    }
    donorStr += `</table>`
    donorDisplay.innerHTML = donorStr;
}

dummyDisplay(dummyData);