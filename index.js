 
var userScore = 0;
var answerCount = 0;

var button1 = document.getElementById("sendButton");
var button2 = document.getElementById("sendButton2");
var button3 = document.getElementById("sendButton3");
var button4 = document.getElementById("sendButton4");
var button5 = document.getElementById("sendButton5");
var button6 = document.getElementById("sendButton6");
var button7 = document.getElementById("sendButton7");
var button8 = document.getElementById("sendButton8");
var button9 = document.getElementById("sendButton9");
var button10 = document.getElementById("sendButton10");

var resultTitle = document.getElementById("resultTitle");
var benGvirImage = document.getElementById("benGvir");
var hasbullaImage = document.getElementById("imgContanier");
var nitzanImage = document.getElementById("nitzanLeft");
var ahmedImage = document.getElementById("ahmed");
var result = document.getElementById("resultText");
var resultDeskription = document.getElementById("resultDeskription");



resultTitle.style.display = "none";
benGvirImage.style.display = "none";
hasbullaImage.style.display = "none";
nitzanImage.style.display = "none";
ahmedImage.style.display = "none";


var correctAnswers = 0;
var answerCount = 0;


button1.addEventListener("click", function(){
        if(document.getElementById("option1q1").checked){
                document.getElementById("option1q1").checked = false;
		button1.style.display = "none"; 
                answerCount += 1;
        }   else if(document.getElementById("option2q1").checked){
                button1.style.display = "none";
                correctAnswers += 1;
                answerCount += 1;
                document.getElementById("option2q1").checked = false;
        }   else if(document.getElementById("option3q1").checked){
                button1.style.display = "none";
                document.getElementById("option3q1").checked = false;
                answerCount += 1;
        }   else if(document.getElementById("option4q1").checked){            
                button1.style.display = "none";
                answerCount += 1;
                document.getElementById("option4q1").checked = false;
        }   else{
                alert(".תענה על השאלה")            
        }

}
)




button2.addEventListener("click", function(){
        if(document.getElementById("option1q2").checked){
                document.getElementById("option1q2").checked = false;
		button2.style.display = "none"; 
                answerCount += 1;
        }   else if(document.getElementById("option2q2").checked){
                button2.style.display = "none";
                answerCount += 1;
                document.getElementById("option2q2").checked = false;
        }   else if(document.getElementById("option3q2").checked){
                button2.style.display = "none";
                answerCount += 1;
                document.getElementById("option3q2").checked = false;
        }   else if(document.getElementById("option4q2").checked){            
                button2.style.display = "none";
                answerCount += 1;
                correctAnswers += 1;
                document.getElementById("option4q2").checked = false;
        }   else{
                alert(".תענה על השאלה")            
        }
}
)

button3.addEventListener("click", function(){
        if(document.getElementById("option1q3").checked){
                document.getElementById("option1q3").checked = false;
		button3.style.display = "none"; 
                answerCount += 1;
                correctAnswers += 1;
        }   else if(document.getElementById("option2q3").checked){
                button3.style.display = "none";
                answerCount += 1;
                document.getElementById("option2q3").checked = false;

        }   else{
                alert(".תענה על השאלה")            
        }
}
)


button4.addEventListener("click", function(){
        if(document.getElementById("option1q4").checked){
                document.getElementById("option1q4").checked = false;
		button4.style.display = "none"; 
                answerCount += 1;
        }   else if(document.getElementById("option2q4").checked){
                button4.style.display = "none";
                correctAnswers += 1;
                answerCount += 1;
                document.getElementById("option2q4").checked = false;

        }   else{
                alert(".תענה על השאלה")            
        }
}
)



button5.addEventListener("click", function(){
        if(document.getElementById("option1q5").checked){
                document.getElementById("option1q5").checked = false;
		button5.style.display = "none"; 
                answerCount += 1;
        }   else if(document.getElementById("option2q5").checked){
                button5.style.display = "none";
                answerCount += 1;
                correctAnswers += 1;
                document.getElementById("option2q5").checked = false;
        }   else if(document.getElementById("option3q5").checked){
                button5.style.display = "none";
                answerCount += 1;
                document.getElementById("option3q5").checked = false;
        }   else if(document.getElementById("option4q5").checked){            
                button5.style.display = "none";
                answerCount += 1;
                document.getElementById("option4q5").checked = false;
        }   else{
                alert(".תענה על השאלה")            
        }
}
)


button6.addEventListener("click", function(){
        if(document.getElementById("option1q6").checked){
                document.getElementById("option1q6").checked = false;
		button6.style.display = "none"; 
                answerCount += 1;
                correctAnswers += 1;
        }   else if(document.getElementById("option2q6").checked){
                button6.style.display = "none";
                answerCount += 1;
                document.getElementById("option2q6").checked = false;
        }   else if(document.getElementById("option3q6").checked){
                button6.style.display = "none";
                answerCount += 1;
                document.getElementById("option3q6").checked = false;
        }   else if(document.getElementById("option4q6").checked){            
                button6.style.display = "none";
                answerCount += 1;
                document.getElementById("option4q6").checked = false;
        }   else{
                alert(".תענה על השאלה")            
        }
}
)


button7.addEventListener("click", function(){
        if(document.getElementById("option1q7").checked){
                document.getElementById("option1q7").checked = false;
		button7.style.display = "none"; 
                answerCount += 1;
        }   else if(document.getElementById("option2q7").checked){
                button7.style.display = "none";
                answerCount += 1;
                correctAnswers += 1;
                document.getElementById("option2q7").checked = false;
        }   else if(document.getElementById("option3q7").checked){
                button7.style.display = "none";
                answerCount += 1;
                document.getElementById("option3q7").checked = false;
        }   else if(document.getElementById("option4q7").checked){            
                button7.style.display = "none";
                answerCount += 1;
                document.getElementById("option4q7").checked = false;
        }   else{
                alert(".תענה על השאלה")            
        }
}
)


button8.addEventListener("click", function(){
        if(document.getElementById("option1q8").checked){
                document.getElementById("option1q8").checked = false;
		button8.style.display = "none";
                answerCount += 1; 
        }   else if(document.getElementById("option2q8").checked){
                button8.style.display = "none";
                answerCount += 1;
                document.getElementById("option2q8").checked = false;
        }   else if(document.getElementById("option3q8").checked){
                button8.style.display = "none";
                answerCount += 1;
                document.getElementById("option3q8").checked = false;
        }   else if(document.getElementById("option4q8").checked){            
                button8.style.display = "none";
                answerCount += 1;
                correctAnswers += 1;
                document.getElementById("option4q8").checked = false;
        }   else{
                alert(".תענה על השאלה")            
        }
}
)

button9.addEventListener("click", function(){
        if(document.getElementById("option1q9").checked){
                document.getElementById("option1q9").checked = false;
		button9.style.display = "none";
                answerCount += 1; 
                correctAnswers += 1;
        }   else if(document.getElementById("option2q9").checked){
                button9.style.display = "none";
                answerCount += 1;
                document.getElementById("option2q9").checked = false;
        }   else if(document.getElementById("option3q9").checked){
                button9.style.display = "none";
                answerCount += 1;
                document.getElementById("option3q9").checked = false;
        }   else if(document.getElementById("option4q9").checked){            
                button9.style.display = "none";
                answerCount += 1;
                document.getElementById("option4q9").checked = false;
        }   else{
                alert(".תענה על השאלה")            
        }
}
)




button10.addEventListener("click", function(){
        if(document.getElementById("option1q10").checked){
                document.getElementById("option1q10").checked = false;
		button10.style.display = "none"; 
                answerCount += 1;
                correctAnswers += 1;
        }   else if(document.getElementById("option2q10").checked){
                button10.style.display = "none";
                answerCount += 1;
                document.getElementById("option2q10").checked = false;
        }   else if(document.getElementById("option3q10").checked){
                button10.style.display = "none";
                answerCount += 1;
                document.getElementById("option3q10").checked = false;
        }   else if(document.getElementById("option4q10").checked){            
                button10.style.display = "none";
                answerCount += 1;
                document.getElementById("option4q10").checked = false;
        }   else{
                alert(".תענה על השאלה")            
        }
        
        if(answerCount == 10){
                showResult();
        }
}
)




function showResult(){
        var answers = "ענית נכון על " + correctAnswers + " שאלות מתוך עשר"
        resultTitle.style.display = "block";
        hasbullaImage.style.display = "block";
        resultDeskription.textContent = answers;
        
        
}





































        
