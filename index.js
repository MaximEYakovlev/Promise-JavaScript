import fetch from 'node-fetch';
import axios from 'axios';
import { family } from './data.js';

const getCoffee = (member) => {
    const coffeePromise = fetch('https://api.sampleapis.com/coffee/hot');
    return coffeePromise
        .then((data) => data.json())
        .then((list) => {
            const coffee = list.find((res) => res.title === member.coffee);
            return {
                ...member,
                coffee: coffee,
            };
        });
};

const getFamilyMember = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const member = family.find((res) => res.id === id);

            if (member) {
                resolve(member);
            } else {
                reject(Error('family member not found'));
            }
        }, 1000);
    });
};

getFamilyMember(1)
    .then((data) => getCoffee(data))
    .then((newMember) => {
        console.log(newMember);
    })
    .catch((err) => {
        console.log(err);
    });

axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.headers)
    .then((headers) => console.log(headers));
