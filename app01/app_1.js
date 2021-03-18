var inputEl = document.querySelector('#goal');
var buttonEl = document.querySelector('button');
var outputEl = document.querySelector('ul');


function addGoal(){
    var getInputValue = inputEl.value;
    var createList = document.createElement('li');
    // console.log(getInputValue);

    createList.textContent = getInputValue;

    // outputEl.appendChild(getInputValue);
    outputEl.appendChild(createList);
    inputEl.value='';
}


    buttonEl.addEventListener('click', addGoal)

