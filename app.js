//Chapter-1-assignment//

// // 01

alert("HI !")

// // 02

alert("Please!Enter a valid password")

// // 03

alert("Welcome to JS Land..\nHappy Codding !")

// // 04

alert("Welcome to JS Land..")

alert("Happy Codding!\nPrevent this page from creating additional dialogs.")

// // 05 ??


//Chapter-2-assignment//

// // 01

var userName = "RAZA";

// // 02

var myNmae = " Muhammad Kashaaf Raza";

// // 03

var message = "hello world";
alert(message);

// // 04

var studentName = prompt("Enter your Name:");
var studentAge = +prompt("Enter your Age:");
var enrolledCoure = prompt("In which course you are enroll?");

alert(studentName);
alert(studentAge);
alert(enrolledCoure);

// // 05 ??
// // 06

var email = "officialkashaafraza@gmail.com" ;
alert("my email address is "+email);

// // 07

let book = "“A smarter way to learn JavaScript”";
alert(book);

// // 08

var script = "yah! i can write html content through javascrip";
document.write(script +"<br>");
 

// // 09
var ending = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(ending);
document.write(ending);

//Chapter-3-assignment//

// // 01

var age = +prompt("Enter your age");
alert("my age is "+age);

// // 02

var track = 10;
alert('you have visited '+ track + ' times');

// // 03

var birthYear = +prompt("Enter your birth year");
document.write("My birth year is "+birthYear +"<br>");
var dataType = typeof birthYear;
document.write("data type of my declared birthyear variable is "+"<strong>",dataType,"</strong>","<br>");

// // 04

var visitorName ="Raza";
var productTitle = "book";
var quantity = "4";
document.write("<strong>",visitorName ,"</strong>", " ordered ","<strong>",quantity,productTitle,"</strong>"," from xyz book store");

//Chapter-4-assignment//

// // 01

var firstVariable = "first"; var secondVariable = "second"; var thirdVariable = "third";

// // 02

let legalVariableOne ;
let $_legalVariableTwo ;
let LegalVariableThree ;
let _legalVariableFour ;
let $legalVariable_05 ;

//  let illegal 00@ Variable;
//  let 230illegalVariable;
//  let illegal.,,Variable;
//  let illega@lVariable;
//  let illegal-Variable;

// // 03
 
document.write("<h2>","“Rules for naming JS variables”","</h2>");
document.write("Variable names can only contain ,<b>numbers, $name, $my_name</b>, and <b>myName01. </b>", "<br>");
document.write("Variables must begin with a alphabet <b> (a), ($)</b> or <b>(name.)</b> <br>");
document.write("Variable names are case <b>Case sensitive. </b>","</br>");
document.write("Variable names should not be JS <b>keyword.</b>")

//Chapter-5-assignment//

// // 01 and 02

var firstNumber = +prompt("enter your first number");
var secondNumber = +prompt("enter your second number");

var addition = firstNumber + secondNumber;
var subtraction = firstNumber - secondNumber;
var product= firstNumber * secondNumber;
var division = firstNumber / secondNumber;
var modulus = firstNumber % secondNumber;

document.write("Sum of "+"<b>"+firstNumber+"</b>"+" and "+"<b>"+ secondNumber+"</b>"+ " is ","<b>",addition,"</b>","<br>");
document.write("Subtraction of "+"<b>"+firstNumber+"</b>"+" and "+"<b>"+ secondNumber+"</b>"+ " s ","<b>",subtraction,"</b>","<br>");
document.write("product of "+"<b>"+firstNumber+"</b>"+" and "+"<b>"+ secondNumber+"</b>"+ " is ","<b>",product,"</b>","<br>");
document.write("division of "+"<b>"+firstNumber+"</b>"+" and "+"<b>"+ secondNumber+"</b>"+ " is ","<b>",division,"</b>","<br>");
document.write("modulus of "+"<b>"+firstNumber+"</b>"+" and "+"<b>"+ secondNumber+"</b>"+ " is ","<b>",modulus,"</b>","<br> <br><br><br>");

// // 03
 
var value;
document.write("Value after variable declaration is: ","<b>",value,"</b>","<br>");
 
value = 430;
document.write("initial value is: ","<b>",value,"</b>" ,"<br>");
 
value++ ;
document.write("Value after increment is: ","<b>",value,"</b>" ,"<br>");
 
var newValue = value+7;
document.write("value after addition is :  ","<b>",newValue,"</b>" ,"<br>");
 
newValue--;
document.write("Value after decrement is: ","<b>",newValue,"</b>" ,"<br>");
 
var reminder = newValue % 3;
document.write("Value of reminder is: ","<b>",reminder,"</b>" ,"<br><br><br><br><br>");
 
 
 
// // 04
 
var ticketPrice = 600;
document.write ("price of single ticket is ","<b>",ticketPrice,"</b>" ,"<br>");
var newPrice = ticketPrice*5;
document.write("cost of 5 ticket is ","<b>",newPrice,"</b>" ,"<br><br><br> ");
 
 
 
// // 05
var number = +prompt("Write a number which table you want");
document.write("<b>TABLE OF ",number,"</b><br>");
document.write(number," x 1 = " ,number*1,"<br>");
document.write(number," x 2 = " ,number*2,"<br>");
document.write(number," x 3 = " ,number*3,"<br>");
document.write(number," x 4 = " ,number*4,"<br>");
document.write(number," x 5 = " ,number*5,"<br>");
document.write(number," x 6 = " ,number*6,"<br>");
document.write(number," x 7 = " ,number*7,"<br>");
document.write(number," x 8 = " ,number*8,"<br>");
document.write(number," x 9 = " ,number*9,"<br>");
document.write(number," x 10 = " ,number*10,"<br><br><br>");

// // 06  
 
 
document.write("<b>","The Temperature Converter:","</b><br>");
var celsius = +prompt("ENTER TEMPERATURE IN CELCIUS") ;
var fahrenheit = +prompt("ENTER TEMPERATURE IN FARENHEIT");
var CelsiusIntoFahrenheit = document.write(celsius,"c is ",(celsius*9/5)+32,"F<br>");
var fahrenheit_Into_Celsius = document.write(fahrenheit,"F  is ",(fahrenheit-32)*5/9,"c<br><br><br>");
 
 
// // 07
 
var price0fItem_01 = +prompt("Enter the price of item-01");
var orderedQuantity0fItem_01 = +prompt("Enter the quantity of item-01");
var totalCostOfItem_01= price0fItem_01*orderedQuantity0fItem_01;
var price0fItem_02 = +prompt("Enter the price of item-02");
var orderedQuantity0fItem_02 = +prompt("Enter the quantity of item-02");
var totalCostOfItem_02= price0fItem_02*orderedQuantity0fItem_02;
var shippingCharges = 100;
 
 
document.write("Price of item 1 is ",price0fItem_01,"<br>");
document.write("Quantity of Item 1 is ",orderedQuantity0fItem_01,"<br>");
document.write("Price of item 2 is ",price0fItem_02,"<br>");
document.write("Quantity of Item 1 is ",orderedQuantity0fItem_02,"<br>");
document.write("Shipping charges ",shippingCharges," <br>");
document.write("total Cost Of your  order is",totalCostOfItem_01+totalCostOfItem_02+shippingCharges,"<br><br>");
 
// // 08
 
document.write("<b>Marksheet</b> <br>");
var totalMarks = +prompt("ENTER YOUR TOTAL MARKS");
var obtainedMarks = +prompt("ENTER YOUR OBTAINED MARKS");
document.write("Total Marks = " ,"<b>", totalMarks,"</b> <br>");
document.write("obtained marks = ","<b>",  obtainedMarks, " </b> <br>");
var percentage = document.write("percentage = <b>",obtainedMarks/totalMarks*100,"</b> <br> <br><br>");
 
 
// // 09
 
document.write("Curency in PKR <br>");
var usDollar = 10;
var saudiRiyal = 25;
var total = (10*104.80 + 25*28);
document.write("Total Curreny in PKR: <b> " + total,"</b><br><br><br>");
 
 
// // 10
 
var numberValue = 1;
document.write("your initial value is : <b>",numberValue,"</b><br> after adding 5 to the value : <b>",numberValue+5,"</b></br> multiply value by 10 :<b>",newValue*10,"</b><br> divide te value by 2 :<b>",newValue/2,"</b><br><br><br>")

// // 11

var currentYear = 2024;
var bithYear = +prompt("Enter your birth year");
var yourAge = document.write("current year : ",currentYear, "<br/> birth year : ",bithYear,"<br> your age : ",currentYear-bithYear,"<br><br><br>");
 
// // 12
 
var radius = +prompt("Enter the radius of circle");
var circumference = (2*3.142*radius);
var area = (3.142*radius**2);
document.write("radius of a circle is : ",radius,"<br> circumference of the circle is :  ",circumference,"<br> total area of circle is : ",area,"<br><br><br>");
 
// // 13

document.write("<b>The Lifetime Supply Calculator:</b> <br> <br>");
var snake = "cocomo";
var age = +prompt("Enter your age");
var maxAge = +prompt("Enter your maximum age");
var takingDays = +prompt("how much you take in a day?");
var total = (maxAge*takingDays - takingDays*age) ;
document.write( "<h1>" + "The Lifetime Supply Calculator" + "</h1>"+"Favourite Snake: " + snake + "<br>" + "Current Age: " + age + "<br>" + "Estimated Maximum Age: " + maxAge + "<br>"  + "Amount of snakes per day: "  + takingDays + "<br>"  + "You will need " + total + " " + snake  + " to last you until the ripe old age of " + maxAge);