const winston = require('winston');
const {Person, DefaultPresenter} = require('./person');

class WinstonPresenter {
    present(person) {
        winston.info(person.greet());
    }
}

function presentPeople(people, presenter = new DefaultPresenter()) {
    for (let i = 0; i < people.length; i++)
        presenter.present(people[i]);
}

const celebrities = [
    new Person('Dr. Jekyll'),
    new Person('Mr. Hide')
]

presentPeople(celebrities);
presentPeople(celebrities, new WinstonPresenter());