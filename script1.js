const btn=document.getElementById("btn-1");
const textArea=document.getElementById("name");

const startQuiz=()=>{
    let data=textArea.value;
    if(data.trim()===""){
        alert("Please enter a valid name");
    }
    else{
        window.location.href = "index.html"; // Replace with your new page URL
    }
}
