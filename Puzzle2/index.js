let boxes = document.querySelectorAll(".input-box");
let testbox = document.querySelector(".input-box");
let answers = ['08', '14', '04', '12', '11', '01', '10', '06', '02', 'W', 'R', '03', '07', '13', '05', '09'];
let solveCount = 1;

for(let i = 0; i < boxes.length; i++)
{
    boxes[i].oninput = function()
    {
        if(isValid(this.value))
        {
            console.log("valid");
            let words = this.id.split("-");
            let boxNumber = parseInt(words[1]);
            if(!isCorrect(boxNumber, this.value))
            {
                terminate();
            }
            else
            {
                document.querySelector("#input-" + boxNumber).classList.add("hidden");
                document.querySelector("#clue-" + boxNumber).classList.remove("hidden");
                if(++solveCount == 16)
                {
                    document.querySelector("#success").classList.remove("hidden");
                }
            }
        }
    }
}

function isValid(value)
{
    value = value.toUpperCase();
    for(let i = 0; i < answers.length; i++)
    {
        if(answers[i] == value)
            return true;
    }
    return false;
}

function isCorrect(boxNumber, value)
{
    value = value.toUpperCase();
    return answers[boxNumber-2] == value;
}

function terminate()
{
    for(let i = 0; i < boxes.length; i++)
    {
        boxes[i].classList.add('hidden');
    }
    document.querySelector("#try-again").classList.remove("hidden");
}