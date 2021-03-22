const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      myName:'',
      confirmedName:''
    };
  },

  methods: { 
    confirmName(){
      this.confirmedName = this.myName;
      console.log('Confirmed');
    },
    submitForm(event){
      // event.preventDefault();
      alert('Submitted');
    },
    counterAdd(parameter){//메소드에 arguments를 넘겨봄. 매개변수(parameter) 주목
      this.counter = this.counter + parameter
    },
    counterRemove(parameter){//메소드에 arguments를 넘겨봄. 매개변수(parameter) 주목
      this.counter = this.counter - parameter
    },
    setName(event){
      // this.myName = document.getElementsByTagName(input).value;
      this.myName = event.target.value;
    }
  }
});

app.mount('#events');
