
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hello! I'm ${this.name}.`;
    }
}


class DefaultPresenter {
    present(person) {
        console.log(person.greet());
    }
}


function presentViaConsole(person) {
    console.log(`Console: ${person.greet()}`);
}


module.exports = {Person, DefaultPresenter, presentViaConsole};