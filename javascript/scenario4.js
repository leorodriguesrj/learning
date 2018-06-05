const fs = require('fs');

console.log('Start smart');
new Promise((resolve, reject) => {
    fs.readFile('message.txt', (error, data) => {
        if (error)
            reject(error);
        else
            resolve(data.toString());
    });
}).then(data => {
    console.log(data);
    return new Promise((resolve, reject) => {
        fs.writeFile('message2.txt', 'read succeeded', (error) => {
            if (error)
                reject(error);
            else
                resolve();
        });
    }).then(() => {
        console.log('wrote file');
        return new Promise(resolve =>
            resolve('haha')).then(result =>
                console.log(result));
    });
}).catch(error => {
    console.log(error);
}).then(() => {
    console.log('Stop smart');
});
