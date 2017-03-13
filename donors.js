var Donors = (function() {
    var donorData = [{
        name: "Ben Greaves",
        email: "bsgreaves@gmail.com",
        amount: "$20.00",
        method: "One-time"
    }, {
        name: "Billy Zane",
        email: "billyzane@gmail.com",
        amount: "$3.00",
        method: "Per-lap"
    }, {
        name: "George Dubya",
        email: "georgieboy@gmail.com",
        amount: "$150.00",
        method: "One-time"
    }];

    return {
        addDonor: function(newDonor) {
            donorData.push(newDonor);
            Donors.displayDonors(donorData);
        },
        displayDonors: function(donors) {
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
    }
})();