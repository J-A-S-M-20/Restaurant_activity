function computeTotal() {

    // Prices
    let price1 = 350;
    let price2 = 238;
    let price3 = 220;

    // Quantities
    let qty1 = parseInt(document.getElementById("item1").value);
    let qty2 = parseInt(document.getElementById("item2").value);
    let qty3 = parseInt(document.getElementById("item3").value);

    // Compute subtotal
    let total = (qty1 * price1) + (qty2 * price2) + (qty3 * price3);

    let age = parseInt(document.getElementById("age").value);

    let discount = 0;

    // Apply 12% Senior Discount if age ≥ 60
    if (age >= 60) {
        discount = total * 0.12;
    }

    let finalTotal = total - discount;

    // Display results
    document.getElementById("originalTotal").innerText = total.toFixed(2);
    document.getElementById("discount").innerText = discount.toFixed(2);
    document.getElementById("finalTotal").innerText = finalTotal.toFixed(2);
}