function calculateCibil() {
    let loanAmount = parseFloat(document.getElementById('loan-amount').value);
    let balance = parseFloat(document.getElementById('balance').value);
    
    if (isNaN(loanAmount) || isNaN(balance) || loanAmount <= 0 || balance < 0) {
        document.getElementById('cibil-result').innerHTML = "<h3>Please enter valid inputs</h3>";
        return;
    }

    // Simplified CIBIL Score Calculation Logic
    let score = 750 - (balance / loanAmount) * 100;
    score = score < 300 ? 300 : score > 900 ? 900 : Math.round(score);

    document.getElementById('cibil-result').innerHTML = `<h3>Your Estimated CIBIL Score: ${score}</h3>`;
}

// EMI Calculator
function calculateEmi() {
    let principal = parseFloat(document.getElementById('principal').value);
    let interestRate = parseFloat(document.getElementById('interest-rate').value) / 12 / 100;
    let tenure = parseInt(document.getElementById('tenure').value);

    if (isNaN(principal) || isNaN(interestRate) || isNaN(tenure) || principal <= 0 || tenure <= 0) {
        document.getElementById('emi-result').innerHTML = "<h3>Please enter valid inputs</h3>";
        return;
    }

    let emi = principal * interestRate * (Math.pow(1 + interestRate, tenure) / (Math.pow(1 + interestRate, tenure) - 1));
    emi = emi.toFixed(2);

    document.getElementById('emi-result').innerHTML = `<h3>Your Monthly EMI: ₹${emi}</h3>`;
}
