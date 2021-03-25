
const app = Vue.createApp({
    data() {
      return {
        num: 0,
        result: 'RESULT'
      };
    },
    methods: {
        countUp(param){
            this.num = this.num + param
        }
    },
    //2) Watch for changes in "result" and reset the value to 0 after 5 seconds
    //과제 2번) 데이터에 관여하지 않고 시간만 컨트롤해야 하는 동작이므로 왓쳐에..
    watch:{
        num(num){
            if(num > 1){
            const that = this;
            setTimeout(function() {
             that.num = 0;
               }, 5000)
            }
        }
    },
    // 1) Connect the buttons and calculate a value (a number)
    //과제 1번) 데이터를 가져와야하기 때문에 컴퓨티드에 로직을 넣어주었다.
    computed:{
        getResult(){
            if(this.num > 37){
               return this.result = 'Too much!'
            } else {
                return this.result = 'Not there yet'
            }
        }
    }
  });
  
  app.mount('#assignment');
  