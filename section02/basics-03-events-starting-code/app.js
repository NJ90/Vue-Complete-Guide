const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    counterAdd(){
      this.counter = this.counter + 1
    },
    counterRemove(){
      this.counter = this.counter - 1
    }
  }
});

app.mount('#events');
