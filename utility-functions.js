export class ErrorHandler {
  constructor(input, div, name, errorFlag = false, message) {
    this.input = input ? input.value : console.error("input cannot be empty");
    this.div = div ? div : console.error("div cannot be empty");
    this.name = name ? name : console.error("name cannot be empty");
    this.errorFlag = errorFlag;
    this.message = message ? message : console.error("message cannot be empty");
  }

  isEmptyInput() {
    let p;
    if (!this.input.value) {
      if (!p) {
        p = document.createElement("p");
        p.textContent = this.name + this.message;
        this.div.appendChild(p);
      } else {
        p.textContent = this.name + this.message;
        this.div.appendChild(p);
      }
    } else {
      p = document.querySelector("p");
      if (p) {
        this.div.removeChild(p);
      }
    }
  }
}
