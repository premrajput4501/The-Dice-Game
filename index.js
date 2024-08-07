var randomnumber1=Math.floor(Math.random()*6)+1; //generating random number 1-6

var randomnumber2 = Math.floor(Math.random()*6)+1;

document.querySelectorAll("p")[1].innerHTML = "Turn - Player 1";
document.querySelectorAll("p")[1].style.color="cyan";
document.querySelectorAll("p")[1].style.textDecoration="underline";

document.querySelectorAll("img")[0].addEventListener("click",roll1);

function roll1(){

        var randomImgSource = "images/dice"+randomnumber1+".png"; // /images/dice-n.png string generated

        document.querySelectorAll("img")[0].setAttribute("src",randomImgSource); //creating a selector to easily select the first img tag with index 0

        document.querySelectorAll("p")[1].innerHTML = "Player 1 rolls - " +randomnumber1; 
        document.querySelectorAll("p")[1].style.textDecoration="none";
        document.querySelectorAll("p")[1].style.color="blue";

        document.querySelectorAll("img")[0].removeEventListener("click",roll1);

        document.querySelectorAll("p")[2].innerHTML = "Turn - Player 2"; 
        document.querySelectorAll("p")[2].style.color="cyan";
        document.querySelectorAll("p")[2].style.textDecoration="underline";

        document.querySelectorAll("img")[1].addEventListener("click",roll2);


}

// __________________ Much easy

function roll2(){  

        var randomImgSource2 = "images/dice"+randomnumber2+".png";

        document.querySelectorAll("img")[1].setAttribute("src",randomImgSource2);

        document.querySelectorAll("p")[2].innerHTML = "Player 2 rolls - " +randomnumber2;
        document.querySelectorAll("p")[2].style.textDecoration="none";
        document.querySelectorAll("p")[2].style.color="blue";
        

        if (randomnumber1 > randomnumber2){
            document.querySelector("h1").innerHTML= "Player 1 wins!"
            document.querySelector("h1").style.color="#00ff1a"
        }
        else if (randomnumber2 > randomnumber1){
            document.querySelector("h1").innerHTML= "Player 2 wins!"
            document.querySelector("h1").style.color="#00ff1a"
        } else {
            document.querySelector("h1").innerHTML= "Draw : ("
            document.querySelector("h1").style.color="grey"
        }

        document.querySelector(".restart-button").style.visibility="visible";

}

function restart(){
    location.reload();
}





      

