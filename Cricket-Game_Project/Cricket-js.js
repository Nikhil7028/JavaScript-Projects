
let scoreStr= localStorage.getItem("score");
let score;
if(scoreStr != undefined){
  score= JSON.parse(localStorage.getItem("score"));
}
else{
    score={
    win:0,
    lost:0,
    tie:0,      
  };
}

score.display = function() {
    return `user win : ${score.win} lost : ${score.lost} tie : ${score.tie}`;

  }
function generateRandom(){
  let computerSelect = Math.round(Math.random() * 2);
  if(computerSelect===0)
    return 'Ball';
  else if(computerSelect===1)
    return 'Bat';
  else
    return 'Stamp';
}
// check Results
function checkResult(userSelect, computerMove) {

  if (userSelect == 'Bat') {
    if (computerMove === 'Ball') {
      score["win"] +=1;
      return 'User Win ';
    } else if (computerMove === 'Stamp') {
      score["lost"] +=1;
      return 'Computer Win';
    }
    else {
      score["tie"] +=1;
      return 'It\'s a Tie';
    }
  }
  else if (userSelect === 'Ball') {
    if (computerMove === 'Ball') {
      score.tie++;
      return 'It\'s a Tie';
    } else if (computerMove === 'Stamp') {
      score.win++;
      return 'User Win ';
    }
    else {
      score.lost++;
      return 'Computer Win';
    }
  }
  // Stamp
  else {
    if (computerMove === 'Ball') {  
      score.lost++;        
      return 'Computer Win';
    } else if (computerMove === 'Stamp') {
      score.tie++;
      return 'It\'s Tie';
    }
    else {
      score.win++;
      return 'User Win';
    }

  }
}

// reset the score 
function resetScore(){
  localStorage.clear();
  score.win=0;
  score.lost=0;
  score.tie=0;
  document.querySelector("#score").innerText="";
  document.querySelector("#result").innerText="";
  document.querySelector("#user-select").innerText="";
  document.querySelector("#computer-select").innerText="";
}
function display(userSelect, computerMove, result){
  localStorage.setItem("score", JSON.stringify(score))
  
  document.querySelector("#user-select").innerText=`User select ${userSelect}`;
  document.querySelector("#computer-select").innerText=`computer select ${computerMove}`;
  document.querySelector("#result").innerText=`${result} `;
  document.querySelector("#score").innerText=`${score.display()}`;
}
