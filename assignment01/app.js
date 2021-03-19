const app = Vue.createApp({
    data () {
        return {
            outputName: 'NM JANG',    // 1) Output your name 
            outputAge: 30,          // 2) Output your age
            imgUrl: 'https://picjumbo.com/wp-content/uploads/golden-gate-bridge-pillar-2210x1473.jpg' //5) Display some image you found via Google
        };
    },
    methods: {
        outputAge5(){                 // 3) Output your age + 5
            return this.outputAge + 5;
        },

        ouputRandomNumber(){          //4) Output a random number (0 to 1)
            const randomNumber = Math.random();
            return randomNumber;
        },
    }
})

app.mount('#assignment');