let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
for (let i = 1; i <= 31; i++) {
    day.innerHTML += `<option>${i}</option>`
}
let months = ["January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"];
for (let i = 0; i < months.length; i++) {
    month.innerHTML += `<option>${months[i]}</option>`
}
for(let i = 2026;i>=1900;i--){
    year.innerHTML+=`<option>${i}</option>`
}