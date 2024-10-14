function calculateTotalAmount(grocery1, grocery2, grocery3) {
    let totalAmount = grocery1 + grocery2 + grocery3;
    document.getElementById('result').innerText = `The total amount is:\$ ${totalAmount}`;
}

function groceryTracker() {
    let grocery1 = parseFloat(document.getElementById('grocery1').value);
    let grocery2 = parseFloat(document.getElementById('grocery2').value);
    let grocery3 = parseFloat(document.getElementById('grocery3').value);

    calculateTotalAmount(grocery1, grocery2, grocery3);
}
