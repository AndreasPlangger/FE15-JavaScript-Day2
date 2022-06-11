/*Capitalize
Write an anonymous JavaScript function to capitalize only the first letter of a string. The function accepts only one string argument.

E.g. If we pass the following string 'i am a web developer' we should get the message 'I am a web developer'

Hint: Check JavaScript String charAt() Method*/

document.write((function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1, string.length);;
})("i am a web developer"))


/*Average Grade
Make a function that will accept 3 parameters, which are the grades from Math, Physics and English. then make the calculation and print them on the screen. Make sure that the variables are numbers.

E.g. If you put the following grades 3, 4, 5 the result should be:

Sum:12

Average: 4*/

function gradeCal(math, physics, english) {

    var m = math;
    var p = physics;
    var e = english;

    var sum = m + p + e;
    var avg = sum / 3;

    document.write("<br></br>Sum: " + sum)
    document.write("<br></br>Average: " + avg)
};

gradeCal(3, 4, 5);