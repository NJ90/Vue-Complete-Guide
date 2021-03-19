const app = Vue.createApp({
    data() { //데이터 자체가 함수
        return {
            courseGoal: 'Vue!',
            aboutLink: 'https://kr.vuejs.org/v2/guide/index.html',
            데이터불러오기1 : '데이터불러오기1',
            데이터불러오기2 : '데이터불러오기2'
        };
    },
    // data 문법2
    // data: function(){
    //     return{
    //         courseGoal: 'zzz'
    //     }
    // }

    methods: { //기능(함수) 모음, 때문에 html문서에서 함수로 호출한다
        outputGoal(){
            const randomNumber = Math.random();
            // if (randomNumber < 0.5){
            //     return 'Learn!'
            // } else {
            //     return 'Nice!'
            // }

            if (randomNumber < 0.5){//데이터에 있는 프로퍼티 불러오기
                return this.데이터불러오기1
            } else {
                return this.데이터불러오기2
            }
        }
    }
});
app.mount('#user-goal');