class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    speak() {
        return 'Oi!'
    }

    eat(){
        return `${this.firstName} está comendo.`
    }

    drink(){
        return `${this.firstName} está bebendo.`
    }
}

const p1 = new Person("maria", "freire")
console.log(p1.firstName)
console.log(p1.eat())