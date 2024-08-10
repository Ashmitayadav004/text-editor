let user = document.querySelector("#user");
let p = document.querySelector("p");
user.addEventListener("input", function () {
    console.log("value of input");
    console.log(user.value);
    p.innerText=user.value;
});