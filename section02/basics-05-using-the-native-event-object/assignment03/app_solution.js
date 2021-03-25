
const app = Vue.createApp({
    data() {
      return {
        number: 0,
      };
    },
        // 1) Connect the buttons and calculate a value (a number)
        // computed에서 동작하는 코드는 only number이 바뀔때에만 코드가 실행된다.
    computed:{
        result(){
            if(this.number < 37){
                return 'Not there yet';
            } else if (this.number === 37){
                return this.number;
            } else {
                return 'Too much!';
            }
        }
    },
    // 2) Watch for changes in "result" and reset the value to 0 after 5 seconds
    // result() 프로퍼티를 감시한다! whenever result() changes, I wanna trigger the watcher (changes, has new value and so on NOT result() is evaluated)
    // So! watch는 'Not there yet', '37', 'Tol much!' 로 value가 바뀔때에만 트리거된다.
    watch:{
        result(){
            console.log('Watcher executing')
            const that = this;
            setTimeout(function() {
             that.number = 0;
               }, 5000);
        }
    },
    methods: {
        countUp(param){
            this.number = this.number + param
        }
    }
  });
  
  app.mount('#assignment');
  