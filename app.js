let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame= () =>{
    turnO=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
   box.addEventListener("click", () => {
     

        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true;
        checkwinner();
   });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const showwinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

const checkwinner = () => {
    for(let pattern of winpatterns){

        let b1 = boxes[pattern[0]].innerText;
        let b2 = boxes[pattern[1]].innerText;
        let b3 = boxes[pattern[2]].innerText;

        if(b1 != "" && b2 != "" && b3 != ""){
            if(b1 === b2 && b2 === b3){
               
                showwinner(b1);   
            }
        }
    }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);