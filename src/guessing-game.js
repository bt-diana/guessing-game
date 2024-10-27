class GuessingGame {
    #min;
    #max;
    #lastQuess;

    constructor() {}

    setRange(min, max) {
        this.#min = min;
        this.#max = max; 
    }

    guess() {
        this.#lastQuess = Math.ceil((this.#max + this.#min) / 2);
        return this.#lastQuess;
    }

    lower() {
        if (this.#max !== this.#min) this.#max = this.#lastQuess;
    }

    greater() {
        if (this.#max !== this.#min) this.#min = this.#lastQuess;
    }
}

module.exports = GuessingGame;
