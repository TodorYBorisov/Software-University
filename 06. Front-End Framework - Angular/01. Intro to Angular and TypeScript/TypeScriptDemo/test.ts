let isEven: boolean = false;
let num: number = 5; //  така декларираме число
let str: string = '';//така декларираем стрингове
let color: string = 'blue';
color = 'red';

let list: number[] = [1, 2, 3, 4, 5];
let list2: Array<number> = [1, 2, 3];


type User = {
    name: String,
    age: Number,
}

const peshoUser = {
    name: 'Pesho',
    age: 25
} as User;

interface anotherUser { //описва формата на обекта, какви типове могат да се ползват
    firstName: string,
    id: number,
}

class anotherUserCalss implements anotherUser { // за да не се чупи трябва да декларираме пропъртитата от интерфейса
    firstName: string;
    id: number;

}

const anotherUserList = [
    { firstName: 'Ivan', id: 1 },
    { firstName: 'Toshko', id: 2 },
    { firstName: 'Ivo', id: 3 }
] as anotherUser[];

anotherUserList.forEach(({ firstName, id }) => {

    console.log(`${id}: ${firstName}`);
});


class Human {

    speak() {
        console.log('Hello');

    }
}

class Person extends Human {
    private name: string;
    public age: number;

    constructor(name: string, age: number) {
        super();
        this.name = name;
        this.age = age

    }
}

const personPesho = new Person('Ivan', 33);
