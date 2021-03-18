Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods:{
        addGoal(){
            this.goals.push(this.enteredValue);
        }
    }
}).mount('#app');


// var buttonEl = document.querySelector("button")
// var inputEl = document.querySelector("#goal")
// var outputEl = document.querySelector("ul")

// function addGoal(){
//     var getInputValue = inputEl.value;
//     var createList = document.createElement("li");

//     console.log(getInputValue);

//     createList.textContent = getInputValue;
    
//     outputEl.append(createList);
//     inputEl.value='';
    
// }

// buttonEl.addEventListener("click", addGoal)