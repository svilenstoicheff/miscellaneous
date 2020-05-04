let myPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
            let person = {firstName: 'Svilen', lastName: 'Stoicheff'};
            if(!person) reject('Yeah, right');
            resolve(person);    
    }, 1000);
    });
    
    myPromise.then((message) => {
        console.log(`Hello, ${message.firstName}`);
    })
    .catch('Something happend')
    .finally('Promise done');