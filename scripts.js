function calculate() {
    const profit = parseFloat(document.getElementById("profit").value);
    const shares = parseFloat(document.getElementById("shares").value);
    const price = parseFloat(document.getElementById("price").value);
    const assets = parseFloat(document.getElementById("assets").value);
    const liabilities = parseFloat(document.getElementById("liabilities").value);
    const growth = parseFloat(document.getElementById("growth").value);

    const errorDiv = document.getElementById("error");
    const resultsDiv = document.getElementById("results");
    errorDiv.innerHTML = "";
    resultsDiv.classList.add("d-none");

    // Defensive checks
    if (isNaN(profit) || isNaN(shares) || isNaN(price) ||
        isNaN(assets) || isNaN(liabilities) || isNaN(growth)) {
        showError("Please enter valid numeric values.");
        return;
    }

    if (shares === 0) return showError("Average number of shares cannot be zero.");
    if ((assets - liabilities) === 0) return showError("Total Assets minus Liabilities cannot be zero.");
    if (growth === 0) return showError("Expected growth percentage cannot be zero.");

    // Calculations
    const eps = profit / shares;
    const pb = price / (assets - liabilities);
    const pe = price / eps;
    const peg = pe / growth;

    // Display
    document.getElementById("eps").textContent = eps.toFixed(2);
    document.getElementById("pb").textContent = pb.toFixed(2);
    document.getElementById("pe").textContent = pe.toFixed(2);
    document.getElementById("peg").textContent = peg.toFixed(2);
    resultsDiv.classList.remove("d-none");
}

function showError(message) {
    document.getElementById("error").innerHTML =
        `<div class="alert alert-danger">${message}</div>`;
}

function clearResults() {
    document.getElementById("results").classList.add("d-none");
    document.getElementById("error").innerHTML = "";
}
