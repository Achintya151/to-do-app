const getElement = (id) => {
    const element = document.getElementById(id);
    return element;
}

const handleSubmit = () => {
    // const input = document.getElementById('todo-text');
    const inputText = getElement('todo-text').value;

    const ul = getElement('todo-list');

    const li = document.createElement('li');
    // li.innerText = '';
    li.innerText = inputText;
    ul.appendChild(li);

    // console.log(inputText);
}