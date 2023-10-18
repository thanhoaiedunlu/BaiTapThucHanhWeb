const  textarea = document.querySelector("#textarea");
const  textfield = document.querySelector("#textfield");
const button = document.querySelector("#button");
const  result = document.querySelector("#result-count");

button.addEventListener("click", function (){
    const searchText = textfield.value;
    const text = textarea.value;
    let count = 0;
    const words = text.split(" ");
    for (const word of words) {
        if (word == searchText) {
            count++;
        }
    }
    result.textContent = count;
});