const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },

  methods: { //메소드에 arguments를 넘겨봄. 매개변수(parameter) 주목
    counterAdd(parameter){
      this.counter = this.counter + parameter
    },
    counterRemove(parameter){
      this.counter = this.counter - parameter
    }
  }
});

app.mount('#events');
