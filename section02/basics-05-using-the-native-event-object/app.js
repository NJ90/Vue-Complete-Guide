const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed:{//computed is similar with method, but it can use like a data property, not like a method.
    fullname(){//computed property덕분에 name 부분 함수가 독립적으로 동작함을 알 수 있음
      console.log('Running again..');
      if (this.name === ''){
        return '';
      }
      return this.name + '' + 'JANG'
    }
  },
  methods: {
    outputFullname(){
      console.log('Running again..');
      if (this.name === ''){
        return '';
      }
      return this.name + '' + 'JANG'
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name = ''
    }
  }
});

app.mount('#events');
