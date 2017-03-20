var Donors = (function() {
    var donorData = [{
        name: "Adam Sandler",
        email: "badboycomedy@gmail.com",
        amount: "20.00",
        method: "One-time"
    }, {
        name: "Billy Zane",
        email: "billyzane@gmail.com",
        amount: "3.00",
        method: "Per-lap"
    }, {
        name: "George Dubya",
        email: "georgieboy@gmail.com",
        amount: "150.00",
        method: "One-time"
    }];

    return {
        addDonor: function(newDonor) {
            donorData.push(newDonor);
        },
        displayDonors: function() {
            let donorStr = "";
            let donorDisplay = document.getElementById("donorDisplay");
            donorStr += `<table class="table table-striped"><th><td class="bold">Amount</td><td class="bold">Type</td></th>`
            for (let i = 0; i < donorData.length; i++) {
                currDonor = donorData[i];
                donorStr += `<tr><td class="bold">${currDonor.name}</td><td>$${currDonor.amount}</td><td>${currDonor.method}</td></tr>`
            }
            donorStr += `</table>`
            donorDisplay.innerHTML = donorStr;
        },
        getDonors: function() {
            return donorData;
        }
    }
})();

Donors.displayDonors();