const fs = require('fs');

function loadMessage() {
    return new Promise((resolve, reject) => {
        fs.readFile('message.txt', (error, data) => {
            if (error)
                reject(error);
            else
                resolve(data.toString());
        });
    });
}

function saveMessage() {
    return new Promise((resolve, reject) => {
        fs.writeFile('message2.txt', 'read succeeded', (error) => {
            if (error)
                reject(error);
            else
                resolve();
        });
    });
}

async function saySomething() {
    throw new Error('hahaha');
}


async function main() {
    console.log('Start async');
    try {
        const message = await loadMessage();
        console.log(message);
        await saveMessage();
        console.log('wrote file');
        console.log(await saySomething());
    } catch(e) {
        console.log(e)
    }
    console.log('Stop async');
}

main();