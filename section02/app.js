const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Vue!',
            aboutLink: 'https://kr.vuejs.org/v2/guide/index.html'
        };
    },
    // 문법2
    // data: function(){
    //     return{
    //         courseGoal: 'zzz'
    //     }
    // }

    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if (randomNumber < 0.5){
                return 'Learn!'
            } else {
                return 'Nice!'
            }

        }
    }
});
app.mount('#user-goal');