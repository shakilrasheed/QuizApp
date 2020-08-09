var questionsArray = [
{
question: "Q4. Full form of NOC is?",
answer: "Option  4: No Objection Certificate",
options: [
    "Option  1: Not Odd Certificate",
    "Option  2: Night Odd Cat",
    "Option  3: New Over Cattering",
    "Option  4: No Objection Certificate",

],
explanationCorrect: "the selected Ans for Q1 is correct",
explanationWrong: "the selected Ans  for Q1 is wrong"
},

{
    question: "Q2. What is the capital of Pakistan?",
    answer: "Option  1: Islamabad",
    options: [
    "Option  1: Islamabad",
    "Option  2: Karachi",
    "Option  3: Lahore",
    "Option  4: none of the above",

    ],
    explanationCorrect: "the selected Ans  for Q2 is correct",
    explanationWrong: "the selected Ans for Q2 is wrong"
    },


    {
        question: "Q3. National flower of Pakistan?",
        answer: "Option  2: Jasmine",
        options: [
        "Option  1: Rose",
        "Option  2: Jasmine",
        "Option  3: Lotus",
        "Option  4: Tulip",
    
        ],
        explanationCorrect: "the selected Ans  for Q3 is correct",
        explanationWrong: "the selected Ans  for Q3 is wrong"
        },


        {
            question: "Q4. Where is Minar e Pakistan located?",
            answer: "Option  4: Lahore",
            options: [
            "Option  1: Peshawar",
            "Option  2: Multan",
            "Option  3: Karachi",
            "Option  4: Lahore",
        
            ],
            explanationCorrect: "the selected Ans  for Q4 is correct",
            explanationWrong: "the selected Ans  for Q4 is wrong"
            }
]


function showQuestion(e){
    // show question
    
    if(e < questionsArray.length) {
    
    var questionElement = document.getElementById("questionElement")
    questionElement.innerHTML = questionsArray[e].question
    
    
    // show options
    var optionElement = document.getElementsByClassName("optionElement")
    // console.log(optionElement[0].innerHTML)
    for(var i=0;  i < optionElement.length; i++){
       optionElement[i].innerHTML = questionsArray[e].options[i] 
    }

}

else {

alert(userName+" Your score at the end of the quiz is "+score)
var scoreFinal = document.getElementById("scoreFinal")
scoreFinal.innerHTML = userName+" Your score at the end of the quiz is "+score
var reset = document.getElementById("resetBtn")
reset.classList.add("visible")
nextBtn.classList.add("c")
previousBtn.classList.add("c")

}

}

var questionCount = 0;
var score = 0;

function nextQuestion(e){


    var nextBtn = document.getElementsByClassName("nextBtn")
    validate(questionCount)
    questionCount++;
    
    showQuestion(questionCount);
    removeActiveClass()
    
}


function putActiveClass(e) {

removeActiveClass()
e.classList.add("active")

}


function removeActiveClass() {

var active =  document.getElementsByClassName("active")
for(var i=0; i < active.length; i++){

active[i].classList.remove("active")


}

}


function validate(e) {

var active =  document.getElementsByClassName("active")
// console.log(active[0].innerHTML)
var scoreText = document.getElementById("scoreText")
var ansExplain = document.getElementById("ansExplain")

if(active[0].innerHTML == questionsArray[e].answer){
    // score = score + 10
     score += 10

     scoreText.innerHTML = userName +" Your score is: " + score
     ansExplain.innerHTML = questionsArray[e].explanationCorrect

     console.log(scoreText.innerHTML)
     console.log(score)
}
else {

    scoreText.innerHTML = userName +" Your score is: " + score
     ansExplain.innerHTML = questionsArray[e].explanationWrong
    console.log(score)
}

}
var userName

function greetUser(){

userName =prompt("Enter your Name  here to start Quiz......","User Name")
alert(userName + ", Welcome to Smart Quiz Application.\nYou will have to answer "+questionsArray.length+" Questions here.")
}


function previousQuestion(){

    var previousBtn = document.getElementsByClassName("previousBtn")
    // validate(questionCount)
    questionCount--;
    score -= 10
    showQuestion(questionCount);
    removeActiveClass()

}