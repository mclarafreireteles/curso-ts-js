function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min)
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject));

    setTimeout(() => {
        console.log(msg);
    }, tempo)
}

esperaAi('msg 1', rand(1, 3))
esperaAi('msg 2', rand(1, 3))
esperaAi('msg 3', rand(1, 3))
