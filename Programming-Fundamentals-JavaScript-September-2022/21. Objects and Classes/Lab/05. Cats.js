function cats(array) {

    class Cat {
        constructor(catName, age) {

            this.name = catName;
            this.age = age

        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    //let cats = []; //този празен масив го правим , за да може да итерираме по вече направените котки
    for (let line of array) {

        let action = line.split(' ');

        let catName = action[0];
        let age = Number(action[1]);

        let cat = new Cat(catName, age);
        cat.meow();
        //cats.push(cat);
    }

    // for (let newCats of cats) {
    //     cat.meow();
    // }

}
cats(['Mellow 2', 'Tom 5'])


