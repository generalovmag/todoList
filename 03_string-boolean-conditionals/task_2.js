let userName = "иваН";
let userSurname = "васиЛьевиЧ";

let letterName = userName.substring(0,1);
let lastLetterName = userName.substring(1);

let letterSurname = userSurname.substring(0,1);
let lastLetterSurname = userSurname.substring(1);

let rightUserName = letterName.toUpperCase() + lastLetterName.toLowerCase();

let rightUserSurname = letterSurname.toUpperCase() + lastLetterSurname.toLowerCase();

console.log(`Было указано имя: ${userName}, после преобразования: ${rightUserName}`);

console.log(`Было указано имя: ${userSurname}, после преобразования: ${rightUserSurname}`);

let answerUserName = userName == rightUserName ? console.log("Имя осталось без изменений") : console.log("Имя было преобразовано");

let answerUserSurname = userSurname == rightUserSurname ? console.log("Фамилия осталось без изменений") : console.log("Фамилия была преобразовано");
