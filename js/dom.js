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
