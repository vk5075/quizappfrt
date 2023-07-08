const quizData = [
    {
        question:"1. What does VVVF stand for?",
        a:"Variant Voltage Vile Frequency",
        b:"Variable Velocity Variable Fun",
        c:"Very Very Vicious Frequency",
        d:"Variable Voltage Variable Frequency",
        correct:"d",
    },
    {
        question: " 2. What is the most used programming language in 2022?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question:"3. What is compiler?",
        a: "System program that converts instructions to machine language",
        b: "System program that converts machine language to high-level langage",
        c: "System program that writes inatruction to perfrom",
        d: "None of the mentioned",
        correct: "a",
    },
    {
        question:"4. Which of the following error can a compiler check?",
        a: "Syntax Error",
        b: "Logical Error",
        c: "Both Logical and Syntax Error",
        d: "Compiler cannot check Errror",
        correct: "a",
    },
    {
        question: "5. Who is the President of US 2022?",
        a: "Anurag Singh",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Joe Biden",
        correct: "d",
    },
    {
        question: "6. What is CFG?",
        a: "regular Expression",
        b: "Compiler",
        c: "Language expression",
        d: "All of the mentioned",
        correct: "b",
    },

    {
        question: "7. What is the HTML stand for",
        a: "Hyper Text Markup Language",
        b: "Hyper Text Modul Language",
        c: "Hyper Test Markup Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    }, 
    {
        question: "8. What year was JavaScript launched?",
        a: "2022",
        b: "2023",
        c: "1995",
        d: "1996",
        correct: "c",
    },
    {
      question:"9. How many contries were participted as founding member of United Nation?",
      a:"45",
      b:"50",
      c:"51",
      d:"100",
      correct:"c",
    } ,
    {
        question:" 10 .Which one is the largest tropical rain forest in the world?",
        a:"Amazon",
        b:"Bosawas",
        c:"Southeast Asian Rain Forest",
        d:"Daintree Rain Forest",
        correct:"a",

    },
    {
        question:"11. In which country , white elephant is found?",
        a:"India",
        b:"Sri lanka",
        c:"Thailand",
        d:"Malaysia",
        correct:"c",
    },
    {
        question:"12. In which decade was the American Institute of Electrical Engineers(AIEE) founded?",
        a:"1818s",
        b:"1880s",
        c:"1930s",
        d:"1950",
        correct:"b",
    },
    {
        question:"13. 'OS' computer abbreviation usually means?",
        a:"Oder of Significannce",
        b:"Open Software",
        c:"Operating System",
        d:"Optical Sensor",
        correct:"c",
    },
    {
        question:"14.'.MOV' extension refers usually to what kind of file ?",
        a:"Image file",
        b:"Animation/movie file",
        c:"Audio file",
        d:"MS Office document",
        correct:"b",
    },
    {
        question:"15. Who developed Yahoo?",
        a:"Dennis Ritchie & ken Thompson",
        b:"David Filo & Jerry Yang",
        c:"Vint Cerf & Robert Kahn",
        d:"Steve Case & Jeff Bezos",
        correct:"b",
    },



];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl)  => {
        if (answerEl.checked) {
            answer = answerEl.id;

            }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    ///check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct)
         {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2>You answerd correctly at ${score}/${quizData.length}questions.</h2>
            <button onclick="location.reload()
            ">Reload</button>`;
        }
    }
});