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
            <li class="flex justify-between py-2"><span>${item.title}</span><button for="my-modal-3" onClick="deleteItem()" class="btn btn-sm btn-circle text-right">✕</button></li>
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

function deleteItem() {
    event.target.parentElement.remove();

    // let someArray = JSON.parse(localStorage.getItem('TODOS'));
    // someArray = someArray.slice(0, x).concat(someArray.slice(-x));


    // localStorage.removeItem('TODOS');

    return;
};

render();

// trying to add delete button

// let storage1 = (function () {
//     const inputText = getElement('todo-text').value;
//     const todoList = [
//         {
//             title: inputText,
//             completed: false,
//         },
//     ];

//     return class storage1 {
//         constructor(title, completed) {
//             this[title] = todoList.title;
//             this[completed] = todoList.completed;
//         }


//     }
// }());

// const deleteItem = () => {
//     event.target.parentElement.remove();
//     let a = event.target.parentElement.innerText;
//     let word = a.split(' ');
//     let item = new Array();
//     let i = 0;
//     let todos = JSON.parse(localStorage.getItem("TODOS"));
//     window.localStorage.removeItem('TODOS');

//     todos.forEach(val => {
//         if (val.title === word[0]) {
//             // console.log(val.title);
//             const noData = "No data found.";
//             // console.log(noData);
//             const li = document.createElement('li');
//             li.innerText = noData;
//             ul.appendChild(li);
//         }
//         else {
//             item[i] = new storage1(val.title, val.completed);
//             i++;
//         }
//     });
//     window.localStorage.setItem('TODOS', JSON.stringify(item));
//     todos = [];
//     // return;
// }





// rough
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
