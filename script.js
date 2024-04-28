document.addEventListener("DOMContentLoaded", function() {
  // Event listeners
  document.getElementById("calculateBtn").addEventListener("click", calculateTip);
  document.getElementById("clearBtn").addEventListener("click", clearInputs);
});

function calculateTip() {
  let totalBill = parseFloat(document.getElementById("totalBill").value);
  let tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
  let numberOfPeople = parseFloat(document.getElementById("numberOfPeople").value);

  // Calculate tip per person
  let tipPerPerson = (totalBill * (tipPercentage / 100)) / numberOfPeople;

  // Display the result
  document.getElementById("tipPerPerson").textContent = `$${tipPerPerson.toFixed(2)}`;
}

function clearInputs() {
  document.getElementById("totalBill").value = "";
  document.getElementById("tipPercentage").value = "";
  document.getElementById("numberOfPeople").value = "";
  document.getElementById("tipPerPerson").textContent = "$-----";
}