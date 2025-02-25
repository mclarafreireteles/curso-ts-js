const _speed = Symbol('speed')
class Car {
    constructor(name, speed) {
        this.name = name;
        this[_speed] = 0;
    }

    set speed(value) {
        if (typeof value !== 'number') return;
    }

    get speed() {
        return[_speed]
    }

    accelerate() {
        if (this[_speed] >= 100) return;
        this.speed++;
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
console.log(c1)