playerName1 = localStorage.getItem("p1_name");
playerName2 = localStorage.getItem("p2_name");
playerScore1 = 0;
playerScore2 = 0;
ques_turn = "player1";
ans_turn = "player2";

document.getElementById("player1_name").innerHTML = playerName1 + ":";
document.getElementById("player2_name").innerHTML = playerName2 + ":";

document.getElementById("player1_score").innerHTML = playerScore1;
document.getElementById("player2_score").innerHTML = playerScore2;

document.getElementById("player_question").innerHTML = "Question Turn - " + playerName1;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + playerName2;
 
//sending and display with dashes//
function send(){
    //fetching the input numbers//
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    //fetchint the input operation
    op = document.getElementById("operation").value;
    if (num1 != "" && num2 != "" && op != "" ){
       //layout in js fordisplaying the question in output div//
       //defing question heading with final word var//
       question = "<h4 id='word_display'> Q." + num1 + op + num2 + "</h4><br>";
       //defining input box for typing the answer//
       answerInput = "Answer: <input type='text' placeholder = 'Enter Answer' id='answerInput'><br><br>";
       //defining button for checking answer//
       checkButton = "<button id='checkButton' class='btn btn-info' onclick='check()'>Check </button>";
       //defining var to store all of them in one var for putting in the output div//
       row = question +  answerInput + checkButton;
       //inserting row inside output div//
       document.getElementById("output").innerHTML = row;
       document.getElementById("num1").value = "";
       document.getElementById("num2").value = "";
       if(op == "+"){
           result = num1 + num2;
       }
       if(op == "-"){
           result = num1 - num2;
       }
       if(op == "*"){
           result = num1 * num2;
       }
       if(op == "/"){
           result = num1 / num2;
       }
       if(op == "Operations"){
           alert("'operation' is not a mathematical function");
           document.getElementById("output").innerHTML = "";
       }
    }
}  


function check(){
    answer = document.getElementById("answerInput").value;

    if(answer == result){
        if(ans_turn == "player1"){
            playerScore1 = playerScore1 + 1;
            document.getElementById("player1_score").innerHTML = playerScore1;
        }
        else{
            playerScore2 = playerScore2 + 1;
            document.getElementById("player2_score").innerHTML = playerScore2;
        }
    }
    if(ans_turn == "player1"){
        ans_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + playerName2;
    }
    else{
        ans_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + playerName1;
    }

    if(ques_turn == "player1"){
        ques_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + playerName2;
    }
    else{
        ques_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn - " + playerName1;
    }   
    document.getElementById("output").innerHTML = "";
   }
