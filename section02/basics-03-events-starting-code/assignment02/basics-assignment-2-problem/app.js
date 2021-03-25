const app = Vue.createApp({
    data() {
        return{
            paragraph:'OUTPUT',
            confirmParagraph: 'OUTPUT only Press the Enter Key'
        }
    },
    methods:{
        //1) Show an alert (any text of your choice) when the button is pressed 
        showAlert(){
            alert('No.1 Assignment')
        },

        //2) Register the user input on "keydown" and output it in the paragraph (hint: event.target.value helps)
        outputPragraph(event){
            this.paragraph = event.target.value;
        },

        //3) Repeat 2) but only output the entered value if the ENTER key was pressed -->
        confirmedParagraph(event){
            this.confirmParagraph = event.target.value;
        }

        
    }
})

app.mount('#assignment')