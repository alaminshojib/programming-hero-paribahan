const buyTicketsBtn = document.getElementById("buy-tickets"),
  scrollToSectionBtn = document.getElementById("ticket-section");

buyTicketsBtn.addEventListener("click", () => {
  scrollToSectionBtn.scrollIntoView({ behavior: "smooth" });
});

const seats = document.querySelectorAll(".kbd");

function idVerify(id) {
  const identity = document.querySelector(id);
  identity.addEventListener("click", function () {
    const seatLetter = identity.innerText;

    const setContainer = document.getElementById("seat-container");

    const selectNumber = setContainer.childNodes.length;

    if (selectNumber <= 4) {
      const p = document.createElement("p");
      p.innerText =
        " \u00a0" +
        " \u00a0" +
        " \u00a0" +
        seatLetter +
        " \u00a0" +
        " \u00a0" +
        " \u00a0" +
        " \u00a0" +
        " \u00a0" +
        " \u00a0" +
        " \u00a0" +
        " \u00a0" +
        " \u00a0" +
        " \u00a0" +
        " \u00a0" +
        " \u00a0" +
        " \u00a0" +
        " \u00a0" +
        "Economoy" +
        " \u00a0" +
        " \u00a0" +
        " \u00a0" +
        " \u00a0" +
        " \u00a0" +
        " \u00a0" +
        " \u00a0" +
        " \u00a0" +
        " \u00a0" +
        " \u00a0" +
        " \u00a0" +
        " \u00a0" +
        550;

      setContainer.appendChild(p);

      const seatPrice = 550;

      const totalPrice = seatPrice * selectNumber;

      const totalMoney = document.getElementById("totalPrice");
      const grandtotal = document.querySelector(".grandTotals");

      totalMoney.innerText = totalPrice;
      grandtotal.innerText = totalPrice;

      let selectedSeat = document.getElementById("seat-Selected");
      selectedSeat.innerHTML = parseFloat(selectNumber);

      const restTicket = document.getElementById("rest-Ticket");
      restTicket.innerHTML = 40 - selectNumber;
    }

    if (selectNumber > 4) {
      seats.classList.add("disabled");
    }

    if (selectNumber == 1) {
      const applyBtn = document.getElementById("deadClass");
      applyBtn.removeAttribute("disabled", true);
    }

    const inputNumber = document.querySelector(".phoneNumberInput");

    inputNumber.addEventListener("input", function () {
      const input11 = inputNumber.value.length;

      if (selectNumber > 0 && input11 > 0) {
        const nextBtn = document.querySelector(".next-dead");
        const bgColorAdd = document.querySelector(".bg-wow-color");
        nextBtn.removeAttribute("disabled", true);
        bgColorAdd.style.backgroundColor = "#1DD100";
      }
    });

    if (identity.childNodes)
      function changeSeatColor(seat) {
        seat.style.backgroundColor = "#1DD100";
        seat.style.color = "#fff";
      }
    changeSeatColor(identity);

    if (selectNumber == 4) {
      alert(" You have selected Maximum Ticket");
    }
  });
}

idVerify("#A1");
idVerify("#A2");
idVerify("#A3");
idVerify("#A4");
idVerify("#B1");
idVerify("#B2");
idVerify("#B3");
idVerify("#B4");
idVerify("#C1");
idVerify("#C2");
idVerify("#C3");
idVerify("#C4");
idVerify("#D1");
idVerify("#D2");
idVerify("#D3");
idVerify("#D4");
idVerify("#E1");
idVerify("#E2");
idVerify("#E3");
idVerify("#E4");
idVerify("#F1");
idVerify("#F2");
idVerify("#F3");
idVerify("#F4");
idVerify("#G1");
idVerify("#G2");
idVerify("#G3");
idVerify("#G4");
idVerify("#H1");
idVerify("#H2");
idVerify("#H3");
idVerify("#H4");
idVerify("#I1");
idVerify("#I2");
idVerify("#I3");
idVerify("#I4");
idVerify("#J1");
idVerify("#J2");
idVerify("#J3");
idVerify("#J4");

function selectElementWithId(id) {
  const selectedId = document.getElementById(id);
  return selectedId;
}

const applyBtn = document.getElementById("deadClass");

applyBtn.addEventListener("click", function () {
  let totalElement = selectElementWithId("totalPrice");
  let totalString = totalElement.innerText;
  let discountElement = selectElementWithId("grand-total");
  let discountString = discountElement.innerText;
  let total = parseFloat(totalString);
  let discount = parseFloat(discountString);

  const couponBox = selectElementWithId("coupon-box");
  const coupon = couponBox.value;

  if (coupon === "NEW15") {
    let totalPriceString = selectElementWithId("totalPrice").innerText;
    totalPrice = parseFloat(totalPriceString);
    let discountAmount = totalPrice * 0.15;

    const totalAmount = totalPrice - discountAmount;
    // totalElement.innerText = totalAmount;
    discountElement.innerText = totalAmount.toFixed(2);

    couponBox.value = "";
    const applyHidden = selectElementWithId("apply-hidden");
    applyHidden.style.display = "none";
  }
  

  else if (coupon === "Couple 20") {
    let totalPriceString = selectElementWithId("totalPrice").innerText;
    totalPrice = parseFloat(totalPriceString);
    let discountAmount = totalPrice * 0.2;

    const totalAmount = totalPrice - discountAmount;
    // totalElement.innerText = totalAmount;
    discountElement.innerText = totalAmount.toFixed(2);

    couponBox.value = "";
    const applyHidden = selectElementWithId("apply-hidden");
    applyHidden.style.display = "none";
  } else {
    alert("Please Enter Valid Coupon");
  }
});
