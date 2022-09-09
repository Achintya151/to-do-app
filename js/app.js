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
        todos.forEach((item) => {
            const li = document.createElement('li');
            // li.innerText = item.title;
            li.innerHTML = `
            <li class="flex justify-between"><span>${item.title}</span><label for="my-modal-3" class="btn btn-sm btn-circle text-right">✕</label></li>
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


    // const todoList = [
    //     {
    //         title: inputText,
    //         completed: false,
    //     }
    // ]

    // localStorage.setItem("TODOS", JSON.stringify(todoList));

    // const ul = getElement('todo-list');

    // const li = document.createElement('li');
    // // li.innerText = ''; * hobe ul
    // li.innerText = inputText;
    // ul.appendChild(li);

    // console.log(inputText);
