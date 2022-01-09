import fetch from "node-fetch";

const family = [
  {
    id: 1,
    member: "mother",
    coffee: "Latte",
  },
  {
    id: 2,
    member: "father",
    coffee: "Espresso",
  },
  {
    id: 3,
    member: "son",
    coffee: "Cappuccino",
  },
];

const getCoffee = (member) => {
  const coffeePromise = fetch("https://api.sampleapis.com/coffee/hot");
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
        reject(Error("family member not found"));
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
