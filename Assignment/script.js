const start_btn = document.querySelector(".start_button button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");
}

exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
}

continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
    queCounter(1);
    startTimer(10);
    startTimerLine(0);
}

let question_count = 0;
let question_number = 1;
let counter;
let counterLine;
let widthValue = 0;
let timeValue = 10;
let userScore = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");
const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

next_btn.onclick = ()=>{
    if(question_count<questions.length - 1){
        question_count++;
        question_number++;
        showQuestions(question_count);
        queCounter(question_number);
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    }else{
        console.log("Questions completed!");
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

quit_quiz.onclick = () => {
    window.location.reload(); //reload the current window
}

//getting questions and options from array
function showQuestions(index){
    const question_text = document.querySelector(".question_text");
    let question_tag = '<span>'+ questions[index].num +". " +questions[index].question +'</span>';
    let option_tag = '<div class="option">'+questions[index].options[0]+'<span></span></div>'
                    +'<div class="option">'+questions[index].options[1]+'<span></span></div>'
                    +'<div class="option">'+questions[index].options[2]+'<span></span></div>'
                    +'<div class="option">'+questions[index].options[3]+'<span></span></div>';

    question_text.innerHTML = question_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for (let i=0; i<option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
let tickIcon = '<div class="icon tick"><i class="fas fa-check">&checkmark;</i></div>';
let crossIcon =' <div class="icon cross"><i class="fas fa-times">&cross;</i></div>';

function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correctAns = questions[question_count].answer;
    let allOptions = option_list.children.length;


    if (userAns == correctAns) {
        answer.classList.add("correct");
        userScore += 2;
        console.log("Answer is correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);

    } else if(userAns != correctAns){
        answer.classList.add("incorrect");
        counter = counter - 1;
        console.log("Answer is wrong");
        answer.insertAdjacentHTML("beforeend", crossIcon);

        for (let i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent === correctAns) {
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    } else {
        next_btn.classList.add("show");
    }
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show");
}
function startTimer(time) {
    counter = setInterval(timer, 1000);

    function timer(position, text) {
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if (time < 9) { //if timer is less than 9
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if (time < 0) { //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correctAns = questions[question_count].answer; //getting correct answer from array
            for (i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent == correctAns) { //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option auto-select"); //adding orange color to auto-select
                    option_list.children[i].insertAdjacentHTML("beforeend", errorIconTag); //adding tick icon to matched option
                }
            }
            for (i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option
        }
    }
}

function queCounter(index){
    let totalQuestionsCountTag = '<span><b>'+index+'</b>of<b>'+questions.length+'</b>Questions</span>';
    bottom_ques_counter.innerHTML = totalQuestionsCountTag;
}

restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 10;
    question_count = 0;
    question_number = 1;
    userScore = 0;
    widthValue = 0;
    showQuestions(question_count); //calling showQestions function
    queCounter(question_number); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}
function showResult() {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 15) { // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>🥳👑 congrats! , You got <b>' + userScore + '</b> marks </span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    } else { // if user scored less than 1
        let scoreTag = '<span>😪😫 sorry , You got only <b>' + userScore + '</b>  marks </p></span>';
        scoreText.innerHTML = scoreTag;
    }
}
function startTimerLine(time) {
    counterLine = setInterval(timer, 20);

    function timer() {
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if (time > 549) { //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}
function viewProfile(){
    window.location = "kaushala.html"
}