const buttons = document.querySelectorAll("button");
const output = document.querySelector("#result");
let input = "";
let operand = "";

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (isNaN(parseInt(e.target.innerText))) {
            switch (e.target.innerText) {
                case "C":
                    input = "";
                    operand = "";
                    break;
                case "&larr;":
                    input = input.slice(0, -1);
                    break;
                case "=":
                    input = eval(input);
                    operand = "=";
                    break;
                default:
                    operand = e.target.innerText;
                    input += ` ${operand} `;
                    break;
            }
        } else {
            input += e.target.innerText;
        }
        output.innerText = input;
    });
});