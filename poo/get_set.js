const _speed = Symbol('speed')
class Car {
    constructor(name, speed) {
        this.name = name;
        this[_speed] = 0;
    }

    set speed(value) {
        console.log('setter')
        if (typeof value !== 'number') return;
        if (value >= 100 || value <= 0) return;
        this[_speed] = value;
    }

    get speed() {
        console.log('getter')
        return this[_speed]
    }

    accelerate() {
        if (this[_speed] >= 100) return;
        this[_speed]++;
    }

    brake() {
        if (this[_speed] <= 0) return;
        this.speed--;
    }
}

const c1 = new Car('Fusca');

for (let i = 0; i <= 200; i++) {
    c1.accelerate()
}

c1.accelerate()
console.log(c1.speed)