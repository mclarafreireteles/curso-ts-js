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

const drink = {
    speak() {
        console.log(`${this.first} is drinking.`)
    }
}

const personPrototype = Object.assign({}, speak, eat, drink)

function createPerson(first, last){
    return Object.create(personPrototype, {
        first: { value: first },
        last: { value: last }
    })
}

const p1 = createPerson('Maria', 'Clara')

p1.speak()
p1.drink()