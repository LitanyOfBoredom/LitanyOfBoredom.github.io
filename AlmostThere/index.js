let hint = document.querySelector("#hint");
hint.onclick = function()
{	
    if(this.nextElementSibling.classList.contains("hide"))
    {
        this.nextElementSibling.classList.remove("hide");
        this.innerHTML = this.innerHTML.substring(0, this.innerHTML.length - 1) + "▲";
    }
    else
    {
        this.nextElementSibling.classList.add("hide");
        this.innerHTML = this.innerHTML.substring(0, this.innerHTML.length - 1) + "▼";
    }
}