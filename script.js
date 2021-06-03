var userconsent = confirm("this site will ask you for some information to enhance your experience")

if(userconsent==true){
var userAge = prompt("Enter your age ? ");
var userName= prompt("Enter your name")


if(userAge>=18){
  console.log("Welcome dear parent");
  document.write("<p'> Mr/Mrs. " + userName + " .Please visit us anytime </p>");
}
else if(userAge<18)
{
  console.log("welcome dear student");
  document.write("<p'> Dear " + userName + " .Please visit us anytime </p>");
}
else 
{
  alert("you have intered invalid information")
 console.log("welcome dear Visitor")
}


}
else{alert("user experience has not been optimized")}


