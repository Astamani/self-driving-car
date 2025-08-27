class Controls {
  constructor() {
    this.forward = false;
    this.reverse = false;
    this.Lside = false;
    this.Rside = false;

    this.#addKeyboardListners();
  }

  #addKeyboardListners() {
    document.onkeydown = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          this.Lside = true;
          break;
        case "ArrowRight":
          this.Rside = true;
          break;

        case "ArrowUp":
          this.forward = true;
          break;

        case "ArrowDown":
          this.reverse = true;
          break;
      }
    };
    document.onkeyup = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          this.Lside = false;
          break;

        case "ArrowRight":
          this.Rside = false;
          break;

        case "ArrowUp":
          this.forward = false;
          break;

        case "ArrowDown":
          this.reverse = false;
          break;
      }
    };
  }
}
