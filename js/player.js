
let player;

function Player(classType, health, mana, strength, agility, speed, desc){


this.classType = classType;
this.health = health;
this.mana = mana;
this.strength = strength;
this.agility= agility;
this.speed = speed;
this.desc = desc;



}


let PlayeMoves = {

  calcAttack: function(){

    //Who Attacks first?

    let getPlayerSpeed = player.speed
    let getEnemySpeed = enemy.speed


    //Player Attacks
    let playerAtack = function(){

      let calcBaseDamage

      if(player.mana>0){
        calcBaseDamage = player.strength*player.mana/1000
      }else{
        calcBaseDamage = player.strength*player.agility/1000
      }

      let offsetDamage = Math.floor(Math.random()*Math.floor(10))
      let calcOutputDamage = calcBaseDamage + offsetDamage

      //Number of hits

      let numberOfHits = Math.floor(Math.random()*Math.floor(player.agility / 10) / 2)+1
      let attackValues = [calcOutputDamage, numberOfHits]

      return attackValues

    }
    //Enemy Attacks
    let enemyAtack = function(){

      let calcBaseDamage

      if(enemy.mana>0){
        calcBaseDamage = enemy.strength*enemy.mana/1000
      }else{
        calcBaseDamage = enemy.strength*enemy.agility/1000
      }

      let offsetDamage = Math.floor(Math.random()*Math.floor(10))
      let calcOutputDamage = calcBaseDamage + offsetDamage

      //Number of hits

      let numberOfHits = Math.floor(Math.random()*Math.floor(enemy.agility / 10) / 2)+1
      let attackValues = [calcOutputDamage, numberOfHits]

      return attackValues

    }

    //Get player & enemy health
    let getPlayerHealth = document.querySelector(".health-player")
    let getEnemyHealth = document.querySelector(".health-enemy")

    //Initiate attacks

    if (getPlayerSpeed >= getEnemySpeed) {
      let playerAtackValues = playerAtack()
      let totalDamage = playerAtackValues[0] * playerAtackValues[1]
      enemy.health = enemy.health - totalDamage
      alert(`You hit ${playerAtackValues[0]} damage, ${playerAtackValues[1]} times.`)
      if(enemy.health <= 0 ){
        alert("You win! Refresh browser to play again!")
        getPlayerHealth.innerHTML= `${player.health}`
        getEnemyHealth.innerHTML= `0`
      }else{
        getEnemyHealth.innerHTML= `${enemy.health}`

        //Enemy Atracks
        let enemyAtackValues = enemyAtack()
        let totalDamage = enemyAtackValues[0] * enemyAtackValues[1]
        player.health = player.health - totalDamage
        alert(`Enemy hit ${enemyAtackValues[0]} damage, ${enemyAtackValues[1]} times.`)

        if(player.health <= 0 ){
          alert("You Lost! Refresh browser to play again!")
          getEnemyHealth.innerHTML= `${enemy.health}`
          getPlayerHealth.innerHTML= `0`
        }else{
          getPlayerHealth.innerHTML = `${player.health}`
        }
      }
    }else if (getEnemySpeed >= getPlayerSpeed) {
      let enemyAtackValues = enemyAtack()
      let totalDamage = enemyAtackValues[0] * enemyAtackValues[1]
      player.health = player.health - totalDamage
      alert(`Enemy hit ${enemyAtackValues[0]} damage, ${enemyAtackValues[1]} times.`)
      if(player.health <= 0 ){
        alert("You Lose! Refresh browser to play again!")
        getEnemyHealth.innerHTML= `${enemy.health}`
        getPlayerHealth.innerHTML= `0`
      }else{
        getPlayerHealth.innerHTML= `${player.health}`

        //Player Atracks
        let playerAtackValues = playerAtack()
        let totalDamage = playerAtackValues[0] * playerAtackValues[1]
        enemy.health = enemy.health - totalDamage
        alert(`You hit ${playerAtackValues[0]} damage, ${playerAtackValues[1]} times.`)

        if(enemy.health <= 0 ){
          alert("You Win! Refresh browser to play again!")
          getPlayerHealth.innerHTML= `${player.health}`
          getEnemyHealth.innerHTML= `0`
        }else{
          getEnemyHealth.innerHTML = `${enemy.health}`
        }
      }
    }
  }

}
