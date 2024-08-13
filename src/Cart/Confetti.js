import GetElement, { GetElements } from "../util";
import confetti from "canvas-confetti";
let checkoutBtns = GetElements(".checkout-cart-btn");
let Cartdatacontainer = GetElement(".cart-data-container");
export default function Confetti() {
  var myCanvas = document.createElement("canvas");

  checkoutBtns.forEach((checkoutBtn) => {
    checkoutBtn.addEventListener("click", () => {
      Cartdatacontainer.append(myCanvas);
      Cartdatacontainer.style.backrgoundColor = "blue";
      var myConfetti = confetti.create(myCanvas, {
        resize: true,
        useWorker: true,
      });
      myConfetti({
        particleCount: 100,
        spread: 160,
        // any other options from the global
        // confetti function
      });
    });
  });
}

Confetti();
