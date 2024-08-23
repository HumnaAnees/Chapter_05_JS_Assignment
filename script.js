//            --------------QUESTION_01------------

// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

           

var number1 = 3;
var number2 = 5;
var sum = number1 + number2;
document.write("Sum of 3 and 5 is " + sum + "</br>");
console.log("Sum of 3 and 5 is " + sum + "</br>");


//            --------------QUESTION_02------------


// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

//                         For subtraction

var sub = number1 - number2;
document.write("Subtraction of 3 and 5 is " + sub + "</br>");
console.log("Subtraction of 3 and 5 is " + sub + "</br>");

//                        For Multiplication

var Multiplication = number1 * number2;
document.write("Multiplication of 3 and 5 is " + Multiplication + "</br>");
console.log("Multiplication of 3 and 5 is " + Multiplication + "</br>");

//                            For Devision

var Devision = number1 / number2;
document.write("Devision of 3 and 5 is " + Devision + "</br>");
console.log("Devision of 3 and 5 is " + Devision + "</br>");

//                              For Modulus

var Modulus = number1 % number2;
document.write("Modulus of 3 and 5 is " + Modulus + "</br>");
console.log("Modulus of 3 and 5 is " + Modulus + "</br>" + "</br>");


//            --------------QUESTION_03------------


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

var value;
document.write("Value after variable declaration is " + value + "<br>");
value = 5;
document.write("Initial value: " + value + "<br>");
value++;
document.write("Value after increment is: "+ value +"<br>");
value += 7;
document.write("Value after addition is: " + value + "<br>");
value--;
document.write("Value after decrement  is: " + value + "<br>");
var remainder = value % 3;
document.write("The remainder is: " + remainder + "<br>" + "<br>");


//            --------------QUESTION_04------------

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:


var totalTicket = 5;
var costofoneTicket = 600;
document.write("Total cost to buy 5 tickets to a movie is "+ costofoneTicket * totalTicket + "PKR" + "<br>" + "<br>");
console.log("Total cost to buy 5 tickets to a movie is " + costofoneTicket * totalTicket + "PKR" + "<br>" + "<br>");


//            --------------QUESTION_05------------

// 5. Write a script to display multiplication table of any
// number in your browser. E.g

var number = 4; // You can change this number to generate a table for any number
var tableContent = "";
for (var i = 1; i <= 10; i++) {
    tableContent += number + " x " + i + " = " + (number * i) + "<br>";
}
document.write("Table of 4" + "<br>" + tableContent + "<br>");


//            --------------QUESTION_06------------

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formulae:
// °C = (°F - 32 ) × 5 / 9
// °F = ( °C × 9 / 5 ) + 32


var celsiusTemp = 25;
var fahrenheitTemp2 = 70;
var fahrenheitTemp = (celsiusTemp * 9 / 5) + 32;
var celsiusTemp2 = (fahrenheitTemp2 - 32) * 5 / 9;
document.write(celsiusTemp + "°C is " + fahrenheitTemp + "°F" + "<br>");
document.write(fahrenheitTemp2 + "°F is " + celsiusTemp2 + "°C" + "<br>");


//            --------------QUESTION_07------------


// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

document.write("<h1> Shopping cart </h1>"+ "<br>");
var priceItem1 = 650;
var priceItem2 = 100;
var quantityItem1 = 3;
var quantityItem2 = 7;
var shippingCharges = 100;
var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
document.write( "Price of item 1 is " + priceItem1 + "<br>");
document.write( "Quantity of item 1 is " + quantityItem1 + "<br>");
document.write( "Price of item 2 is " + priceItem2 + "<br>");
document.write( "Quantity of item 2 is " + quantityItem2 + "<br>");
document.write( "Shipping Charges " + shippingCharges + "<br>" + "<br>");
document.write( "Total cost of your order is " + totalCost + "<br>");

//            --------------QUESTION_08------------


// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser


var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;
document.write("<h1>Marks Sheet</h1> <br>");
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + marksObtained + "<br>");
document.write("Percentage " + percentage + " % "+ "<br>" + "<br>");


//            --------------QUESTION_09------------

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)


var uS_Dollartopkr = 104.80
var saudi_Riyaltopkr = 28
        // Amounts in US Dollars and Saudi Riyals

var usDollars = 10;
var saudiRiyals = 25;
var totalPkr = (usDollars * uS_Dollartopkr) + (saudiRiyals * saudi_Riyaltopkr);
document.write("<h1>Currency in PKR</h1> <br>");
document.write("Total Currency in PKR: " + totalPkr + "<br>" + "<br>");


//            --------------QUESTION_10------------

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var num = 5;
var calc = ((num + 5) * 10) / 2;
document.write( "Result :" + calc + "<br>" + "<br>");

//            --------------QUESTION_11------------


// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.


var currentYear = 2016;
var birthYear = 1992;
var age1 = currentYear - birthYear;
document.write("<h1>Age Calculator</h1> <br>");
document.write( "Current Year:" + currentYear + "<br>");
document.write( "birth Year:" + birthYear + "<br>");
document.write( "Your age is " + age1 + "<br>");


//            --------------QUESTION_12------------

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// MATH EXPRESSIONS | JAVASCRIPT
// Page 8 of 9
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)


var radius = 20;
var pi = 3.142;
var circumofacircle = 2 * pi * radius;
var area = pi * radius * radius;
document.write("<h1>The Geometrizer</h1> <br>");
document.write("Radius of a circle:" + radius + "<br>");
document.write("The circumference is: " + circumofacircle + "<br>");
document.write("The area is: " + area + "<br>");


//            --------------QUESTION_13------------

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.



var favouriteSnack = "chocolate chip";
var currentAge = 15;
var maximumAge = 65;
var estimatedamountperday = 3;
var totalyearsrestoflife = maximumAge - currentAge;
var lifetime = totalyearsrestoflife * estimatedamountperday;
document.write("<h1>The Lifetime Supply Calculator</h1> <br>");
document.write("Favourite Snack: " + favouriteSnack + "<br>");
document.write("Current age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maximumAge + "<br>");
document.write("Amount of snacks per day: " + estimatedamountperday + "<br>");
document.write("You will need " + lifetime+" "+ favouriteSnack+" " + "to last you until the ripe old age of " + maximumAge + "<br>");







