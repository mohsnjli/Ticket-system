let countryBox = document.querySelector("#countryBox");
let cityBox = document.querySelector("#cityBox");
let countryList = {
    Iran: ["isfahan", "tehran", "tabriz", "rasht"],
    Germany: ["berlin", "munich", "hamburg", "stuttgrat"],
    France: ["paris", "nice", "lyon", "lille"],
    America: ["los angeles", "newyork", "san francisco", "san digo"]
}
countryBox.addEventListener("change", function () {
    let mainCountry = countryBox.value;
    let mainCity = countryList[mainCountry];
    cityBox.innerHTML = "";
    if (countryBox.value === "PSC") {
        alert("hello")
    } else {  
        mainCity.forEach(function (cities) {
            let opt = document.createElement("option");
            opt.setAttribute("value", cities);
            opt.classList.add("cityClass");
            cityBox.appendChild(opt);
            opt.append(cities)
        });
    }
});

//-------------------------Dark--Mode----------------------
let darkModeBtn = document.getElementById("darkModeBtn");
let darkModeIcon = document.getElementById("darkModeIcon");
let body = document.querySelector("body");
let isDark = false;
let a = darkModeBtn.addEventListener("click", function () {
    body.classList.toggle("dark");
    if (isDark) {
        darkModeIcon.classList.replace("fa-sun", "fa-moon");
        isDark = false;
    } else {
        darkModeIcon.classList.replace("fa-moon", "fa-sun");
        isDark = true;
    }
});