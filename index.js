//let student = 20;
//student = student+10;

//console.log(student)

//let username = window.prompt("what's your name")
//console.log(username);

// let username;

// document.getElementById("button1").onclick = function(){
//     username = document.getElementById("text1").value;
//     console.log(username);
//     document.getElementById("username").textContent=  `${username}`;
//     document.getElementById("wel").textContent = `Hello ${username}`;
// }

let username;

document.getElementById("button1").onclick = function () {
    username = document.getElementById("text1").value;
    console.log(username);
    document.getElementById("wel").textContent = "usernam"
}


// let cname;

// cname = window.prompt('what is your name?');

// console.log(cname)

const pi = 3.14;

document.getElementById("submit").onclick = function () {
    let r = document.getElementById("radius").value;
    r = Number(r) 
    console.log(r, typeof r)
    let pp = 2 * pi * r;

    document.getElementById("perimeter").textContent = `Perimeter is ${pp}`;
    console.log(pp)
}