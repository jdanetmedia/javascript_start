var netPriceOfShoes = 399.20; // interger
var VAT = 25;
var calculatedVAT = (1 + VAT / 100);
var grossPriceOfShoes = (netPriceOfShoes * calculatedVAT);
var amount = 10;

function calc() {
    document.getElementById("result").innerHTML = "You bought a pair of shoes for the price of " + grossPriceOfShoes + " DKK. " + "Buy " + amount + " for the price of " + (grossPriceOfShoes * amount) + " DKK";
};

// document.getElementById("result").innerHTML = grossPriceOfShoes;

// alert("You bought a pair of shoes for the price of " + grossPriceOfShoes + " DKK. " + "Buy " + amount + " for the price of " + (grossPriceOfShoes * amount) + " DKK");