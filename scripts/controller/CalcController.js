class CalcController {

    constructor() {

        this._displayCalc = "0";
        this._currentDate;

        this.initialize();

    }

    initialize() {

        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        displayCalcEl.innerHTML = "4567";
        dateEl.innerHTML = "01/05/2020";
        timeEl.innerHTML = "00:00";

    }

    get displayCalc() {

        return this._displayCalc;

    }

    set displayCalc(value) {

        this._displayCalc = value;
        
    }

    get dataAtual() {
        return this._currentDate;
    }

    set dataAtual(value) {
        this._currentDate = value;
    }

}
