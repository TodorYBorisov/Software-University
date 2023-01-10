function inventory(array) {

    let register = [];

    array.forEach(line => {
        let [heroName, heroLevel, heroItems] = line.split(' / ');

        let currentHero = {
            heroName: heroName,
            level: Number(heroLevel),
            heroItems: heroItems,
        }
        register.push(currentHero)
    });

    register.sort((a, b) => a.level - b.level);

    register.forEach(hero => {

        console.log(`Hero: ${hero.heroName}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.heroItems}`);
    });  
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);