function calculateTotalFare() {
      const distance = parseFloat(document.getElementById("distance").value);
      const rate = parseFloat(document.getElementById("rate").value);
      const tax = parseFloat(document.getElementById("tax").value);


      const total = distance * rate + (distance * rate * tax) / 100;
      //document.getElementById("total").textContent = total.toFixed(2);
        document.getElementById('total').innerHTML = `${total} pesos`
}      