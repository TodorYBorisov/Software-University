function solve() {
    class Fighter {

        constructor(name, health, stamina) {

            this.name = name;
            this.health = health;
            this.stamina = stamina;
        }
        fight() {
            this.stamina--;
            console.log(`${name} slashes at the foe!`);
        }
    }

    class Mage {
        constructor(name, health, mana) {

            this.name = name;
            this.health = health;
            this.mana = mana;
        }
        cast(spell) {
            this.mana--;
            console.log(`${name} cast ${spell}`);
        }
    }
}



let create = solve();
const scorcher = create.mage('Scorcher');
scorcher.cast('fireball');
scorcher.cast('thunder');
scorcher.cast('light');

const scorcher2 = create.fighter('Scorcher 2');
scorcher2.fight();

console.log(scorcher2.stamina);
console.log(scorcher.mana);
