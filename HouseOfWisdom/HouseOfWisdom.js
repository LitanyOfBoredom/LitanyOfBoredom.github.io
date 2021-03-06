function addSubmitOnEnter(inputId, submitBtnId)
{
    document.getElementById(inputId).addEventListener("keyup", event => submitOnEnter(event, submitBtnId));
}

var error = " is incorrect. Try again.";

function submitOnEnter(event, submitBtnId)
{
    if(event.key !== "Enter")
        return;
    document.getElementById(submitBtnId).click();
    event.preventDefault();
}

function textChange()
{
    var text = document.getElementById("inputtext").value;
    if(check(text))
    {
        window.location.href = (button + convert(sign) + "/");
    }
    else
    {
        document.getElementById("outputtext").innerText = text + error;
    }
}

function check(text)
{
    var val = hash(text);
    return (val == 2383012778 || val == 2311429994 || val == 1947060146 || val == 805929842 || val ==  2378818474 || val == 1879951282 || val == 2383009098 || val == 2378814794 || val == 2311427338 || val == 2383267762 || val ==  2316158898 || val == 2315879282);
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

var button = "../";
var sign = "Yzozmxvw";