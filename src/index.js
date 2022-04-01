//分割代入
/*
const myProfile = {
  name: "だだ",
  age: 28,
};

const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です`;
console.log(message1);


const {name, age} = myProfile;
const message2 = `名前は${name}です。年齢は${age}です`;
console.log(message2);
*/

const myProfile = ["だだ", 28];
console.log(myProfile);

const message3 = `名前は${myProfile[0]}です`;
console.log(message3);

const [name, age] = myProfile;
const message4 = `名前は${name}です。年齢は${age}です`;
console.log(message4);
