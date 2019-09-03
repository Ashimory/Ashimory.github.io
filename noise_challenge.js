var question = [{
    question_content: "How much of European population is exposed to excessive road traffic noise?",
    choice_A: "A. 40%",
    choice_B: "B. 50%",
    choice_C: "C. 60%",
    correct: "A",
},
{
    question_content: "Which of these effects are not caused by noise pollution?",
    choice_A: "A. Hearling loss",
    choice_B: "B. Sleep deprivation",
    choice_C: "C. Arthritis",
    correct: "C",
},
{
    question_content: "What is the main difference between noise pollution and other types of pollution?",
    choice_A: "A. It's not significant",
    choice_B: "B. It doesn't affact health permanently",
    choice_C: "C. It's invisible",
    correct: "C",
},
{
    question_content: "What are the main causes of noise pollution?",
    choice_A: "A. Natural events",
    choice_B: "B. Human activities",
    choice_C: "C. All of the above",
    correct: "B",
}];
const questionContainer = document.getElementById("questions")
const questionEl = document.getElementById("question")
const questionContent = document.getElementById("question_content")
const choiceContainer = document.getElementById("choices")
const choiceA = document.getElementById("A")
const choiceB = document.getElementById("B")
const choiceC = document.getElementById("C")
const scoreEl = document.getElementById("score")
var currentQuestionIndex = 0
var lastQuestionIndex = question.length - 1
function renderQuestion(qIn) {
    questionContent.innerHTML = question[qIn].question_content
    choiceA.innerHTML = question[qIn].choice_A
    choiceB.innerHTML = question[qIn].choice_B
    choiceC.innerHTML = question[qIn].choice_C
}
renderQuestion(currentQuestionIndex)
var score = 0;
function checkAnswer(ans) {
    
    if (ans == question[currentQuestionIndex].correct) {
        score += 10;
        scoreEl.innerHTML = `SCORE: ${score}`
        if (currentQuestionIndex < lastQuestionIndex) {
            currentQuestionIndex ++
            renderQuestion(currentQuestionIndex)
        } else {
            currentQuestionIndex = currentQuestionIndex;
            alert("Please move to the next session")
        }
    } else {
        score -= 5
        scoreEl.innerHTML = `SCORE: ${score}`
    }
}









