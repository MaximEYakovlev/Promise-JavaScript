// executor
const executor = (resolve, reject) => {
    resolve('done');
};

const promise = new Promise(executor);
