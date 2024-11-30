function getRandomValue(min, max) { 
    return Math.floor(Math.random() * (max - min) + max);
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
        winner: null,
        logMessages: [],
    };
  },

  methods: {
    attackMonster() {
      const attackValue = getRandomValue(5, 12);
          this.monsterHealth -= attackValue;
          this.addLogMessage('player', 'attack', attackValue);
      this.attackPlayer();
      this.currentRound++;
    },

    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
        this.playerHealth -= attackValue;
        this.addLogMessage("monster", "attack", attackValue);
    },

    specialAttackMonster() {
      const attackValue = getRandomValue(10, 25);
        this.monsterHealth -= attackValue;
        this.addLogMessage("player", "attack", attackValue);
      this.attackPlayer();
      this.currentRound++;
    },

    heal() {
      const healValue = getRandomValue(8, 20);
      if (this.playerHealth + healValue < 100) {
        this.playerHealth += healValue;
      } else {
        this.playerHealth = 100;
        }
        this.addLogMessage("player", "heal", healValue);
      this.currentRound++;
      this.attackPlayer();
    },

      surrender() {
          this.winner = 'monster';
      },

      resetGame() { 
          this.playerHealth = 100;
          this.monsterHealth = 100;
          this.winner = null;
          this.currentRound = 0;
          this.logMessages = [];
      },

      addLogMessage(who, what, value) {
        //adds an obj to the beginning of array
        this.logMessages.unshift({
          actionBy: who,
          actionType: what,
          actionValue: value,
        });
      },
  },

  watch: {
      playerHealth(value) {
          if (value <= 0 && this.monsterHealth <= 0) {
              //draw
              this.winner = 'draw';
          } else if (value <= 0) { 
              //player lost
              this.winner = "monster";
          }
    },

      monsterHealth(value) {
        if (value <= 0 && this.playerHealth <= 0) {
            //draw
            this.winner = "draw";
        } else if (value <= 0) {
            //monster lost
            this.winner = "player";
          }
    },
  },

  computed: {
      monsterBarStyles() {
          if (this.monsterHealth < 0) {
              return { width: '0%' };
           }
      return { width: this.monsterHealth + '%' };
    },

      playerBarStyles() {
          if (this.playerHealth < 0) {
                      return { width: '0%' };
                  }
      return { width: this.playerHealth + '%' };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
});

app.mount('#game')