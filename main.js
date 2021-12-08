// - Знайти та вивести довижину настипних стрінгових значень

// let firstString = 'hello world';
// let secondString = 'lorem ipsum';
// let thirdString = 'javascript is cool';
//
// console.log(firstString.length, secondString.length, thirdString.length);

// - Перевести до великого регістру наступні стрінгові значення

// let firstString = 'hello world';
// let secondString = 'lorem ipsum';
// let thirdString = 'javascript is cool';
//
// console.log(firstString.toUpperCase(), secondString.toUpperCase(), thirdString.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення

// let firstString = 'HELLO WORLD';
// let secondString = 'LOREM IPSUM';
// let thirdString = 'JAVASCRIPT IS COOL';
//
// console.log(firstString.toLowerCase(), secondString.toLowerCase(), thirdString.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str.trim())

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let stringToarray = (str) => {
//     return str.split(' ');
// }
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// console.log(arr);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7));

// let delete_characters = (str, index) => {
//     return str.substr(0, index);
// };
// let str = 'Каждый охотник желает знать';
// document.write(delete_characters(str, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.\
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//      let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//

// let insert_dash = (str) => {
//     let splitJoinUpper = str.split(' ').join('-').toUpperCase();
//     return splitJoinUpper;
// }
// let string = "HTML JavaScript PHP";
// console.log(insert_dash(string));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let upper = (str) => {
//     if (!str) return str;
//     return str[0].toUpperCase() + str.slice(1)
// };
// console.log(firstUp('hello okten'));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let capitalize = (str) => {
//     return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
// };
// console.log(capitalize('okten hi you are welcome'));
