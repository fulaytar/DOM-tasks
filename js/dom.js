// =====Розв'язок 1 задачі=====

/* const btn=document.querySelector('button');
const input=document.getElementById('input');

btn.addEventListener("click", changeInput);

function changeInput(){
  input.value="Я змінив інпут";
} */


// =====Розв'язок 2 задачі=====

/* const btn=document.querySelector('button');
const input=document.getElementById('input');

btn.addEventListener("click", showInput);

function showInput(){
  alert(input.value)
} */


// =====Розв'язок 3 задачі=====

/* const btn=document.querySelector('button');
const firstInput=document.getElementById('first-input');
const secondInput=document.getElementById('second-input');

btn.addEventListener("click", swapInfoInput);

function swapInfoInput(){
  //[firstInput.value, secondInput.value]=[secondInput.value, firstInput.value]
    let saveInput=firstInput.value;
    firstInput.value=secondInput.value;
    secondInput.value=saveInput;
} */


// =====Розв'язок 4 задачі=====

/* const list_item=document.querySelectorAll('p');
const btn =document.querySelector('button');

//{once:true} додає опцію лише 1 кліку

btn.addEventListener("click", transformNumber,{once:true});

function transformNumber(){
  list_item.forEach((elem,index)=>elem.textContent = index+1+"."+elem.textContent)
} */


// =====Розв'язок 5 задачі=====

/* const btn =document.querySelector('button');
const inputNumber=document.getElementById('test');
const result=document.getElementById('result');

btn.addEventListener("click", calcNumberPow);

function calcNumberPow(){
  console.log(typeof inputNumber.value, "- це тип даних у першому input")
  //перетворюємо дані у числа
  let validNumber=Number(inputNumber.value);
  !isNaN(validNumber)? result.value= validNumber*validNumber : alert("Input is not a number!");
} */


// =====Розв'язок 6 задачі=====

/* const title=document.querySelector('h1');
const list=document.createElement("ul");
list.classList.add("list");
title.insertAdjacentElement('afterend', list);

function addListItem(){
  //приймаємо значення
  let inputInfo=prompt("Уведи, що хочеш додати у список");
  //очищаємо пробіли
  inputInfo=inputInfo.trim();
  //перевірка даних
  if (inputInfo === null||inputInfo==="") {
    return;
  };

//створюємо ліжки
  let element =document.createElement('li');
  element.textContent=inputInfo;
  //додаємо у html
  list.insertAdjacentElement("beforeend", element);
//рекурсивно викликаємо
    addListItem();
}
//викликаємо функцію, інакше вікна не буде 
addListItem(); */


// =====Розв'язок 7 задачі=====

/* const links = document.querySelectorAll('a');

links.forEach(element => {
  element.addEventListener("mouseenter", addTitle);
  function addTitle() {
    element.title="це посилання"
  }
}) */


// =====Розв'язок 8 задачі=====

//const spans = document.querySelectorAll('span');
//spans.forEach((element) => {
  //element.addEventListener("click", addColor);

  //через інлайн стилі
/*   function addColor() {
    if (element.style.backgroundColor !== "red") {
      element.style.backgroundColor = "red";
    } else{
  element.style.backgroundColor="yellow"
    }
    
  } */

  //через  classList.add
  //function addColor() {
    //if (element.classList.contains("red")) {
      //element.classList.remove("red");
      //element.classList.add("yellow")
    //} else {
      //element.classList.remove("yellow");
      //element.classList.add("red");
    //}
  //}
//})


// =====Розв'язок 9 задачі=====

/* const list = document.getElementById('ol');
const btn = document.getElementById('btn');

btn.addEventListener("click", addListItem);


function addListItem() {
  const item = document.createElement("li");
  item.textContent = "пункт";
  list.insertAdjacentElement("beforeend", item);
}

list.addEventListener("click", addSymbol);

function addSymbol(event) {
  const item = event.target;
  item.textContent += "!";
} */

// =====Розв'язок 10 задачі=====

/* const passiveBtn = document.querySelector(".lock");
const activeBnt = document.querySelector(".unlock")
const input = document.getElementById('input');

passiveBtn.addEventListener("click", inputOf);
activeBnt.addEventListener("click", inputOn);

function inputOf() {
  //добавляємо атрибут із пустим значенням
  input.setAttribute("disabled","");
}

function inputOn() {
  //видаляємо атрибут
  input.removeAttribute("disabled");
}
 */


// =====Розв'язок 11 задачі=====

/* const firstValue = document.getElementById('input1');
const secondValue = document.getElementById('input2');
const result = document.getElementById('result');
const btn = document.getElementById('btn');

//очистка від пробілів
firstValue.addEventListener("blur", () => {
  const valueClean = firstValue.value.trim();
  firstValue.value = valueClean;
})

//очистка від пробілів
secondValue.addEventListener("blur", () => { 
  const valueClean = secondValue.value.trim();
  secondValue.value = valueClean;
})

btn.addEventListener("click", calcNum);


function calcNum() {
  let value_1 = firstValue.value.trim();
  let value_2 = secondValue.value.trim();

  //перевірка чи були пробіли
  if (value_1 === "" || value_2 === "") {
  return alert("Value is not defined")
}

//перевірка чи це numbers
if (isNaN(value_1) || isNaN(value_2)) {
  return alert("Value is not a number");
  }
  result.textContent = Number(value_1) + Number(value_2);
}  */


// =====Розв'язок 12 задачі=====

/* 
const inputs = document.querySelectorAll('input');
const textInput = document.getElementById('test');

inputs.forEach(element => {
  element.addEventListener("blur", addTextInput);

//функція присвоює текс і очищає інпут
  function addTextInput() {
    textInput.textContent = element.value;
    element.value = "";
  }
})
 */

// =====Розв'язок 13 задачі=====

/* const input = document.querySelector('input');
const showKey = document.getElementById('show');
console.log(input);

input.addEventListener("keydown", addKey);

function addKey(event) {
  showKey.textContent = event.code;
}
 */

// =====Розв'язок 14 задачі=====

/* const input = document.querySelector('input');
const showKey = document.getElementById('show');

input.addEventListener("input", addKey);

function addKey() {
  if (input.value.length > 0) {
    let inputText = input.value.trim();
    showKey.textContent = inputText[inputText.length-1];
  } else {
    showKey.textContent="?"
  }

} */