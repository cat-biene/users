// Реализуйте форму добавления карточек пользователей. В форме должны быть поля (Имя, Фамилия и Возраст). При отправке формы должна формироваться карточка с данными пользователя в интерфейсе. Дизайн страницы и расположение элементов могут быть произвольными.

const formNode = document.querySelector('.addForm');
const list = [];

formNode.addEventListener('submit', (event) => {
    event.preventDefault();
    const {first, last, age} = event.target;
    const user ={
        first: first.value,
        last: last.value,
        age: +age.value
    };

    list.push(user);
    rerender();
    event.target.reset();
})

function creatUserCard(first, last, age) {
    const conteiner = document.createElement('div');
    const firstNode = document.createElement('p');
    const lastNode = document.createElement('p');
    const ageNode = document.createElement('p');

    firstNode.innerText = first;
    lastNode.innerText = last;
    ageNode.innerText = age;

    conteiner.append(firstNode, lastNode, ageNode);
    return conteiner;
}

function rerender() {
    const conteiner = document.querySelector('#listConteiner');
    conteiner.innerText = '';
    list.forEach(({first, last, age}) => conteiner.append(creatUserCard(first, last, age)));
}