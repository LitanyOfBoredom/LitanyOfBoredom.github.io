function addSubmitOnEnter(inputId, submitBtnId)
{
    document.getElementById(inputId).addEventListener("keyup", event => submitOnEnter(event, submitBtnId));
}

var box2 = false;

function submitOnEnter(event, submitBtnId)
{
    if(event.key !== "Enter")
        return;
    document.getElementById(submitBtnId).click();
    event.preventDefault();
}

function textChange(box)
{
    box2 = box;
    var text = document.getElementById("inputtext").value;
    if(check(text) && box)
    {
        window.location.href = (convert(button));
    }
    else
    {  
        document.getElementById("outputtext").innerText = text + header;
    }
}

function check(text)
{
    var val = hash(text);
    return (val == 658692262 || val == 658692198 || val == -486370202)
}

function hash(text)
{
    var sum = 0;
    for (let i = 0; i < text.length; i++)
    {
        sum += text.charCodeAt(i) << Math.pow(5,i);
    }
    return sum;
}

var header = " is incorrect. Try again.";

function convert(text)
{
    var res = "";
    for(let i = 0; i < text.length; i++)
    {
        var val = text.charCodeAt(i);
        if(val >= 65 && val <= 90)
            res = res + String.fromCharCode(155 - val);
        else if(val >= 97 && val <= 122)
            res = res + String.fromCharCode(219 - val);
        else
            res = res + text[i];
    }
    return res;
}

var button = "../Nzic/";