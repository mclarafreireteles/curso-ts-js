function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min)
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg.toUpperCase() +  ' passei na promisse');
        }, tempo);
    });
}

// esperaAi('msg 1', rand(1, 3))
//     .then(resposta => {
//         console.log(resposta)
//         return esperaAi('msg 2', rand(1, 3))
//     })
//     .then(resposta => {
//         console.log(resposta)
//         return esperaAi('msg 3', rand(1, 3))
//     })
//     .then(resposta => {
//         console.log(resposta)
//     }).then(() => {
//         console.log('ultimo a ser exibido')
//     })
//     .catch(e => {
//         console.log(e)
//     })


const promises = [
    'primeiro valor',
    esperaAi('promise 1', 3000),
    esperaAi('promise 2', 500),
    esperaAi('promise 3', 1000),
    'outro valor'
]

Promise.all(promises)
    .then(function(valor) {
        console.log(valor)
    })
    .catch( function(e) {
        console.log(e)
    })