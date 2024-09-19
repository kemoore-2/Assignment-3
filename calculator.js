(function() {
    let results = []; 
    let calculationTable = "<table><tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>";

    while (true) {
        
        let x = prompt("Enter the first number (x):");
        if (x === null) break; 
        if (isNaN(x)) {
            calculationTable += `<tr><td>${x}</td><td></td><td></td><td>Error: Not a number</td></tr>`;
            continue;
        }
        x = parseFloat(x);

        
        let y = prompt("Enter the second number (y):");
        if (y === null) break; 
        if (isNaN(y)) {
            calculationTable += `<tr><td>${x}</td><td></td><td>${y}</td><td>Error: Not a number</td></tr>`;
            continue;
        }
        y = parseFloat(y);

        
        let operator = prompt("Enter an operator (+, -, *, /, %):");
        if (operator === null) break; 

        let result;
        switch (operator) {
            case '+':
                result = x + y;
                results.push(result);
                break;
            case '-':
                result = x - y;
                results.push(result);
                break;
            case '*':
                result = x * y;
                results.push(result);
                break;
            case '/':
                if (y !== 0) {
                    result = x / y;
                    results.push(result);
                } else {
                    result = "Error: Cannot by zero!";
                }
                break;
            case '%':
                result = x % y;
                results.push(result);
                break;
            default:
                result = "Error: Invalid operator!";
        }

        
        calculationTable += `<tr><td>${x}</td><td>${operator}</td><td>${y}</td><td>${result}</td></tr>`;
    }

    calculationTable += "</table>";
    document.getElementById("calculation-table").innerHTML = calculationTable;

    
    if (results.length > 0) {
        let min = Math.min(...results);
        let max = Math.max(...results);
        let sum = results.reduce((a, b) => a + b, 0);
        let avg = sum / results.length;

        let summaryTable = "<table><tr><th>Min</th><th>Max</th><th>Sum</th><th>Average</th></tr>";
        summaryTable += `<tr><td>${min}</td><td>${max}</td><td>${sum}</td><td>${avg.toFixed(2)}</td></tr>`;
        summaryTable += "</table>";

        document.getElementById("summary-table").innerHTML = summaryTable;
    }

    
})();
