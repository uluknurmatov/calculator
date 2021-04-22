let calcInp = $("#inp");

calcInp.val(0);

function handleButtonClick(symbol) {
    if (symbol === "AC") {
        calcInp.val(0);
    } else {
        if (calcInp.val() == 0) {
            calcInp.val(symbol);
        } else {
            calcInp.val(calcInp.val() + symbol);
        }
    }
}

function handleCalculate() {
    const value = calcInp.val();
    try {
        const result = eval(value);
        calcInp.val(result);
    } catch (error) {
        calcInp.val("InvalidOperation");
    }
}
