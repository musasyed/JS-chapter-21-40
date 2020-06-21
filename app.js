// chapter 21-25

// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
first_name= prompt("Enter first name");
last_name=prompt("Enter last name");
fullName=first_name+" "+last_name;
document.write("Welcome to this site "+fullName+"<br>");

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser


str=prompt("My Favourite mobile is :");
var n = str.length;
document.write("Length of string : "+n+"<br>");


// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

str=prompt("String");
var n = str.indexOf("n");
document.write("Index of \'n\': "+n);

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser


str=prompt("String");
var n = str.lastIndexOf("l");
document.write("Index of \'l\': "+n);


// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.


str=prompt("String");
var l = str[3];
document.write("character at index 3: "+l);


// 6. Repeat Q1 using string concat() method

first_name= prompt("Enter first name");
last_name=prompt("Enter last name");
fullName=first_name.concat(last_name);
document.write("Welcome to this site "+fullName+"<br>");


// Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.
str=prompt("city:");
var l = str.replace("Hyderabad","Islamabad");
document.write("After replacement : "+l+"<br>");


// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;
var message = "Ali and Sami are best friends. They play cricket and football together."
re=message.replace(/and/g,"&");
document.write(re+"<br>");



// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

 var str="472";
 var number=parseInt(str);
 document.write("Value :"+str+"<br>");
 document.write("type :"+typeof str+"<br>");
 document.write("Value :"+number+"<br>");
 document.write("type :"+typeof number+"<br>");


// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

str=prompt("User input ");
up=str.toUpperCase();
document.write("Upper case:"+up+"<br>");


// 11. Write a program that takes user input. Convert and
// show the input in title case.
str=prompt("User input ");
up=str.charAt(0).toUpperCase() + str.slice(1);
document.write("title case:"+up+"<br>");


// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

var num = 35.36 ;
str=num.toString();
str=str.replace('.',"");
document.write("Number :"+num+"<br>");
document.write("String :"+str+"<br>");


// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

user_name=prompt("Enter user name");
for (i=0;i<user_name.length;i++)
{
if(user_name[i].charCodeAt()==33 && user_name[i].charCodeAt()== 44 && user_name[i].charCodeAt()== 46 && user_name[i].charCodeAt()==64)
{
    alert("enter a valid username");
}
}


// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

document.write("<br>");

A = ["cake", "apple pie", "cookie", "chips", "patties"];
var itemin=prompt("Enter item name");
for (i=0;i<A.length;i++)
{
if (itemin==A[i]){
    document.write(itemin+" is Avalible at index "+i +" in Our Backery<br>");
}
else{
    document.write("We are Sorry."+itemin+" is not AVALIBLE in our backery<br>");
    break;
}
}


// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.


var text=prompt("Enter password ");
			if(text.match(/[\d]/))
				{
					document.write('password cannot begin with a numer \n enter a valid number');
				}
            



// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
var arr=[];
var university = "University of Karachi";
arr=university.split("");
for (i=0;i<arr.length;i++)
{
document.write(arr[i]+"<br>");
}


// 17. Write a program to display the last character of a user
// input.
Str=prompt("User input :");
document.write("Last Character of input :"+Str.slice(-1)+"<br>");


str=prompt("Text");
conut=0;
word="The";
for(i=0;i<str.length;i++){
    if(word in str)
    {
        count=count+1
    }
}
document.write("Occurance of the is : "+count+"<br>");


// Chapter 26 to 30

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

n=prompt("Enter a number");
if (n<0){
    alert("Enter a positive number");
}
else{
 document.write("Number :"+n+"<br>");
 document.write("round off value :"+Math.round(n)+"<br>");
 document.write("floor value :"+Math.floor(n)+"<br>");
 document.write("ceil value :"+Math.ceil(n)+"<br>");

}

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

n=prompt("Enter a number");
if (n>=0){
    alert("Enter a negative number number");
}
else{
 document.write("Number :"+n+"<br>");
 document.write("round off value :"+Math.round(n)+"<br>");
 document.write("floor value :"+Math.floor(n)+"<br>");
 document.write("ceil value :"+Math.ceil(n)+"<br>");

}



// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var n=-4;
document.write("absolute value of "+n+" is "+Math.abs(n)+"<br>");





// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.
var n=0;
document.write("Random dice value is "+Math.floor((Math.random() * 6) + 1)+"<br>");



// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
x = (Math.floor(Math.random() * 2) == 0);
    if(x){
        document.write("Random coin value: heads<br>");
    }else{
        document.write("Random coin value:tails<br>");
    }



// 6. Write a program that shows a random number between 1
// and 100 in your browser.

document.write("Random number between 1 and 100 :"+Math.floor((Math.random() * 100) + 1)+"<br>");




// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

weigh=prompt("Enter your weight in killograms");
document.write("weight of the user is : "+weigh+"<br>");


// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user
n=prompt("Enter a number 1 to 10 :");
n1=Math.floor((Math.random()*10)+1);
if(n==n1){
    document.write("Congratulate <br>");
}


// chapter 31-34

// 1. Write a program that displays current date and time in
// your browser.
var d=new Date();
document.write(d+"<br>");

// 2. Write a program that alerts the current month in words.
// For example December.

var d = new Date();
var n = d.getMonth();
mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
document.write("Current Month is :"+mL[n]+"<br>");


// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

var d = new Date();
var n = d.getDay();
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
document.write("Today is "+[days]+"<br>");


// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today

day="sunday";
if(day=="sunday" || day =="saturday")
{
    document.write("It's Fun Day<br>");
}


// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”


var d = new Date();
var n = d.getDate();
if(n<16){
document.write("First fifteen days of month <br>");
}
else{
document.write("last days of month <br>");

}


// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

var d = new Date();
document.write("Current date :"+d+"<br>");
n=d.setDate(1-1-1970);
m=n/60;
document.write("Elapsed milli seconds since jan.1.1970 :"+n+"<br>");
document.write("Elapsed minutes seconds since jan.1.1970 :"+m+"<br>");


// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

var dt = new Date();
    var h =  dt.getHours(), m = dt.getMinutes();
    var _time = (h > 12) ? ('Its PM') : ('Its AM');
    document.write(_time+"<br>");


// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.
int_d = new Date(2008, 11+1,1);
d = new Date(int_d - 1);
document.write("Latter date :"+d+"<br>");

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
int_d = new Date(2015, 6,18);
d=new Date();
dd=d-int_d;
document.write(dd);

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.


var d = new Date(2015,1,1);
document.write("on reference date  :"+d+"<br>");
m=new Date();
m1=m.getMilliseconds()
n=d.getMilliseconds();
k=m1-n;
document.write(k+ " Milliseconds had passed since 2015<br>");


// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

m=new Date();
document.write("Current date : "+m+"<br>");
ss=m.getHours();
ss=ss-1;
k=m.setHours(ss);
document.write("1 hour ago it was "+k+"<br>");


// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?
var d = new Date();
d.setFullYear(1920);
document.write("100 years ago "+d+"<br>");



// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

age=prompt("Your age is ");
var d = new Date();
ss=2020-age;
d.setFullYear(ss);
document.write(age+" years ago "+d+"<br>");


// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
d = new Date();
Late_charge=12;
name =prompt("Customer name");
month=d.getMonth();
units=prompt("Input Units");
per_unit=prompt("Charge per unit");
pay_amount=Number(units)*Number(per_unit);
after_date=pay_amount+Number(Late_charge);
document.write("<h1>K-Electric Bill</h1><br>");
document.write("Name: "+name+"<br>");
document.write("Month : "+month+"<br>");
document.write("Units : "+units+"<br>");
document.write("Per unit charge: "+per_unit+"<br>");
document.write("Net payable amount: "+pay_amount+"<br>");
document.write("After date : "+after_date+"<br>");


// chapter 35 -38

// 1. Write a function that displays current date & time in your
// browser.

function timer(){
    var d=new Date();
    document.write(d+"<br>");
}

timer();

// 2. Write a function that takes first & last name and then it
// greets the user using his full name

function fullname(){
first_name= prompt("Enter first name");
last_name=prompt("Enter last name");
fullName=first_name+" "+last_name;
document.write("Welcome to this site "+fullName+"<br>");
}

fullname();



// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

function addition(){
    n1=prompt("Enter a number");
    n2=prompt("Enter 2nd number ");
    return n1+n2;
}

var add=addition();



// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

function Calculate(num1,num2,op){
    if(op=="*"){
        document.write(num1*num2);
    }
    else if(op=="+"){
        document.write(num1+num2);

    }
    else if(op=="-"){
        document.write(num1-num2);

    }
    else if(op=="%"){
        document.write(num1%num2);

    }
    else if(op=="/"){
        document.write(num1/num2);

    }
}

Calculate(12,12,"*");



// 5. Write a function that squares its argument.
function square(number){
    document.write(number**2+"<br>");
}

square(5);


// 6. Write a function that computes factorial of a number.

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
  alert( "Factorial is "+factorial(5) ); 


// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

function count(start,end){
    for(i=start;i<=end;i++)
    {
        document.write(i+"<br>");
    }
}

count(5,10);


// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()


function right_angle(base,perpendicular){
    function square(num){
        return num**2;
    }
    hyp= square(base)+square(perpendicular);
    hypotenuse=hyp**0.5;
    document.write("Hypertenuse : "+hypotenuse);
}

right_angle(12,12);



// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables


function area(_width,height){
    document.write("Area is "+_width*height);
}
height=12;
area(12,height);


// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

function check_Palindrome(str_entry){
       var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
        var ccount = 0;
    
        if(cstr==="") {
            document.write("Nothing found!");
            return false;
        }
 
        if ((cstr.length) % 2 === 0) {
            ccount = (cstr.length) / 2;
        } else {
            if (cstr.length === 1) {
                document.write("Entry is a palindrome.");
                return true;
            } else {

                ccount = (cstr.length - 1) / 2;
            }
        }
    
           for (var x = 0; x < ccount; x++) {
   
            if (cstr[x] != cstr.slice(-1-x)[0]) {
                document.write("Entry is not a palindrome.");
                return false;
            }
        }
        document.write("The entry is a palindrome.");
        return true;
    }
    check_Palindrome('madam');

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
    
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
   
    return splitStr.join(' '); 
 }
 
 document.write(titleCase("the quick brown fox"));



// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'


function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
document.write(find_longest_word('Web Development Tutorial'));




//13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'



function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

document.write(char_count('JSResourceS.com', 'o'));



// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2


function calcCircumfrence(radius) {
    var y = (Math.PI * radius) * 2;
 document.write("The circumfrence is " + y + ".<br>");
  }
  function calcArea(radius) {
    var x = (Math.PI * radius) * radius;
  document.write("The area is " + x + ".<br>");
  }
  
  calcCircumfrence(30);
  calcArea(10);
  