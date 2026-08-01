const aone = document.getElementById("aone");

let start = performance.now();

function animate(now) {
    const t = (now - start) / 1000; // 秒

    const y = Math.abs(Math.sin(t * 5)) * 12;
    const x = Math.sin(t * 2.5) * 3;
    const r = Math.sin(t * 5) * 4;

    const squash = Math.abs(Math.sin(t * 5));
    const sx = 1 - squash * 0.03;
    const sy = 1 + squash * 0.05;

    aone.style.transform = `
        translate(${x}px, -${y}px)
        rotate(${r}deg)
        scale(${sx}, ${sy})
    `;

    requestAnimationFrame(animate);
}

let lastText = "";
let hideTimer = null;

function typeText(text){
  const bubble = document.getElementById("bubble");

  bubble.textContent = "";

  let i = 0;

  const timer = setInterval(() => {
    bubble.textContent += text[i];
    i++;

    if(i >= text.length){
      clearInterval(timer);
    }
  }, 100);
}


function checkText(){
  const text = localStorage.getItem("aone_text") || "";

  if(text && text !== lastText){
    lastText = text;

    typeText(text);

    clearTimeout(hideTimer);

    hideTimer = setTimeout(() => {
      document.getElementById("bubble").textContent = "";
      localStorage.setItem("aone_text", "");
      lastText = "";
    }, 10000);
  }
}

setInterval(checkText, 500);


requestAnimationFrame(animate);