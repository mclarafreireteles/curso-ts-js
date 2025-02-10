function createPerson(first, last){
    const personPrototype = {
        speak() {
            console.log(`${this.first} is speaking`)
        },
        eat() {
            console.log(`${this.first} is eating`)
        },
        drink() {
            console.log(`${this.first} is drinking`)
        }
    }

    return Object.create(personPrototype, {
        first: { value: first },
        last: { value: last }
    })
}

const p1 = createPerson('Maria', 'Clara')

p1.speak()
p1.drink()