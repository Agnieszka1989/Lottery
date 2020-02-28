function play() {
var fname = prompt("Please insert your First name");
var sname = prompt("Please insert your Surname");
var age = prompt("Please insert your Age");
var luckynumber = prompt("Please chose number between 1 and 20");


document.getElementById('jum-title').innerHTML = fname + sname + age;



var RandomImage = "pic" + luckynumber + ".PNG";
var ImageSource = "pictures/" + RandomImage;
var image = document.querySelectorAll('img')[0];

image.setAttribute("src", ImageSource);
}
