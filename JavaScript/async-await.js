let returnIn3Seconds = function () {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        let person = {name:'Svilen', lastName:'Stoicheff'};
        if(!person) reject('something broke');
        resolve(person);
    }, 3000);
    });
};


async function getData () {
    const result = await returnIn3Seconds();
    console.log(result);
}

console.log(getData());