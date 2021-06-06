// var userconsent = confirm("this site will ask you for some information to enhance your experience")

// if(userconsent==true){
// var userAge = prompt("Enter your age ? ");
// var userName= prompt("Enter your name")


// if(userAge>=18){
//   console.log("Welcome dear parent");
//   document.write("<p'> Mr/Mrs. " + userName + " .Please visit us anytime </p>");
// }
// else if(userAge<18)
// {
//   console.log("welcome dear student");
//   document.write("<p'> Dear " + userName + " .Please visit us anytime </p>");
// }
// else 
// {
//   alert("you have intered invalid information")
//  console.log("welcome dear Visitor")
// }


// }
// else{alert("user experience has not been optimized")}

//asking for the user consent
var userconsent = prompt("this site will ask you for some information to enhance your experience")

username = prompt("are you a parent or a student ? ");
username= user();//check if the user have intered values correctly

if (username =="student"){
var userGrade= prompt("which grade are you?");
document.write(image(userGrade));
}
else if("parent"){
var parentuserGrade= prompt("which grade is your child?");
document.write(image(parentuserGrade));

}



// function gradeproblem (y){
// while(!y){
//   userGrade= prompt("which grade are you concerned in ?");
// }}





// function isitagrade (y){ //it checks if the grade is viable
//   if (y>=1&&y<=12){
//   return true;}
//   else {
//     return false;}
// }







function user(){//check if the user have intered values correctly and ask the user for another input incase it was not correct
while (!(username=="parent" || username=="student")){

  username = prompt("please make sure you have typed either 'parent' or 'student' ? ")
  
}return username
}

function image(y){
  var output='';

for(var i=0;i<y;i++){
  
  output=output+"<img src='https://cdn4.vectorstock.com/i/1000x1000/61/58/graduation-cap-icon-isolated-graduation-hat-vector-25036158.jpg'width='100' height='100'> "
  console.log(i,output);
}
return output;
}