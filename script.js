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

requestAnimationFrame(animate);