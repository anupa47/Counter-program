const answer = document.getElementById("answer");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const resett = document.getElementById("reset");
let count = 0;


resett.onclick = function () {
    count = 0;
    answer.textContent = count;
}

decrease.onclick = function () {
    count--;
    answer.textContent = count
}

increase.onclick = function () {
    count++;
    answer.textContent = count;
    console.log(count);
}
