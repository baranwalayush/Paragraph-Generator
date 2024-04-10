const input= document.getElementById("numOfWords");
const container= document.querySelector(".container");

function generateWord(n){
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let text = "";

    for(let i=0; i<n; i++){
        const random = parseInt((Math.random() * 25));
        text += letters[random];
    }

    return text;
};

let numOfWords;
function generatePara(){
    numOfWords = Number(input.value);

    const para = document.createElement("p");
    let data = "";

    for(let i=0; i<numOfWords; i++){
        const randomNum = parseInt((Math.random() * 15));
        data += generateWord(randomNum);
        data +=" ";
    }

    para.innerText = data;
    para.setAttribute("class", "paras");
    container.append(para);
}

