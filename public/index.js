let slider = document.getElementById("myRange");
let output = document.getElementById("pw-length");
let display = document.getElementById("displayPass");
let generate = document.getElementById("submit");

output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

generate.addEventListener("click", () => {
    let length = slider.value;
    let password = generatePassword(length);
    display.innerHTML = password;
});

const lowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

const upperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

const number = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

const symbol = () => {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

const copyfunc = () => {
    let copyText = document.getElementById("displayPass").innerHTML;
    navigator.clipboard.writeText(copyText);
    alert("Copied the text: " + copyText);
}

const generatePassword = (x) => {
    const length = x;
    let password = "";

    for (let i = 0; i < length; i++) {
        const x = generateX();
        password += x;
    }
    console.log(password);
    return password;
}

const generateX = () => {
    const xs = [];
    if (document.getElementById("lowercase").checked) {
        xs.push(lowerCase());
    }

    if (document.getElementById("uppercase").checked) {
        xs.push(upperCase());
    }

    if (document.getElementById("numbers").checked) {
        xs.push(number());
    }

    if (document.getElementById("symbols").checked) {
        xs.push(symbol());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}
