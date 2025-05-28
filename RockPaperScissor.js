let userScore=0;
let compScore=0;
const userScoreTracker = document.querySelector("#user-score");
const compScoreTracker = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");
const reset = document.querySelector("#reset");
reset.addEventListener("click",()=>{
    compScore=0;
    userScore=0;
    msg.innerText="Play your Move"
    userScoreTracker.innerText=compScoreTracker.innerText="0";

})
const generateRandom = ()=>{
    const index=["rock","paper","scissor"];
    const compCh = Math.floor(Math.random()*3);
    console.log(compCh);
    return index[compCh];

}
const draw=()=>{
    msg.innerText="Draw";
}
const showWinner =(w)=>{
    if(w){
    userScore++;
    msg.innerText="User win ";
    userScoreTracker.innerText=userScore;
   }
   else{
    compScore++;
    msg.innerText="Computer win ";
    compScoreTracker.innerText=compScore;
   }

}
const playGame = (userCh)=>{
   const compCh=generateRandom();
   console.log("user choice",userCh);
    console.log("computer choice",compCh);
   
   if(userCh===compCh){
    draw();
   }
   else {
    let userWin=true;
    if(userCh==="rock"){
    userWin=compCh==="paper"?true:false
   }
   else if(userCh==="paper"){
    userWin=compCh==="rock"?true:false
   }
   else {
    userWin=compCh==="rock"?true:false
   }
   showWinner(userWin);

   }

   
}

const choices= document.querySelectorAll(".choice");
choices.forEach((ch)=>{
    ch.addEventListener("click",() =>{
        const userId =ch.getAttribute("id");
        
        playGame(userId);
    
    });
});


