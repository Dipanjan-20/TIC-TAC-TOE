let boxes=document.querySelectorAll(".Box");
let resetbtn=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;

const resetGame = () => {
    count=0;
    turnO=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};

let win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

let count=0;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count+=1;
        console.log("Box was clicked");
        console.log("Value of count",count);
        if (turnO)
        {
            box.innerText="O";
            turnO=false;
        }
        else
        {
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWin();
        if(count==9)
        {
            Draw();
        }
    });
});

const Draw = () => {
    msg.innerText="Well, The Match has Unfortunately ended in a Draw !";
    msgcontainer.classList.remove("hide");
};

const enableBoxes = () => {
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
};

const disableBoxes = () => {
    for(let box of boxes)
    {
        box.disabled=true;
    }
};

const showWin = (winner) => {
    msg.innerText=`Congratulations, the Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

const checkWin = () => {
    for(let i of win)
    {
        let pos1=boxes[i[0]].innerText;
        let pos2=boxes[i[1]].innerText;
        let pos3=boxes[i[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1===pos2 && pos2===pos3)
            {
                console.log("Winner is :",pos1);
                showWin(pos1);
            }
        }
    }

};
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);