player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;



function send() {
  number_1 = document.getElementById("number1").value;
  number_2 = document.getElementById("number2").value;
  actual_answer = parseInt(number_1)*parseInt(number_2);

  question_number = "<h4" + number_1 + "X"+ number_2 + "</h4>";
  input_box = "<br>Answer : <input type='text' id='input_check_box'>";
  check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
  row = question_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
    number_1 = document.getElementById("number1").value = "";
    number_2 = document.getElementById("number2").value = "";
}
question_turn = "player1";
answer_turn = "player2";
function Check() {
    get_answer = document.getElementById("input_check_box").value;
    
    
    if ( get_answer == actual_answer) {
        if (answer_turn == "player1") {
            update_player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        }
        else{
            update_player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML = update_player2_score;
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }
    else{
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }
    
    if (answer_turn == "player1") {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    }
    else{
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }    
     
    document.getElementById("output").innerHTML = "";
}