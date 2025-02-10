const speak = {
    speak() {
        console.log(`${this.first} is speaking.`)
    }
}

const eat = {
    speak() {
        console.log(`${this.first} is eating.`)
    }
}

const drinkk = {
    speak() {
        console.log(`${this.first} is drinking.`)
    }
}

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

function createPerson(first, last){
    return Object.create(personPrototype, {
        first: { value: first },
        last: { value: last }
    })
}

const p1 = createPerson('Maria', 'Clara')

p1.speak()
p1.drink()