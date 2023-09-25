/*Ishmael Sutton*/
function palindrome()
{
var Firstpalin = document.getElementById("Firstpalindrome").value
var Firsts = Firstpalin.split("");
var Firstr = Firsts.reverse();
var Firstj = Firstr.join("");
if (Firstpalin ==Firstj)
{
    document.getElementById("Firstpalindrome").innerHTML = "This is a palindrome"
}
}