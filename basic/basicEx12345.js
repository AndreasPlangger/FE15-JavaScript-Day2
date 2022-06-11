/*Basic
ex 1 | Crystal Gazer
Write a function named crystalGazer() that takes four arguments: number of children, partner's name, geographic location, and job title. Once the user passes the four arguments the program should output the following message on screen:

You will be a job_title in location and married to partners_name with number_childrens.*/


function crystalGazer(number, name, location, job) {
    document.write("You will be a " + job + " in " + location + " and married to " + name + " with " + number + " children.")
}

crystalGazer(5, "Michi", "Vienna", "WebDev");



/*ex 2 | Age Calculator
Write a function called ageCalculator() that takes two arguments birth year and current year. Calculate 2 possible ages based on those years (two, because we don't know the birth month).

You should get the following results:

You are either 29 or 28*/


function ageCalculator(birthYear, currentYear) {
    var age = currentYear - birthYear;
    var ageAlt = age + 1;
    document.write("<br></br>")
    document.write("Hello, you are either " + age + " or " + ageAlt)
}

ageCalculator(1979, 2022);


/*ex 3 | Age Calculator-improved
Enhance your previous exercise in terms of how to get the current year in JavaScript instead of passing it in. Provide the same results just by  passing one argument.

You should get the following results:

You are either 29 or 28*/

function ageCalculatorImproved(birthYear) {
    var y = new Date();
    var year = y.getFullYear();
    var age = year - birthYear;
    var ageAlt = age + 1;
    document.write("<br></br>")
    document.write("Hello, you are either " + age + " or " + ageAlt)
}

ageCalculatorImproved(1979);


/*ex 4 | Degree-Radian Conversion
Create a JavaScript function that converts degrees to radians. The function accepts one argument, the degrees, and outputs the radians based on them. The formula for converting degrees to radians is: "degrees * (pi/180)"

E.g. If user passes 90 degrees it should get the result of 1.57079 radians*/

function degToRadian(degrees) {
    let x = Math.PI;
    var rad = degrees * (x / 180);
    document.write("<br></br>")
    document.write(degrees + " degrees convert to " + rad + " radians.")
}

degToRadian(90);


/*ex 5 | Area and Volume of a box
Create a function that calculates the area and volume of a box.

Formulas:

area = width x height

volume = width x height x depth

Pass three different numbers as arguments and get calculated results using the return statement.

You should get the following results:

The area of the box is: 14

The volume of the box is: 70*/


function boxCalculator(width, depth, height) {

    var w = width;
    var d = depth;
    var h = height;

    var area = w * d;
    var volume = w * d * h;

    return "<br><br>The area of the box is: " + area + "<br><br>" + "The volume of the box is: " + volume
}

document.write(boxCalculator(7, 5, 2));