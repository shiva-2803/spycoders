function changeHeadings(){
let element=document.getElementsByTagName("h2");
for(let i=0;i<element.length;i++){
    element[i].style.color="red";
}
}

function changeMessage(){
    let message=document.querySelectorAll(".message");
    for(let i=0;i<message.length;i++){
        message[i].style.color="green";
    }
}

function changeTitle(){
    let title=document.getElementById("title");
    title.innerText="DOM is easy";
}