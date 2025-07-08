// executor
const executor = (resolve, reject) => {
    resolve('done');
};

const promise = new Promise(executor);

const foo = new Promise((resolve, reject) => {
    reject(new Error('Oops'));
});
