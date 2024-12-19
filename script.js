const questions = [{
    'que': "Which of the following is a markup language?",
    'a': "HTML",
    'b': "CSS",
    'c': "JavaScript",
    'd': "PHP",
    'correct': 'a'
},
{
    'que': "What year was JavaScript launched?",
    'a': "1996",
    'b': "1995",
    'c': "1994",
    'd': "none of the above",
    'correct': 'b'
},
{
    'que': "What does CSS stands for?",
    'a': "Hypertext Markup Language",
    'b': "Cascading Style Sheet",
    'c': "Jason Object Notation",
    'd': "none of the Above",
    'correct': 'b'
}
]


let index=0;
let total = questions.length;
let correct = 0,wrong = 0,right = 0;

const queBox=document.getElementById("queBox");
const optionInputs=document.querySelectorAll('.options');



const loadQuestion = () =>{
    if(index===total){
       endQuiz();
    }
    const data = questions[index];
    queBox.innerText=`${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;
}

const SubmitQuiz = ()=>{
    const data = questions[index];
    const ans=getAns();
    if(ans===data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    reset();
    return;
}
const getAns = ()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
                console.log("yes");
                answer=input.value;

            }
        }
    )
    return answer;
}

const reset = ()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}
const endQuiz=()=>{
    document.getElementById("box").innerHTML = `
    <div style="text-align: center">
        <h3>Thank You for playing the quiz</h3>
        <h2>${right} out of ${total} are correct</h2>
    </div>
    `
}
loadQuestion();




