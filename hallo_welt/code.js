function login() {
    const age = document.getElementById('feld').value
    const answer = document.getElementById('answer')
    if (age === "") {
        answer.innerHTML = 'Bitte gib dein Alter an.';
    }
    else if (age < 12) {
        answer.innerHTML = 'Du bist noch zu jung. Komm später wider.';
    }
    else if (age >= 12 && age <= 17) {
        answer.innerHTML = 'Herzlich Willkommen. Du darfst die Website begrenzt nutzen.';
    }
    else if (age > 18) {
        answer.innerHTML = 'Herzlich Wilkommen. Du darfst unsere Website ohne Grenzen ausnutzen.';
    }
}

let feld1 = document.getElementById('feld1');
let feld2 = document.getElementById('feld2');
let feld3 = document.getElementById('feld3');
let feld4 = document.getElementById('feld4');
let feld5 = document.getElementById('feld5');
let feld6 = document.getElementById('feld6');
let feld7 = document.getElementById('feld7');
let feld8 = document.getElementById('feld8');
let feld9 = document.getElementById('feld9');
let feld10 = document.getElementById('feld10');


function entf1() {
    feld1.value = ''; 
}
function entf2() {
    feld2.value = ''; 
}
function entf3() {
    feld3.value = ''; 
}
function entf4() {
    feld4.value = '';}
function entf5() {
    feld5.value = ''; 
}
function entf6() {
    feld6.value = ''; 
}
function entf7() {
    feld7.value = ''; 
}
function entf8() {
    feld8.value = ''; }
function entf9() {
    feld9.value = ''; 
}
function entf10() {
    feld10.value = ''; 
}

let todosList = [];

function deleted(index) {
    console.log(index);
    document.getElementById('feld' + index).innerHTML = '';
    const newToDos = [];
    for (let i = 0; i < todosList.length; i++) {
        if (i !== index) {
            newToDos.push(todosList[i]);
        }
    }
    todosList = [];
    console.log(todosList.length);
    
    
    todosList.push(...newToDos);
}

function addToDo() {
    const input = document.getElementById('input').value;

    const answer1 = document.getElementById('answer1');

    if (input === "") {
        answer1.innerHTML = 'Bitte gib einen Text ein';
        return;
    }

    if (input === "Hallo Welt") {
        answer1.innerHTML = 'Herzlich Willkommen';
        return
    }

    todosList.push(input);
    todosList.forEach(element => {
        console.log(element);
    });

    let content = '';
    for (let i = 0; i < todosList.length; i++) {
        content += '<div id="feld' + i + '"><input type="checkbox"><button onclick="deleted(' + i + ')">' + todosList[i] +'</button><br></div>';
    }

    document.getElementById('todos').innerHTML = content;
    document.getElementById('input').value = '';
    answer1.innerHTML = '';
}
document.getElementById('input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addToDo(); 
    }
});

let display = document.getElementById ('display')

function appendToDisplay(value) {
    display.value += value;  
}

function clearDisplay() {
    display.value = '';  
}

function calculate() {
    try {
        display.value = eval(display.value);  
    } catch (e) {
        display.value = 'Fehler';  
    }
}