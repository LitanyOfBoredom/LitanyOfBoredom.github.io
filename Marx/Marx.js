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

var button = "https://forms.gle/";

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
    return (val == 14028680 || val == 14028616 || val == -1063908536);
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

var sign = "ISTUu6AprVfxapY27";