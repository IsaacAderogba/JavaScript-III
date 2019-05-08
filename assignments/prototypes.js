/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject({createdAt, name, dimensions}) {
  this.createdAt = createdAt;
  this.name = name;
  this.dimensions = {
    length: dimensions.length,
    width: dimensions.width,
    height: dimensions.height
  }
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats({createdAt, name, dimensions, healthPoints}) {
  GameObject.call(this, {createdAt, name, dimensions});
  this.healthPoints = healthPoints;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid({createdAt, name, dimensions, healthPoints, team, language, weapons}) {
  CharacterStats.call(this, {createdAt, name, dimensions, healthPoints, healthPoints})
  this.team = team;
  this.language = language;
  this.weapons = weapons;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
function Hero({createdAt, name, dimensions, healthPoints, team, language, weapons}) {
  Humanoid.call(this, {createdAt, name, dimensions, healthPoints, team, language, weapons})
}

Hero.prototype = Object.create(Humanoid.prototype);

function Villain({createdAt, name, dimensions, healthPoints, team, language, weapons}) {
  Humanoid.call(this, {createdAt, name, dimensions, healthPoints, team, language, weapons})
}

Villain.prototype = Object.create(Humanoid.prototype);

  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
Hero.prototype.righteousAttack = function(villain) {
  let damage = 3;
  villain.loseHealthPoints(damage);
}

Hero.prototype.loseHealthPoints = function(pointsDamage) {
  this.healthPoints = this.healthPoints - pointsDamage;
  console.log(`${this.name} took ${pointsDamage} damage`);
  this.isDestroyed();
}

Hero.prototype.isDestroyed = function() {
  if(this.healthPoints <= 0){
    console.log(`${this.name} has been destroyed`);
  }
  console.log(`${this.name} has ${this.healthPoints} health remaining`);
}


Villain.prototype.barbaricAttack = function(hero) {
  let damage = 5;
  hero.loseHealthPoints(damage);
}

Villain.prototype.loseHealthPoints = function(pointsDamage) {
  this.healthPoints = this.healthPoints - pointsDamage;
  console.log(`${this.name} took ${pointsDamage} damage`);
  this.isDestroyed();
}

Villain.prototype.isDestroyed = function() {
  if(this.healthPoints <= 0){
    console.log(`${this.name} has been destroyed`);
  }
  console.log(`${this.name} has ${this.healthPoints} health remaining`);
}

  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  // Create hero object
  const hero = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Good Hero',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  // create villain object
  const villain = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 15,
    name: 'Evil Villain',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  console.log("\n*** FIGHT! ***")
  console.log("Hero starting health points: ", hero.healthPoints); // 10 starting points
  console.log("Villain starting health points: ", villain.healthPoints); // 15 starting points

  hero.righteousAttack(villain); // villain takes 3 damage, has 12 health left
  hero.righteousAttack(villain); // villain takes 3 damage, has 9 health left
  villain.barbaricAttack(hero); // hero takes 5 damage, has 5 health left
  hero.righteousAttack(villain); // villain takes 3 damage, has 6 health left
  hero.righteousAttack(villain); // villain takes  3 damage, has 3 health left
  villain.barbaricAttack(hero); // hero takes 5 damage, has 5 health left, and is thus destroyed