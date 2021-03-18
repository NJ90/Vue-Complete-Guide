const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Vue!',
            aboutLink: 'https://kr.vuejs.org/v2/guide/index.html'
        };
    }
    // 문법2
    // data: function(){
    //     return{
    //         courseGoal: 'zzz'
    //     }
    // }
});
app.mount('#user-goal');