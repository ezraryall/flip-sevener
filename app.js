let text = "";
const anIndex = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', " ", '2', '1', '3', '4', '5', '6', '7', '8', '9', '0'
]
const textInput = document.getElementById("text-input");
const submit = document.getElementById("submit");
const decipherCheck = document.getElementById("decipher-check");
const output = document.getElementById("output");
const code = document.getElementById("code");
submit.addEventListener("click", () => {
    if (decipherCheck.checked) {
        decipher(textInput.value);
    } else {
        cipher(textInput.value)
    }
})

let key = "";

code.addEventListener("change", () => {
    switch (code.value) {
        case "pneumonia":
            key = 12;
            break;
        case "cuddy":
            key = 7;
            break;
        case "lupus":
            key = 9;
            break;
        case "mousebite":
            key = 16;
            break;
        case "piano":
            key = 4;
            break;
        default:
            break;
    }
})


function cipher(text) {
    const textArray = [];
    // create text array to push to
    for (const char of text) {
        var regex = new RegExp(`${char}`, "gi");
        // regex that searches for the character
        const maxIndex = anIndex.length - 1
        // finds the biggest index in the alphanumeric index array
        var index = anIndex.findIndex(char => regex.test(char));
        // finds index of the current character
        if (index > (maxIndex - key) && index <= maxIndex) {
            const newIndex = key - (maxIndex - index) - 1
            // the key minus the amount left to shift the character, minus one (to match the index starting at 0)
            index = newIndex
        } else {
            index = index + key
        }
        const returnValue = anIndex[index];
        textArray.push(returnValue);
    }
    output.innerText = textArray.join("");
    console.log(textArray.join(""));
}

function decipher(text) {
    // create text array to push to
    const textArray = [];
    for (const char of text) {
        // regex that searches for the character
        var regex = new RegExp(`${char}`, "gi");
        // finds the biggest index in the alphanumeric index array
        const maxIndex = anIndex.length - 1
        // finds index of the current character
        var index = anIndex.findIndex(char => regex.test(char));
        // console.log(index)
        if (index <= (key - 1)) {
            // the key minus the amount left to shift the character, minus one (to match the index starting at 0)
            const remainder = -(index - key);
            // console.log('remainder:', remainder);
            const newIndex = maxIndex - remainder + 1
            // console.log('new index:', newIndex)
            index = newIndex
        } else {
            index = index - key
        }
        const returnValue = anIndex[index];
        textArray.push(returnValue);
    }
    output.innerText = textArray.join("");
    console.log(textArray.join(""));
}