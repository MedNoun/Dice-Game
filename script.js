var p1Dice=document.querySelector(".img1");
var p2Dice=document.querySelector(".img2");
var text=document.querySelector("h1");
var rand1=0;
var rand2=0;
var i=0;
var j=0;
function winner(){
    if(i!=0 && j!=0){
    if(rand1>rand2){
        text.innerHTML="Player1 wins";
    
    }else{
        if(rand2>rand1){
            text.innerHTML="Player2 wins";
        }else{
            text.innerHTML="Draw!";
        }
    }
    
    i=0;
    j=0;
}
}

p1Dice.addEventListener("click", function(){
    rand1=Math.floor(Math.random()*6+1);
    this.setAttribute("src","images/dice"+rand1+".png");
    i++;
    winner();

});
p2Dice.addEventListener("click", function(){
    rand2=Math.floor(Math.random()*6+1);
    this.setAttribute("src","images/dice"+rand2+".png");
    j++;
    winner();
});
alert("hellp");



