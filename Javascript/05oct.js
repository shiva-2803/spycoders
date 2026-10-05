/*
What is DOM?

DOM = Document Object Model

JavaScript uses the DOM to access and change HTML elements.DOM (Document Object Model) is a tree-like structure of HTML elements, where each element is represented as a JavaScript-accessible object/node.
JS can use the DOM to read ,change ,or to remove the elements from DOM,

1.DOM selectors:
    1.getelmentById():
        select ane element using ID.


    use cases:
    -login form
    -cart counter
    -dark mode and light mode
    -notification badge


    2.getelemntsByClassName():

    use case:
    -product cards
    -price tags



    3.getElementsByTagName():
    4.querySelector():
    5.querySelectorAll():

2.DOM manipulation:
    1.innerText:
    2.innerHTML --->changes the entaire HTML inside the element/add sub elements inside the element
    3.style---.Changes css dynamically


3.class manipulation:









*/
let element=document.getElementById("para");
console.log(element);

function changeAll(){
    let boxes=document.getElementsByClassName("box");
    for(let i=0;i<boxes.length;i++){
        boxes[i].style.backgroundColor="red";
    }
}


//toggle()--->adds class if absent
//removes class if already present

//contains()-----> 