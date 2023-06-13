function send(){
    number1= document.getElementById("number1").ariaValueMax;
    number2=document.getElementById("number2").ariaValueMax;
    actual_answer=parseInt(number1)*parseInt(number);

    question_number='<h4 id="h4word"> '+number1+ "X" +number2'</h4>'
    input_box='<br>Answer :<input type="text" id="input_check_box"> <br>'
    button='<input type="button" id="b1" value="check" onclick='check()>'
    row=input_word+answer+button;
    document.getElementById("number1").innerHTML=row
    document.getElementById("number2").value=""

    qt="player1";
    at="player2"

}
function check(){
    get_ans= document.getElementById("input_check_box").value
    
    if(get_ans==actual_answer){
       if(at=="player1"){
          player1score=player1score+1
          document.getElementById("p1score").innerHTML=player1score;
       }
       else{
           player2score=player2score+1
           document.getElementById("p2score").innerHTML=player2score;
       }
    }
    if(qt=="player1"){
       qt="player2"
       document.getElementById("qt").innerHTML="question turn"+player2;
    }
    else{
       qt="player1"
       document.getElementById("qt").innerHTML="question turn"+player1;
    }

    if(at=="player1"){
       at="player2"
       document.getElementById("at").innerHTML="answer turn"+player2;
    }
    else{
       at="player1"
       document.getElementById("at").innerHTML="answer turn"+player1;
    }
    document.getElementById("output").innerHTML=""
}