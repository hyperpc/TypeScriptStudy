var Student = /** @class */ (function () {
    function Student(firstname, middlename, lastname) {
        this.firstname = firstname;
        this.middlename = middlename;
        this.lastname = lastname;
        this.fullName = firstname + ' ' + middlename + ' ' + lastname;
    }
    return Student;
}());
function greeter(person) {
    return 'Hello, ' + person.firstname + ' ' + person.lastname;
}
var user = new Student('Hou', 'Yang', 'Po');
document.body.innerHTML = greeter(user);
