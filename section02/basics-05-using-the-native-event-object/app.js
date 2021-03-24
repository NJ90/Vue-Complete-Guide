//watch, computed
//watch : 데이터 속성을 업데이트 하지 않고, 속성 변경에 대한 작업에 사용
//computed : 일부 출력값을 동적으로 계산하고 출력할 때 사용

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName:'',
      // fullname:''
    };
  },
  watch:{
    //method를 정의하여 사용

    counter(value){
      if (value >50){
        const that = this;
        setTimeout(function(){
          that.counter = 0;
        }, 2000)
      }
    }

    // name(value){
    //   if(value === ''){
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + '' + this.lastName
    //   }
    // },
    // lastName(value){
    //   if(value === ''){
    //     this.fullname = '';
    //   } else {
    //     this.fullname = this.name + '' + value;
    //   }
    // }
  },
  //wathchers 보다 더 간단한 코드로 같은 기능을 구현할 수 있는 computed
  computed:{//computed is similar with method, but it can use like a data property, not like a method.
    fullname(){//computed property덕분에 name 부분 함수가 독립적으로 동작함을 알 수 있음
      console.log('Running again..');
      if (this.name === '' || this.lastName === ''){
        return '';
      }
      return this.name + '' + this.lastName;
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
