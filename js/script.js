const blobs = document.querySelectorAll('.blob,.blob1');
const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

// Ловимо мишку
document.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

blobs.forEach((blob) => {
  let x = Math.random() * (window.innerWidth - 150);
  let y = Math.random() * (window.innerHeight - 150);

  // Випадкові напрями, але дуже повільні
  let dx = (Math.random() - 2) * 1;
  let dy = (Math.random() - 2) * 1;

  function animate() {
    const distX = mouse.x - x;
    const distY = mouse.y - y;
    const distance = Math.sqrt(distX * distX + distY * distY);

    // Якщо миша близько — трохи "притягує"
    if (distance < 200) {
      x += distX * 0.002;
      y += distY * 0.002;
    }

    // Плавний безкінечний рух
    x += dx;
    y += dy;

    // Відбиваємось від країв
   if (x < -150 || x > window.innerWidth - 150) dx = -dx + (Math.random() - 0.5) * 0.2;
   if (y < -150 || y > window.innerHeight - 150) dy = -dy + (Math.random() - 0.5) * 0.2;


    blob.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(animate);
  }

  animate();
});
