playerName1 = localStorage.getItem("p1_name");
playerName2 = localStorage.getItem("p2_name");
playerScore1 = 0;
playerScore2 = 0;

document.getElementById("player1_name").innerHTML = playerName1 + ":";
document.getElementById("player1_name").innerHTML = playerName1 + ":";

document.getElementById("player1_score").innerHTML = playerScore1;
document.getElementById("player1_score").innerHTML = playerScore2;

document.getElementById("player_question").innerHTML = "Question Turn - " + playerName1;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + playerName2;
 
//sending and display with dashes//
function send(){
    //fetching the input word//
    get_word = document.getElementById("word").value;
    //making lower case//
    word = get_word.toLowerCase();
    //console the word//
    console.log("Word = " + word);
    //CharAt1 var//
    charAt1 = word.charAt(1);
    //middle of the word(floor removes decimal ex - floor(5/2) = 2.5 = 2)//
    middle = Math.floor(word.length/2);
    //CharAt2 var //
    charAt2 = word.charAt(middle);
    //last of the word//
    last = Math.floor(word.length - 1);
    //charAt3//
    charAt3 = word.charAt(last);
    //replacing word with var "remove1"//
    remove1 = word.replace(charAt1,"_");
    //replacing remove1 with var "remove2"//
    remove2 = word.replace(charAt2,"_");
    //replacing remove2 with var "remove3"//
    remove3 = word.replace(charAt3,"_");
    //storing the final word in final_word//
    final_word = remove3;
    //layout in js fordisplaying the question in output div//
    //defing question heading with final word var//
    question = "<h4 id='word_display'> Q." + final_word + "</h4><br>"; 
    //defining input box for typing the answer//
    answerInput = "Answer: <input type='text' placeholder = 'Enter Answer' id='answerInput'><br><br>";
    //defining button for checking answer//
    checkButton = "<button id='checkButton' class='btn btn-info' onclick='check()'>Check </button>";
    //defining var to store all of them in one var for putting in the output div//
    row = question + answerInput + checkButton;
    //inserting row inside output div//
    document.getElementById("ouput").innerHTML = row;
    document.getElementById("word").value = "";
}