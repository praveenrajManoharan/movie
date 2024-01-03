var reviewname=document.getElementById("review-name")
var reviewtextarea=document.getElementById("review-textarea")
var comentcaintainer=document.querySelector(".coment-caintainer")
var seeingreview=document.querySelector("seeing-review")

function submit(){
    var div=document.createElement("div");
    div.setAttribute("class","seeing-review");
    div.innerHTML=`<h1>${reviewname.value}</h1>
    <p>${reviewtextarea.value}</p>
    <button onclick="deletereview(event)">Delete</button>`;
    comentcaintainer.append(div)
}



//    to delete the review

var comentcaintainer=document.querySelector(".coment-caintainer")

function deletereview(event){
    event.target.parentElement.remove();
}




    