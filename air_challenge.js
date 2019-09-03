var question = [{
    question_content: "How much of the world is suffering from poor air quality? ",
    choice_A: "A. 71%",
    choice_B: "B. 81%",
    choice_C: "C. 91%",
    correct: "C",
},
{
    question_content: "Which of these is NOT an aerosol?",
    choice_A: "A. Carbon monoxide",
    choice_B: "B. Smoke",
    choice_C: "C. Pollen",
    correct: "A",
},
{
    question_content: "Which of these affect blood's ability to transport oxygen?",
    choice_A: "A. Sulphur dioxide",
    choice_B: "B. Carbon monoxide",
    choice_C: "C. Carbon dioxide",
    correct: "B",
},
{
    question_content: "Which kind of air pollution caused more deaths?",
    choice_A: "A. Ambient pollution",
    choice_B: "B. Indoors exposure",
    choice_C: "C. The two caused equal numbers of deaths",
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









