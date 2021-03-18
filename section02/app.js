const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'vue!'
        };
    }
    // data: function(){
    //     return{
    //         courseGoal: 'zzz'
    //     }
    // }
});
app.mount('#user-goal');