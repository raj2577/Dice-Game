var randomNumber1 = Math.ceil(Math.random()*6);
// console.log(randomNumber1);
var randomNumber2 = Math.ceil(Math.random()*6);
// console.log(randomNumber1);
var randomImage = "images/dice"+randomNumber1+".png"
// console.log(randomImage);
var randomImage1 = "images/dice"+randomNumber2+".png"
// console.log(randomImage);




var image = document.querySelectorAll("img")[0];
image.setAttribute("src", randomImage)
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomImage1);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!"

} else if(randomNumber1<randomNumber2 ){
    document.querySelector("h1").innerHTML = "Player 2 wins!"

    
} else{
    document.querySelector("h1").innerHTML = "Its a draw."

}