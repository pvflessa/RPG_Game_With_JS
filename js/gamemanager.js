

let GameManager = {

  setGameStart: function(classType){

    this.setPreFight();

    this.resetPlayer(classType);

  },

  resetPlayer: function(classType){

      switch (classType) {
        case "Warrior":
          player = new Player(classType, 200, 0, 200, 100, 50, "Warrior have higher health and stamina, however their strength also makes them slower and clumsier.")
          break;
        case "Rogue":
          player = new Player(classType, 100, 0, 100, 150, 200, "Rogues are fast and have high stamina and speed which makes up for their lack in strength and health.")
          break;
        case "Mage":
          player = new Player(classType, 80, 0, 50, 200, 50, "Hunters are well rounded fighters that focus on evening out their skills. No strengths an weaknesses.")
          break;
        case "Hunter":
          player = new Player(classType, 200, 0, 50, 200, 100, "Mages are glass canons which puts all their effort into spells. This means they slack on everything else.")
          break;


      }

      //Change the interface of the page
    let body = document.querySelector("body")



    body.innerHTML =`


      <div class="header"><!-- header starts-->
          <h2>Choose your Enemy!</h2>
      </div><!-- header ends-->


<div class="container"><!-- container starts-->



  <div class="col-md-4"> <!-- col-md-4 starts-->


  <div class="interface"><!-- interface starts -->
    <div class="card-container"><!-- card-container starts-->

    <div class="clash-card warrior">
    <div class="clash-card__image clash-card__image--warrior">
      <img src="img/player/${classType.toLowerCase()}.png" id="${classType.toLowerCase()}" alt="warrior" />
    </div>

    <div class="clash-card__unit-name">The ${classType.toLowerCase()}</div>
    <div class="clash-card__unit-description">
      ${player.desc}
    </div>

    <div class="clash-card__unit-stats clash-card__unit-stats--warrior clearfix">
      <div class="one-third">
        <div class="stat health-player">${player.health}</div>
        <div class="stat-value">HEALTH</div>
      </div>

      <div class="one-third">
        <div class="stat">${player.strength}</div>
        <div class="stat-value">Strenght</div>
      </div>

      <div class="one-third no-border">
        <div class="stat">${player.speed}</div>
        <div class="stat-value">Speed</div>
      </div>

      <div class="one-third no-border">
        <div class="stat">${player.mana}</div>
        <div class="stat-value">Mana</div>
      </div>

      <div class="one-third no-border">
        <div class="stat">${player.agility}</div>
        <div class="stat-value">Agility</div>
      </div>

    </div>

  </div> <!-- end clash-card warrior-->

  </div><!-- card-container ends-->
</div><!-- interface ends -->
</div><!-- col-md-4 ends -->


<div class="col-md-4">
  <div class="actions">
    <img src="img/enemy/vs.png"  alt="vs" id="vs" />
  </div>
</div>



<div class="col-md-4">

<div class="interface">
  <div class="card-container">

    <div class="clash-card warrior">
  <div class="clash-card__image clash-card__image--warrior ">
  <div class="btn-prefight">
      <a href="#" class = "btn btn-danger-outline" onclick="GameManager.setFight()" onmousedown="sound.play()">Search for an enemy</a>
</div>
  </div>

  <div class="clash-card__unit-name">The ?</div>
  <div class="clash-card__unit-description">
  ?
  </div>

  <div class="clash-card__unit-stats clash-card__unit-stats--warrior clearfix">
    <div class="one-third">
      <div class="stat">?</div>
      <div class="stat-value">HEALTH</div>
    </div>

    <div class="one-third">
      <div class="stat">?</div>
      <div class="stat-value">Strenght</div>
    </div>

    <div class="one-third no-border">
      <div class="stat">?</div>
      <div class="stat-value">Speed</div>
    </div>

    <div class="one-third no-border">
      <div class="stat">?</div>
      <div class="stat-value">Mana</div>
    </div>

    <div class="one-third no-border">
      <div class="stat">?</div>
      <div class="stat-value">Agility</div>
    </div>

  </div>

</div> <!-- end clash-card warrior-->
</div>
</div>
  <div class="enemy">

  </div>

</div>




</div> <!--container ends -->


    `


  },

  setPreFight: function(){

      // let getHeader = document.querySelector(".header")
      // let getActions = document.querySelector(".actions")
      // let getArena = document.querySelector(".arena")
      //
      // getHeader.innerHTML = `<p>Task: Find an enemy</>`
      // getActions.innerHTML = ` `
      // getArena.innerHTML = ``



  },

  setFight : function(){

      let headerAfterEnemy = document.querySelector('.header')
      headerAfterEnemy.innerHTML = `  <h2>Choose your Move!</h2>`

      //let getEnemy = document.querySelector(".enemy")

      //Create enemy

      let enemy00 = new Enemy("Goblin", 100, 0, 50, 100, 100, "Goblins are small, black-hearted humanoids that lair in despoiled dungeons and other dismal settings. Individually weak, they gather in large numbers to torment other creatures.")
      let enemy01 = new Enemy("Troll", 200, 0, 150, 80, 150, "Fearsome green-skinned giants, trolls eat anything they can catch and devour. Only acid and fire can arrest the regenerative properties of a troll’s flesh.")
      let enemy02 = new Enemy("Undead", 100, 0, 100, 50, 100, "Undead is a term that collectively refers to once-living creatures which have been animated by spiritual or supernatural forces.")
      let enemy03 = new Enemy("Orc", 150, 0, 200, 100, 100, "Orcs are carnivorous humanoids, weighing from 180 to 280 lbs. They are easily noticeable due to their green to gray skin, lupine ears, lower canines resembling boar tusks, and their muscular builds.")
      // let enemy02 = new Enemy("Undead", 200, 0, 150, 80, 150, "Fearsome green-skinned giants, trolls eat anything they can catch and devour. Only acid and fire can arrest the regenerative properties of a troll’s flesh.")
      // let enemy03 = new Enemy("Orge", 200, 0, 150, 80, 150, "Fearsome green-skinned giants, trolls eat anything they can catch and devour. Only acid and fire can arrest the regenerative properties of a troll’s flesh.")

      let chooseRandomEnemy = Math.floor((Math.random()* 4)+1)

      switch (chooseRandomEnemy) {
        case 0:

          enemy = enemy00

          break;

        case 1:

          enemy = enemy01

          break;
        case 2:

            enemy = enemy02

            break;

            case 3:

              enemy = enemy03

            break;






      }

      let getEnemy = document.querySelector(".enemy")


      let getBtn = document.querySelector(".btn-prefight")

      getBtn.innerHTML=''

      getEnemy.innerHTML=`
      <div class="interface"><!-- interface starts -->
      <div class="card-container"><!-- card-container starts-->

      <div class="clash-card warrior">
      <div class="clash-card__image clash-card__image--warrior">
        <img src="img/enemy/${enemy.enemyType.toLowerCase()}.png" id="${enemy.enemyType.toLowerCase()}" alt="warrior" />
      </div>

      <div class="clash-card__unit-name">The ${enemy.enemyType.toLowerCase()}</div>
   <div class="clash-card__unit-description">
        ${enemy.desc}
      </div>

      <div class="clash-card__unit-stats clash-card__unit-stats--warrior clearfix">
        <div class="one-third">
          <div class="stat health-enemy">${enemy.health}</div>
          <div class="stat-value">HEALTH</div>
        </div>

        <div class="one-third">
          <div class="stat">${enemy.strength}</div>
          <div class="stat-value">Strenght</div>
        </div>

        <div class="one-third no-border">
          <div class="stat">${enemy.speed}</div>
          <div class="stat-value">Speed</div>
        </div>

        <div class="one-third no-border">
          <div class="stat">${enemy.mana}</div>
          <div class="stat-value">Mana</div>
        </div>

        <div class="one-third no-border">
          <div class="stat">${enemy.agility}</div>
          <div class="stat-value">Agility</div>
        </div>

      </div>

    </div> <!-- end clash-card warrior-->

    </div><!-- card-container ends-->

    </div><!-- interface ends -->
      `

      let actions = document.querySelector(".actions")

      actions.innerHTML = `
      <div class="text-center text-large">

	<a href="#" class="attack-button"onclick="PlayeMoves.calcAttack()"> Attack!</a>
</div>
  <img src="img/enemy/vs.png"  alt="vs" id="vs" />


      `


  }

}

let sound = new Audio()
sound.src='sound.mp3'
