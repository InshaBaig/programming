// // 1.Ways to print in JavaScript
// // console.log('hello word');
// // document.write("this is document Write");
// // alert ("me");
// // 2.javascript console API
// console.warn("warning message to consoles");
// console.error("error message to consoles");
// // 3 javascript Varibles
// // waht are variable?-container to store data value

// /*Multi-
// line-
// comment*/
 
// var number1 = 11;
// var number2 = 22;
// console.log( number1 + number2);

// // Data type in java script
// //string
// var str1="this is a string";
// var str2='this is also a string';
// var string="this is also a string";
// var string1="this is also a string";

// //number
// var num1=1456
// var num2=89.23
// //object
// var marks={
//     ravi: 34,
//     shubham: 78,
//     harry: 99.977
// };

// console.log (marks);

// //Booleans
// // var a=true;
// // var b=false;

// //wo Variable jis ke ander koi value nahi h-UNDEFINE
// //variable bana ke chor diya,koi value nahi dali
// var und;
// console.log(und);


// //null-me khud ke rahi hu is null nam ke variable m ander kuch mat rakho
//  var n=null;
//  console.log(n);

// /*
// At very high level there are 2 type of data type in Java Script
// 1-premative data type:undefined, null, number, string, boolean, symbol. 
// 2-referance data type: Arrays and objects

// */

// //Array-collection of  
// var arr=[1,2,"insha",4,5];

// //operator in java script
// //airthematic operator 
// // var a=100
// // var b=10
// console.log("The value of a+b is", a+b);
// console.log("The value of a-b is", a-b);
// console.log("The value of a*b is", a*b);
// console.log("The value of a/b is", a/b);

// // Assigment operator
// //var c=b;
// //c+=2
// //console.log(c);
// //c*=2
// // c-=2
// // c/=2

// //comprasion operator
// var x=52
// var y=566
// x==y
// // console.log(x==y)
// // console.log(x>=y)
// // console.log(x<=y)
// // console.log(x<y)
// // console.log(x>y)


// //logical operator
// //*and
// // console.log(true&&true)
// // console.log(true&&false)
// // console.log(false&&true)
// // console.log(false&&false)
// // //+or
// // console.log(true||false)
// // console.log(true||true)
// // console.log(false||true)
// // console.log(false||false)
// //not
// console.log(!false)
// console.log(!true)

// function

var v
function avg(k,l)

{
  
    v=(k+l)/2;
   return v; 
}
console.log(v);
console.time('your code took');
console.log('To see output on console');
console.log(55+55);
console.log(true);
//Array formate
console.log([33,2]);
//object formate
console.log({56: 'uqi'});
console.table({w: "yh", p: "l"});
console.timeEnd('your code took');


for (var i = 1; i<= 5; i++)
    {
    for(var j = 4; j>=i; j++)
     {
            document.write("insha");
        }
        document.write("<br>");
    }
    
    for (var i=1;i<=4;i++)
    {
        for(var j=1; i>=4;j--)
        {
            document.write("*");

        }

    document.write("<br>");
    }








