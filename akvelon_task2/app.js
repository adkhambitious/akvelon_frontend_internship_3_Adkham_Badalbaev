let fullname = document.getElementById("fname");
let registerBtn = document.querySelector(".registerbtn");
console.log(fullname.value);



function validation(text) {
    let regexp = /^[a-zA-Z\s]{1,120}$/;
    let result = regexp.test(text);
    console.log("Валидация");
    console.log(result);
    return result;
}


registerBtn.onclick = function() {
    if (!validation(fullname.value)) {
        // alert("fgf")
        fullname.style = "box-shadow: 0 0 10px rgba(255,0,0,0.5);";
        return false;

    } else {
        fullname.style = "box-shadow: 0 0 5px 1px rgba(0,204,0,0.8);"
    };
    console.log("событие");
    console.log(res);
}