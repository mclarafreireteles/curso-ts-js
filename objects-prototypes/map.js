const people = [
    {id: 1, name: 'Maria'},
    {id: 2, name: 'Duda'},
    {id: 3, name: 'Caracas'}
]

const newPeople = new Map()

for (const person of people) {
    const { id } = person
    newPeople.set(id, { ...person })

}

console.log(newPeople.get(2))