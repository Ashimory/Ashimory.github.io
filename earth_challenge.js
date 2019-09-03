var question = [{
    question_content: "How much of the world's forests have been destroyed?",
    choice_A: "A. 70%",
    choice_B: "B. 80%",
    choice_C: "C. 90%",
    correct: "B",
},
{
    question_content: "Which other type of pollution is earth pollution most related to?",
    choice_A: "A. Air pollution",
    choice_B: "B. Noise pollution",
    choice_C: "C. Water pollution",
    correct: "C",
},
{
    question_content: "What is the most prevalent consequence of earth pollution?",
    choice_A: "A. Less crop yields",
    choice_B: "B. Leads to other types of pollution",
    choice_C: "C. Damages the ecosystem",
    correct: "A",
},
{
    question_content: "What isn't part of the 3Rs?",
    choice_A: "A. Reduce",
    choice_B: "B. Reuse",
    choice_C: "C. Remember",
    correct: "C",
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
            alert("please move to next session")
        }
    } else {
        score -= 5
        scoreEl.innerHTML = `SCORE: ${score}`
    }
}









