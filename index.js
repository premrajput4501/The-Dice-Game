var randomnumber1=Math.floor(Math.random()*6)+1; //generating random number 1-6

var randomnumber2 = Math.floor(Math.random()*6)+1;

function roll1(){

        var randomImgSource = "images/dice"+randomnumber1+".png"; // /images/dice-n.png string generated
        // console.log(randomImgSource);

        var img1= document.querySelectorAll("img")[0]; //creating a selector to easily select the first img tag with index 0

        img1.setAttribute("src",randomImgSource);

        document.querySelectorAll("p")[1].innerHTML = "Player 1 rolls " +randomnumber1; 

}

// __________________ Much easy

function roll2(){  

        var randomImgSource2 = "images/dice"+randomnumber2+".png";

        document.querySelectorAll("img")[1].setAttribute("src",randomImgSource2);

        document.querySelectorAll("p")[2].innerHTML = "Player 2 rolls " +randomnumber2; 

        if (randomnumber1 > randomnumber2){
            document.querySelector("h1").innerHTML= "Player 1 wins!"
            document.querySelector("h1").style.color="#00ff1a"
            console.log(randomnumber1);
            console.log("p1 wins")
        }
        else if (randomnumber2 > randomnumber1){
            document.querySelector("h1").innerHTML= "Player 2 wins!"
            document.querySelector("h1").style.color="#00ff1a"
            console.log(randomnumber2);
            console.log("p2 wins")
        } else {
            document.querySelector("h1").innerHTML= "Draw : ("
            document.querySelector("h1").style.color="white"
            console.log("draw")
            console.log(randomnumber1);
            console.log(randomnumber2);
        }

        document.querySelector("button").style.visibility="visible";

}

function restart(){
    location.reload();
}



      

