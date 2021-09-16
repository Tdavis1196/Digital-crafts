const submitButton = document.querySelector(".submitButton");
const updateButton = document.querySelector(".updateButton");
const deleteButton = document.querySelector(".deleteButton");
const showallButton = document.querySelector(".showAll");

const todoDiv = document.querySelector(".mainContainer");

const getTodos = async () => {
    const url = "http://localhost:3011/get_todos";
    const todoData = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const json = await todoData.json();
  
    for (const todo of json) {
      const todoName = todo.todoName;
      const creation = todo.createdAt;
      const update = todo.updatedAt;
      const id = todo.id;
      const todoDetails = document.createElement("div");
      const todoId = document.createElement("p");
      const tname = document.createElement("p");
      const createdAt = document.createElement("p");
      const updatedAt = document.createElement("p");
      todoId.innerHTML = id;
      tname.innerHTML = todoName;
      createdAt.innerHTML = creation;
      updatedAt.innerHTML = update;
      todoDetails.append(id, tname, createdAt, updatedAt);
      todoDiv.append(todoDetails);
    }
    console.log(json);
};
    const createTodo = async () => {
    const url = "http://localhost:3011/create_todo";
    const todoName = document.querySelector(".inputvalue").value;
  
    const todoData = {
      todoName:todoName,
      createdAt: new Date(),
      updatedAt: new Date()
    };
  
    const createTodo = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoData),
    });
    };

    const deleteTodo = async () => {
        const idvalue = document.querySelector(".idvalue").value;
        const url = `http://localhost:3011/delete_todo/${idvalue}`;
        
        const tododestroy = await fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
            "Content-Type": "application/json",
            }
        });
    };

    const updateTodo = async () => {
        const idvalue = document.querySelector(".idvalue").value
        const URL = `http://localhost:3011/update_todo/${idvalue}`
        const updatedTodo = document.querySelector(".inputvalue").value
        
        const updated_todo = {
            todoName: updatedTodo,
            createdAT: new Date(),
            updatedAt: new Date()
        }
        const updatetodo = await fetch(URL, {
            method: "Post",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updated_todo),
          })
        };

submitButton.addEventListener("click", () => {
    createTodo(),
    window.location.reload();
});

deleteButton.addEventListener("click", () => {
    deleteTodo(),
    window.location.reload();
});

updateButton.addEventListener("click", () => {
    updateTodo(),
    window.location.reload();
});

getTodos();
