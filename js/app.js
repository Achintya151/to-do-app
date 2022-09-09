const getElement = (id) => {
    const element = document.getElementById(id);
    return element;
}

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
    console.log(todos);
    const ul = getElement('todo-list');

    // const li = document.createElement('li');
    // // li.innerText = '';
    // li.innerText = inputText;
    // ul.appendChild(li);
};

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
    // // li.innerText = '';
    // li.innerText = inputText;
    // ul.appendChild(li);

    // console.log(inputText);