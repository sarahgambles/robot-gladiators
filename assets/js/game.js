var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
 
// test commit
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
 
var fight = function(enemyName) { 
while (playerHealth > 0 && enemyHealth > 0) {
   // ask user if they'd like to fight or run
   var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
 
 // if user picks "skip" confirm and then stop the loop
 if (promptFight === "skip" || promptFight === "SKIP") {
     // confirm user wants to skip
     var confirmSkip = window.confirm("Are you sure you'd like to quit?");
 
     // if yes (true), leave fight
     if (confirmSkip) {
         window.alert(playerName + ' has decided to skip this fight. Goodbye!');
         // subtract money from playerMoney for skipping
         playerMoney = Math.max(0, playerMoney - 10);
         console.log("playerMoney", playerMoney)
         break;
     }
   }
  
   // remove enemy's health by subtracting the amount set in the playerAttack variable
   enemyHealth = Math.max(0, enemyHealth - playerAttack);
   console.log(
     playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
   );
    // check enemy's health
   if (enemyHealth <= 0) {
     window.alert(enemyName + ' has died!');
   } else {
     window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
   }
    // check enemy's health
   if (enemyHealth <=0) {
       window.alert(enemyName + ' has died!');
      
       // award player money for winning
       playerMoney = playerMoney + 20;
 
       // leave while() loop since enemy is dead
       break;
   } else {
       window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
   }
  
   // remove player's health by subtracting the amount set in the enemyAttack variable
   playerHealth = Math.max(0, playerHealth - enemyAttack);
   console.log(
     enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
   );
    // check player's health
   if (playerHealth <= 0) {
     window.alert(playerName + ' has died!');
     // leave while() loop if player is dead
     break;
 
   } else {
     window.alert(playerName + ' still has ' + playerHealth + ' health left.');
   }
   if(playerHealth > 0) {
       // let user know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
       window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
 
       // pick new enemy to fight based on the index of the enemyNames array
       var pickedEnemyName = enemyNames[i];
 
       // reset enemyHealth before starting new fight
       enemyHealth = 50;
 
       // use debugger to pause script from running and check what's going on in that moment in the code
       // debugger;
 
       // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
       fight(pickedEnemyName);
 
       // if player is still alive and we're not at the last enemy in the array
       if(playerHealth > 0 && i < enemyNames.length - 1) {
           shop();
       }
   }
}
};
 
 //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
enemyHealth = Math.max(0, enemyHealth - playerAttack);
 
// Log a resulting message to the console so we know that it worked.
console.log(
 playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);
 
 // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable
playerHealth = Math.max(0, playerHealth - enemyAttack);
 
// Log a resulting message to the console so we know that it worked.
console.log(
 enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);
 
// put new code under this
console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
 
// check player's health
if (playerHealth <= 0) {
 window.alert(playerName + " has died!");
 break;
 while(enemyHealth > 0 && playerHealth > 0)
}
else {
 window.alert(playerName + " still has " + playerHealth + " health left.");
}
 
if (enemyHealth <= 0) {
   window.alert(enemyName + " has died!");
   break;
 }
 
 else {
     window.alert("You have lost your robot in battle! Game Over!");
 }
 
// if the enemy robot's health is zero or less, exit from the fight loop.
 
}
 
var startGame = function() {
   for (var i = 0; i < enemyNames.length; i++) {}
   // reset player stats
   playerHealth = 100;
   playerAttack = 10;
   playerMoney = 10;

// generate random damage value based on player's attack power
var damage = randomNumber(playerAttack - 3, playerAttack);

enemyHealth = Math.max(0, enemyHealth - damage);
}

// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};
   // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
   endGame();
};
   for (var i = 0; i < enemyNames.length; i++) {
 
   }
 
for (var i = 0; i < enemyNames.length; i++) {
   if (playerHealth > 0) {
       window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
           var pickedEnemyName = enemyNames[i];
 
           enemyHealth = randomNumber();
           fight(pickedEnemyName);

           var damage = randomNumber(enemyAttack - 3, enemyAttack);

           playerHealth = Math.max(0, playerHealth - damage);
 
       // if we're not at the last enemy in the array
       if (i < enemyNames.length - 1) {
}
else {
   window.alert("You have lost your robot in battle! Game over!");
}
}
};
 
// function to end the entire game
var endGame = function() {
   // if player is still alive, player wins!
   window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
   window.alert("The game has now ended. Let's see how you did!");
}
else {
   window.alert("You've lost your robot in battle.");
}
}
 
var shop = function() {
   console.log("entered the shop");
 
   // use switch to carry out action
   switch (shop0ptionPrompt) {
       case "REFILL": // new case
       case "refill";
       if (playerMoney >= 7) {
       window.alert("Refilling player's health by 20 for 7 dollars.");
 
           // increase health and decrease money
           playerHealth = playerHealth + 20;
           playerMoney = Math.max(0, playerMoney - 10);
       }
       else {
           window.alert("You don't have enough money!");
       }
           break;
        case "UPGRADE": // new case
        case "upgrade":
            if (playerMoney >= 7) {
           window.alert("Upgrading player's attack by 6 for 7 dollars.");
 
           // increase attack and decrease money
           playerAttack = playerAttack + 6;
           playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }

            break;
        case "LEAVE": // new case
        case "leave":
           window.alert("Leaving the store.");
           break;
       default:
           window.alert("You did not pick a valid option. Try again.");
 
           // call shop() again to force player to pick a valid option
           shop();
           break;
        }
           if (shop0ptionPrompt === "refill" || shop0ptionPrompt === "REFILL") {
   }
};

var randomNumber = function() {
    var value = Math.floor(Math.random() * 21) + 40;

    return value;
};
 
// ask player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");
if (playerAgainConfirm) {
   // restart the game
   startGame();
}
else {
   window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}
