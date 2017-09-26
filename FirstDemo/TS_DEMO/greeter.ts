class Student {
    fullName: string;
    constructor(public firstname, public middlename, public lastname) {
        this.fullName = firstname + ' ' + middlename + ' ' + lastname;
    }
}

interface Person {
    firstname: string;
    lastname: string;
}

function greeter(person: Person) {
    return 'Hello, ' + person.firstname + ' ' + person.lastname;
}

var user = new Student('Hou', 'Yang', 'Po');
document.body.innerHTML = greeter(user);