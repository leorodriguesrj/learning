const winston = require('winston');
const {Person, presentViaConsole} = require('./person');

function presentViaWinston(person) {
    winston.info(person.greet());
}

function presentPeople(people, presentPerson = presentViaConsole) {
    for (let i = 0; i < people.length; i++)
        presentPerson(people[i]);
}

const celebrities = [
    new Person('Dr. Jekyll'),
    new Person('Mr. Hide')
];

presentPeople(celebrities);
presentPeople(celebrities, presentViaWinston);