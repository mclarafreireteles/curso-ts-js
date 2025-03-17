class ValidaCPF {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpf.replace(/\D+/g, '')
        });
    }

    ehSequencia() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length)
    }

    geraNovoCpf() {

    }

    valida() {
        if (!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.ehSequencia()) return false;
        if(!this.geraNovoCpf()) return false;
        return 'cheguei'
    }
}

let validaCPF = new ValidaCPF('09497255365')
console.log(validaCPF.valida())