console.log("connection");

let seatConection = document.querySelectorAll(".kbd");



const arrayMakers = Array.from(seatConection)


console.log(arrayMakers.length);


let clickCount = 0;
  const maxClicks = 4;


seatConection.forEach(function (seat) {
  seat.addEventListener("click", function () {
    const seatLetter = seat.innerText;



    clickCount++;




    if (clickCount > maxClicks ) {
        // Disable button
        seat.disabled = true;
        console.log(seat.textContent="hi");
    
    
    
    
    
    
    }else {

        console.log("ok");




    }

  });
});
