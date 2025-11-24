import { textNodes } from "./textNodes.js";


function toggleButtonState(disable) {
  const buttons = document.querySelectorAll(".aboutUsArrow");
  for ( let button of buttons) {
      button.disabled = disable;
    }
}
function showTextNode(textNodeIndex) {
  if (window.animationInterval) {
    clearInterval(window.animationInterval);
  }


const images = document.getElementById("aboutUsIMG");
const textElement = document.getElementById("textPara");
const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
const leftArrow = document.getElementById("aboutUsLeftArrow");
const rightArrow = document.getElementById("aboutUsRightArrow");
  
  textElement.textContent = "";
  images.src = textNode.img;
 

  const words = textNode.text.split("");
  let index = 0;  

 toggleButtonState(true);

  window.animationInterval = setInterval(() => {
    if (index < words.length) {
      textElement.textContent += words[index++];
    } else {
      clearInterval(window.animationInterval);
      toggleButtonState(false);
    }
  }, 20);

  leftArrow.addEventListener("click", () => {
    const prevIndex = textNodeIndex - 1 < 1 ? textNodes.length : textNodeIndex - 1;
    showTextNode(prevIndex);
  });

  rightArrow.addEventListener("click", () => {
    const nextIndex = textNodeIndex + 1 > textNodes.length ? 1 : textNodeIndex + 1;
    showTextNode(nextIndex);
  });
}

window.onload = showTextNode(1);