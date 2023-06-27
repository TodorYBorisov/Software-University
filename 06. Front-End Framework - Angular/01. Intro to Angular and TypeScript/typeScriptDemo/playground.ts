type User1 = {
    name: string,
    age: number;
}

interface User2 {
    name: string,
    age: number
}

class UserTest1 implements User1 {
    name: string;
    age: number;
}
