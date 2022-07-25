// console.input = prompt();
// if(!input) {
//     console.log("입력값이 없습니다.");
// } else{
//     console.log(input);
// }

fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(res=>res.json())
.then(console.log);
console.log('test');