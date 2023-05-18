function tudojigame(level, others, config, game) {
  this.level = level;
  this.others = others;
  this.config = config;
  this.game = game;
  this.gameover1 = game.gameover1;
}

tudojigame.prototype = {
  drawtudoji() {
    if (this.game.gameover1 == 1) {
      return false;
    } else {
      var tudojis;
      var gametablee1 = document.getElementsByClassName("tudoji");
      for (var i1 = 0; i1 < this.level.amount; i1++) {
        tudojis = `<img src="./img/tudoji.png" onclick="newgame.hunttudoji(this);" id="tudojin${i1}" class="tudojiimg" width="50px">`;
        var randomtudojie1 = Math.floor(Math.random() * gametablee1.length);
        if (gametablee1[randomtudojie1].innerHTML == "") {
          gametablee1[randomtudojie1].innerHTML = tudojis;
        } else {
          console.log(gametablee1[randomtudojie1].innerHTML);
        }
      }
      return document.getElementsByClassName("tudojiimg");
    }
  },
  drawbomb() {
    if (this.game.gameover1 == 1) {
      return false;
    } else {
      var bombs;
      var gametablee1 = document.getElementsByClassName("tudoji");
      for (var i1 = 0; i1 < this.level.bombsamount; i1++) {
        bombs = `<img src="./img/bomb.png" onclick="newgame.huntbomb(this)" id="bombn${i1}" class="bombimg" width="50px">`;
        var randombomb1 = Math.floor(Math.random() * gametablee1.length);
        if (gametablee1[randombomb1].innerHTML == "") {
          gametablee1[randombomb1].innerHTML = bombs;
        } else {
        }
      }
      return document.getElementsByClassName("bombimg");
    }
  },
  huntbomb(element1) {
    if (this.game.gameover1 == 1) {
      return false;
    } else {
      element1.remove();
      this.game.score = this.game.score - 2;
      document.getElementById("score").innerHTML = newgame.game.score;
    }
  },
  hunttudoji(element1) {
    if (this.game.gameover1 == 1) {
      return false;
    } else {
      element1.remove();
      this.game.score = this.game.score + 3;
      document.getElementById("score").innerHTML = newgame.game.score;
    }
  },
  drawall() {
    if (this.game.gameover1 == 1) {
      this.game.gameover1 = 1;
    } else {
      this.drawtudoji();
      this.drawbomb();
      window.setTimeout(this.gameover, this.level.time);
    }
  },
  gameover() {
    this.game.gameover1 = 1;
    console.log("game over" + this.game.gameover1);
    document.getElementById("status").innerHTML = "<h2 style="color:var(--blue);">GAME OVER</h2>";
    if (this.game.score > 14) {
      console.log(this.game.score);
      window.setTimeout(this.gametest, 1500);
      uplevel(`level${this.level.level111 + 1}`);
      window.setTimeout(this.drawall, 1500);
    } else {
      console.log(this.game.score);
    }
  },
  gamestart() {
    if (this.game.gameover1 == 1) {
      this.game.gameover1 = 1;
    } else {
      this.game.gameover1 = 0;
    }
    window.setTimeout(this.gameover, this.level.time);
  },
  gametest() {
    this.gameover1 = 0;
    console.log("ddd" + this.level.time);
  },
};

var level = {
  level0: {
    level111: 0,
    amount: 12,
    bombsamount: 4,
    time: 5400,
  },
  level1: {
    level111: 1,
    amount: 9,
    bombsamount: 3,
    time: 5000,
  },
  level2: {
    level111: 2,
    amount: 10,
    bombsamount: 4,
    time: 4000,
  },
  level3: {
    level111: 3,
    amount: 11,
    bombsamount: 5,
    time: 2500,
  },
};

var leveld;
function uplevel(levelddd) {
  leveld = level[levelddd];
  return leveld;
}
