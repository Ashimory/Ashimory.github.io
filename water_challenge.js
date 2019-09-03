var question = [{
    question_content: "In which region do most people not have access to clean water?",
    choice_A: "A. Asia",
    choice_B: "B. Africa",
    choice_C: "C. Antartica",
    correct: "A",
},
{
    question_content: "How much of Earth's water is consumable by humans?",
    choice_A: "A. 500%",
    choice_B: "B. 25%",
    choice_C: "C. 1%",
    correct: "C",
},
{
    question_content: "What animals suffer most from water pollution?",
    choice_A: "A. Humans",
    choice_B: "B. Turtles",
    choice_C: "C. Birds",
    correct: "C",
},
{
    question_content: "How can we help reduce water pollution?",
    choice_A: "A. Take baths instead of showers",
    choice_B: "B. Use the washing machine every time there is some dirty clothes",
    choice_C: "C. Turning off water taps when not using",
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
            alert("Please move to the next session")
        }
    } else {
        score -= 5
        scoreEl.innerHTML = `SCORE: ${score}`
    }
}









