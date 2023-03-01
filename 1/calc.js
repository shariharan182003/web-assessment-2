let t = prompt("Enter total hours parked:");
let old_price = 0;
let i = 0;
while (t != null)
    calc();
function calc() {
    i = i + 1;
    function calcCost(time) {
        let cost = 0;
        if (time != null) {
            if (time <= 3 & time > 0) {
                cost = 2;
            }
            else if (t == 0) {
                cost = 0;
            }
            else {
                cost = 2 + ((time - 3) * 0.5);
            }
        }
        return cost;
    }

    let price = calcCost(t);
    if (price > 10) {
        document.getElementById("display").innerHTML = 10.00+" for "+t+" hours";
        old_price += 10;
        document.writeln("Customer" + i + ": " + "$ 10.00 " + "for " + t + " hours" + "<br>");
    }
    else {
        document.getElementById("display").innerHTML = price.toFixed(2) + " for " + t + " hours";
        old_price += price;
        document.writeln("Customer" + i + ": " + "$ " + price + " for " + t + " hours" + "<br>");
    }

    t = prompt1();
}
document.getElementById("totcost").innerHTML = "Total cost till now : $" + old_price.toFixed(2);
// setTimeout(calc, 5000);
function prompt1() {
    let data = prompt("Enter the Hours parked:");
    return data;
}

