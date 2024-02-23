 
   var questions = [
    {
        question:"Html Stands For _________",
        options: ["Hyper Text Makeup Language",
        "html",
        "Case Cading Style Sheet",
        "Hypertext markup language"
        ],
        correctAns: "Hypertext markup language",
    },
    {
        question:"Css Stands For _________",
        options: [
            "Casecading Style Sheet",
            "Java",
            "Ram",
            "Hypertext markup language"
        ],
        correctAns: "Casecading Style Sheet",
    },
    {
        question:"Js Stands For _________",
        options: [
            "Java Style",
            "Java Script",
            "Script",
            "Script Src"
        ],
        correctAns: "Java Script",
    },
    {
        question:"Dom Stands For _________",
        options: [
            "Document Object Model",
            "html",
            "Css",
            "Java"
        ],
        correctAns: "Document Object Model",
    },
    {
        question:"Ram Stands For _________",
        options: [
            "Read Only Memory",
            "Dom",
            "Random Acccess Memory",
            "For Pc"
        ],
        correctAns: "Random Acccess Memory",
    },
    {
        question:"Rom Stands For _________",
        options: [
            "Hyper Text Markup Language",
            "html",
            "HTml",
            "Read Only Memory"
        ],
        correctAns: "Read Only Memory",
    },
      
];

 console.log()

 var displayQuestion = document.getElementById("displayQuestion")
 var optionParent = document.getElementById("optionParent")
 var currentQuestion = document.getElementById("currentQuestion")
 var totalQuestion = document.getElementById("totalQuestion")
 var quizDisplay = document.getElementById("quizDisplay")
 var resultDisplay = document.getElementById("resultDisplay")
 var percentage = document.getElementById("percentage")
 var startAgain = document.getElementById("startAgain")
 indexValue = 0;
 marks = 0 ;
 
 function showQuestion() {
     
     displayQuestion.innerHTML = questions[indexValue].question 

    for(var i = 0; i<questions[indexValue].options.length; i++ ){

        var optionValue = questions[indexValue].options[i]
        var CorrectValue = questions[indexValue].correctAns
        // console.log(optionValue)

        optionParent.innerHTML += `<button class="p-2  m-2  text-black bg-success rounded-pill  border-0" onclick="checkQuestion('${optionValue},${CorrectValue}')" >${questions[indexValue].options[i]}</button>` 

    }

    totalQuestion.innerHTML = questions.length
    currentQuestion.innerHTML = indexValue + 1

    
    
    
}

showQuestion()

// nextQuestion()


function checkQuestion(optionValue,CorrectValue) {
    if(optionValue == CorrectValue){
        marks++;
        console.log(marks)
    }
    else{
        nextQuestion()
    }
    
    
    
}

function nextQuestion() {
    
    optionParent.innerHTML = ""
    if(indexValue + 1 == questions.length){
        quizDisplay.setAttribute("class","d-none");
        resultDisplay.setAttribute("class","d-block");
        // startAgain.setAttribute("class","d-block");


        // resultDisplay.style.display = "block"
        console.log("test")
        
        var totalmarks = (marks / questions.length) * 100 
        percentage.innerHTML = totalmarks;
        
        
    }
    else{
        indexValue++
        showQuestion()
    }
    
}


function startagain() {
    quizDisplay.setAttribute("class","d-block");
    resultDisplay.setAttribute("class","d-none");
    showQuestion()
    // console.log("start again")
    
}