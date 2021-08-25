const mainCont = document.getElementsByClassName(".main-container");
const secCont = document.getElementsByClassName(".second-container");
const newtodo = document.getElementsByClassName(".todo");
const submitButton = document.getElementsByClassName(".submit-button")

function addtodo(){
        const list = document.createElement("li");
        const valueOfInput = newtodo.value;
        list.innerHTML = valueOfInput;
        secCont.append(list);
        console.log("Item Added:", list);
}

submitButton.addEventListener("click", ()=> {
    addtodo();
})
//     console.log("This is valueOfInput:", valueOfInput)
// }

// function alertuser(){
//     alert("Confirming addition to todolist")
// }

// submitButton.onclick(addtodo)
// const submitButton = document.getElementsByClassName(".submit-button")
// submitButton.addEventListener("click", () => {
//     addtodo();
// })
