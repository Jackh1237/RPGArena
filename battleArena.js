class Character {
    constructor(name, strength, health, defense){
        this.name = name
        this.strength = strength
        this.health = health
        this.defense = defense
    }

    takeDamage(damage){
        let damageTaken = damage - this.defense > 0 ? (damage - this.defense):(0)   
        this.health -= damageTaken
        if(this.health < 0){
            this.health = 0
        }
        return(damageTaken)

    }
    attack(target){
        let damage = this.strength * 2
        let damageDealt = target.takeDamage(damage)
        return(damageDealt)
    }

    isAlive(){
        return(this.health > 0)
    }
}



//console.log(player.name +" hit for " +player.attack(player2))
//console.log(player2.isAlive())

class Rogue extends Character{
    constructor(name, strength, health, defense){
        super(name, strength, health, defense)
        
    }
    attack(target){
        let dexterity = 20
        let criticalHit = Math.floor(Math.random() * 100) < dexterity
        let damage = this.strength * 2
        if(criticalHit){
            damage *= 2
            console.log("*** Critical Hit ***")
        }

        let damageDealt = target.takeDamage(damage)
        return(damageDealt)
    }
}

class Mage extends Character{
    constructor(name, strength, health, defense){
        super(name, strength, health, defense)
    }
    attack(target){
        let damage = Math.floor(this.strength * ((Math.random()+ 1 )* 3))
        let damageDealt = target.takeDamage(damage)
        console.log("*** " + this.name + " throws a fireball ***")

        return(damageDealt)

    }

}

let player = new Character("Timmy",  6 , 125, 3)
let player2 = new Character("John",  10, 100, 4)
let player3 = new Rogue("Dave", 4, 100,  3)

let player4 = new Mage("Larry" , 8, 85, 1)

//console.log(player3)
//console.log(player3.name +" hit for " +player3.attack(player2))
console.log(player.name + " vs. "+ player3.name + " vs. " + player4.name)
console.log(player.health + " vs. "+ player3.health + " vs. " + player4.health)
while((player.isAlive() && player3.isAlive())|| (player4.isAlive()&& player.isAlive()) || (player3.isAlive() && player4.isAlive())){
    console.log(player.name + ": " + player.health)
    console.log(player3.name + ": " + player3.health)
    console.log(player4.name + ": " + player4.health)
    if(player.isAlive()) {
        let randomInt = Math.floor(Math.random() * 3)
        switch(randomInt) {
            case(1):
            if(player3.isAlive())
                console.log(player.name +" hit " + player3.name+ " for " +player.attack(player3))
            else
                console.log(player.name +" hit " + player4.name+ " for " +player.attack(player4))

                break
            case(2):
            if(player4.isAlive())
                console.log(player.name +" hit " + player4.name+ " for " +player.attack(player4))
            else
                console.log(player.name +" hit " + player3.name+ " for " +player.attack(player3))

                break

            
        }
        
    }
    if(player3.isAlive()) {
        let randomInt = Math.floor(Math.random() * 3)
        switch(randomInt) {
            case(1):
            if(player4.isAlive())
                console.log(player3.name +" hit " + player4.name+ " for " +player3.attack(player4))
            else
                console.log(player3.name +" hit " + player.name+ " for " +player3.attack(player))

                break
            case(2):
            if(player.isAlive())
                console.log(player3.name +" hit " + player.name+ " for " +player3.attack(player))
            else
                console.log(player3.name +" hit " + player4.name+ " for " +player3.attack(player4))

                break

            
        }

    }
    if(player4.isAlive()) {
        let randomInt = Math.floor(Math.random() * 3)
        switch(randomInt) {
            case(1):
            if(player.isAlive())
                console.log(player4.name +" hit " + player.name+ " for " +player4.attack(player))
            else
                console.log(player4.name +" hit " + player3.name+ " for " +player4.attack(player3))

                break
            case(2):
            if(player3.isAlive())
                console.log(player4.name +" hit " + player3.name+ " for " +player4.attack(player3))
            else
                console.log(player4.name +" hit " + player.name+ " for " +player4.attack(player))

                break

            
        }

    }
    
    
    
}

if(!(player.isAlive() || player3.isAlive() || player4.isAlive())){
    console.log("All players are dead!")
} else if(player.isAlive()){
    console.log(player.name + " wins!")
} else if(player3.isAlive()){
    console.log(player3.name + " wins!")
} else {
    console.log(player4.name + " wins!")
}
