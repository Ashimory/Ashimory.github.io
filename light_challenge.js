var question = [{
    question_content: "What is light pollution?",
    choice_A: "A. Light bulbs that are not properly disposed of.",
    choice_B: "B. Excessive artificial light in the night environment.",
    choice_C: "C. Outdoor lights that are left on all day, wasting electricity.",
    correct: "B",
},
{
    question_content: "In recent years, which city has been considered to be most lighted-polluted compared to Global Urban Average?",
    choice_A: "A. Moscow",
    choice_B: "B. Saint Petersburg",
    choice_C: "C. New York",
    correct: "A",
},
{
    question_content: "The excess of nighttime light that comes with light pollution causes a disruption in our circadian rhythms. Which of the following best defines these rhythms?",
    choice_A: "A. The way our circulatory system responds to light",
    choice_B: "B. Our body's process of getting energy from sunlight",
    choice_C: "C. Our body's 24-hour biological cycle",
    correct: "C",
},
{
    question_content: "Which is NOT a good way to reduce the light pollution?",
    choice_A: "A. Using high-energy bulbs",
    choice_B: "B. Turn off lights which are unnecessary",
    choice_C: "C. Using portable lighting",
    correct: "A",
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









