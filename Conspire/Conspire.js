function addSubmitOnEnter(inputId, submitBtnId)
{
    document.getElementById(inputId).addEventListener("keyup", event => submitOnEnter(event, submitBtnId));
}

var button = "../";
var slider = "/";

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
        window.location.href = (button + convert("Klvgib") + slider);
    }
    else
    {
        document.getElementById("outputtext").innerText = text + " is incorrect. Try again.";
    }
}

function check(text)
{
    return (convert(text) == "Wfiszn" || convert(text) == "wfiszn" || convert(text) == "WFISZN");
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