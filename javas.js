/*function to produce results*/ 
function result(){
    fmale = document.getElementById("female_quantity").value;
    fmale_total = parseFloat(fmale * 150.95).toFixed(2);

    male = document.getElementById("male_quantity").value;
    male_total = parseFloat(male * 180.95).toFixed(2);

    document.getElementById("fmale_total").innerHTML = "R" + fmale_total;
    document.getElementById("male_total").innerHTML = "R" + male_total;

    total = parseFloat(fmale_total) + parseFloat(male_total);
    document.getElementById("total_price").innerHTML = "R" + total.toFixed(2);
}