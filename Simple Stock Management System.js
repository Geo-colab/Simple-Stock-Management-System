//Global arrays to keep inventory of every product
var product1 = [];
var product2 = [];
var product3 = [];

//Array to hold all the emails of buyers
 var arr_email = [];

//Function when Add stock button is clicked
var element = document.getElementById("add_stock");
element.onclick = function() {

//variable to hold the option of the drop-down list
var option = document.getElementById("choose_products").value;

//variable to hold integer value of amount of stock
var s_amount = parseInt(document.getElementById("stock_amount").value);

//variable to hold double value of price per unit of stock
var s_price = parseFloat(document.getElementById("stock_price").value)

//Validate from with values
if (isNaN(s_amount)) {
alert("Please enter the amount of stock to add.");
return false;
} else if (isNaN(s_price)) {
alert("Please enter the unit price per stock item.");
return false;
} else {

//See which array to populate and populate that array
if (option == "product_1") {
for (var i = 1; i <= s_amount; i++){
product1.push(s_price);
 update_products();
}
} else if (option == "product_2") {
for (var i = 1; i <= s_amount; i++){
product2.push(s_price);
 update_products();
}
} else {
for (var i = 1; i <= s_amount; i++) {
product3.push(s_price);
 update_products();
}
}
}
 
//reset the form to empty
document.getElementById("choose_products").value = "product_1";
document.getElementById("stock_amount").value = "";
document.getElementById("stock_price").value = "";

}

//When Remove Stock button is clicked
var element = document.getElementById("remove_stock");
element.onclick = function() {

//variable to hold the option of the drop-down list
var option = document.getElementById("choose_products_1").value;

//variable to hold integer value of amount of stock
var s_amount = parseInt(document.getElementById("stock_amount_1").value);

//variable to hold buyer's email
var b_email = document.getElementById("buyer_email").value;
 
 //search array to see if email exists
 var verify_email = arr_email.includes(b_email);
 
 //validate form
 if (isNaN(s_amount)) {
 alert("Please enter the amount of stock to add.");
 return false;
 } else if (b_email == "") {
 alert("Please enter an email to buy products.");
 return false;
 } else {
 
 //test to see if the email has been used
 if (verify_email) {
 alert("Sorry, this email has allready been used. Please enter new email")
 } else {
 
 //push email into array if it doesnt exist
 arr_email.push(b_email);
 
//See which array to populate and populate that array
//Test to see if that array has stock to remove
if (option == "product_1_1" && s_amount <= product1.length) {
for (var i = 1; i <= s_amount; i++) {
product1.shift();
update_products();
}
} else if (option == "product_2_1" && s_amount <= product2.length) {
for (var i = 1; i <= s_amount; i++){
product2.shift();
update_products();
}
} else if (option == "product_3_1" && s_amount <= product3.length) {
for (var i = 1; i <= s_amount; i++) {
product3.shift();
update_products();
}
} else {
alert("We don't have enough of that product in inventory. Please select a lower quantity.");
arr_email.pop();
}
}
}

//reset the from to empty
document.getElementById("choose_products_1").value = "product_1_1";
document.getElementById("stock_amount_1").value = "";
document.getElementById("buyer_email").value = "";
}

function update_products() {

//function to update stock levels and average price in product 1 array
var sum = 0;
var index = product1.length;
var average;
for (var i = 0; i < product1.length; i++)
{
sum += product1[i];
}

var index_string = index.toString();
document.getElementById("stock_product1").innerHTML = index_string;

average = sum/index;

var average_string = average.toFixed(2); 
document.getElementById("average_product1").innerHTML = average_string;

//function to update stock levels and average price in product 2 array
var sum = 0;
var index = product2.length;
var average;
for (var i = 0; i < product2.length; i++)
{
sum += product2[i];
}

var index_string = index.toString();
document.getElementById("stock_product2").innerHTML = index_string;

average = sum/index;

var average_string = average.toFixed(2); 
document.getElementById("average_product2").innerHTML = average_string;

//function to update stock levels and average price in product 3 array
var sum = 0;
var index = product3.length;
var average;
for (var i = 0; i < product3.length; i++)
{
sum += product3[i];
}

var index_string = index.toString();
document.getElementById("stock_product3").innerHTML = index_string;

average = sum/index;

var average_string = average.toFixed(2); 
document.getElementById("average_product3").innerHTML = average_string;
}