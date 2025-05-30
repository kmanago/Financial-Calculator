function calculate() {
    //TODO:complete calculations and display results
    //get the form elements
    const profit = parseFloat(document.getElementById("profit").value);
    const avgShares = parseFloat(document.getElementById("avgShares").value);
    const sharePrice = parseFloat(document.getElementById("sharePrice").value);
    const totAssets = parseFloat(document.getElementById("totAssets").value);
    const totLiabilities = parseFloat(document.getElementById("totLiabilities").value);
    const expectedGrowth = parseFloat(document.getElementById("expectedGrowth").value);

    //defensive coding, check for division by zero & number values only
    //error alert if not correct

    //complete calculations
    const eps = profit / avgShares;
    const pb = sharePrice / (totAssets - totLiabilities);
    const pe = sharePrice / eps;
    const peg = pe / expectedGrowth;

    //add results to the results div
    document.getElementById("eps").textContent = eps.toFixed(2);
    document.getElementById("pb").textContent = pb.toFixed(2);
    document.getElementById("pe").textContent = pe.toFixed(2);
    document.getElementById("peg").textContent = peg.toFixed(2);

    //display the results div
    const results = document.getElementById("results");
    results.classList.remove("d-none");
}

function showError() {
    //TODO: show popup model error
}

function clearResults() {
    //TODO: Clear Results
    //get the the results div
    const results = document.getElementById("results");
    results.classList.add("d-none");
    //hide the card
}