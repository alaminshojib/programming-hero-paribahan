const buyTicketsBtn = document.getElementById("buy-tickets"),
  scrollToSectionBtn = document.getElementById("ticket-section");

buyTicketsBtn.addEventListener("click", () => {
  scrollToSectionBtn.scrollIntoView({ behavior: "smooth" });
});

const seats = document.querySelectorAll(".kbd");

for (let i = 0; i < seats.length; i++) {
  const seat = seats[i];
  seat.addEventListener("click", function () {
    const seatLetter = seat.innerText;

    const setContainer = document.getElementById("seat-container");

    const p = document.createElement("p");
    p.innerText =
      " " +
      seatLetter +
      " ---------------------" +
      "Economic" +
      "--------------" +
      550;
    setContainer.appendChild(p);

    const selectNumber = setContainer.childNodes.length - 1;

    const seatPrice = 550;

    const totalPrice = seatPrice * selectNumber;

    const totalMoney = document.getElementById("totalPrice");

    totalMoney.innerText = totalPrice;

    let selectedSeat = document.getElementById("seat-Selected");
    selectedSeat.innerHTML = parseFloat(selectNumber);

    const restTicket = document.getElementById("rest-Ticket");
    restTicket.innerHTML = 40 - selectNumber;
    if (seat.childNodes)
      function changeSeatColor(seat) {
        seat.style.backgroundColor = "#1DD100";
        seat.style.color = "#fff";
      }
    changeSeatColor(seat);
  });
}

const btn = document.getElementById("apply-btn");

btn.addEventListener("click", function () {
  //   get the value from input
  const couponElement = document.getElementById("input-field").value;
  const couponCode = couponElement.split(" ").join("").toUpperCase();
  console.log(couponCode);
  if (totalPrice >= 4) {
    if (couponCode === "NEW15") {
      // discount calculation
      const discountElement = document.getElementById("discountPrice");
      const discountAmount = totalPrice * 0.15;
      discountElement.innerText = discountAmount.toFixed(2);

      //   rest total calculation
      const restTotal = document.getElementById("grand-total");
      restTotal.innerText = totalPrice - discountAmount.toFixed(2);
      document.getElementById("input-field").value = "";
    } else {
      alert("Invalid Coupon Code");
      document.getElementById("input-field").value = "";
    }
  } else {
    alert("Please buy at least 4 tickets ");
    document.getElementById("input-field").value = "";
  }
});

// Next Submit button

var submitBtn = document.getElementById("submitBtn");
var phoneNumberInput = document.getElementById("phoneNumberInput");

phoneNumberInput.addEventListener("input", function () {
  submitBtn.disabled =
    phoneNumberInput.value.trim() === "" || seats.value === "";
});

optionSelect.addEventListener("change", function () {
  submitBtn.disabled =
    phoneNumberInput.value.trim() === "" || seats.value === "";
});
