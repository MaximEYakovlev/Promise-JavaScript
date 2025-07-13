/** This is a description of the executor function.
 * @function executor
 * @param {function} resolve
 * @param {function} reject
 */
const executor = (resolve, reject) => {
    resolve('done');
};

/**
 * @object Promise
 */
const promise: Promise<string> = new Promise(executor);

const foo = new Promise((resolve, reject) => {
    reject(new Error('Oops'));
});
