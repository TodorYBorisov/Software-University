var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.sayHello = function () {
        return "".concat(this.name, " say hi!");
    };
    return User;
}());
var user = new User('Toshko');
console.log(user.sayHello());
