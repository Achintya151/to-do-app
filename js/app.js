const getElement = (id) => {
    const element = document.getElementById(id);
    return element;
}

// PLUS BUTTON 

const handleSubmit = () => {
    // const input = document.getElementById('todo-text');

    const todos = JSON.parse(localStorage.getItem("TODOS"));

    const inputText = getElement('todo-text').value;


    // console.log(todos);

    if (!todos) {
        const todoList = [
            {
                title: inputText,
                completed: false,
            },
        ];

        localStorage.setItem("TODOS", JSON.stringify(todoList));
    }
    else {
        const todoList = [
            ...todos,
            {
                title: inputText,
                completed: false,
            },
        ];
        localStorage.setItem("TODOS", JSON.stringify(todoList));
    };

    render();
};

const render = () => {
    const todos = JSON.parse(localStorage.getItem("TODOS"));
    // console.log(todos);
    const ul = getElement('todo-list');

    ul.innerHTML = "";

    if (todos === null) {
        const noData = "No data found.";
        // console.log(noData);
        const li = document.createElement('li');
        li.innerText = noData;
        ul.appendChild(li);
    } else {
        todos.forEach((item, index) => {
            const li = document.createElement('li');
            // li.innerText = item.title;
            li.innerHTML = `
            <li class="flex justify-between py-2"><span>${item.title}</span><button for="my-modal-3" class="btn btn-sm btn-circle text-right">✕</button></li>
            `
            ul.appendChild(li);
        });
    };

};



// MINUS BUTTON 

const handleClearAll = () => {
    localStorage.removeItem("TODOS");
    render();
}


render();


