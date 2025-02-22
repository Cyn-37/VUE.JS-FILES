const app = Vue.createApp({
    data() { 
        return {
          courseGoalA: "Finish the course and learn Vue!",
          courseGoalB: "Create amazing apps!",
        //   courseGoalB: "<h3>Create amazing apps!</h3>",
          vueLink: "https://vuejs.org/",
        };
    },

methods: { 
    outputGoal(){ 
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
            return this.courseGoalA;
        } else { 
            return this.courseGoalB;
        }
    }
}
});
app.mount('#user-goal');