const clock = document.querySelector('.clock');

// This arrow function will get the hours minutes and seconds
const tick = () => {
    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    // This will show the time on the screen
    const html = `
        <span>${h}</span> : 
        <span>${m}</span> : 
        <span>${s}</span>

    
    `;
    clock.innerHTML = html;
};

    // The setInterval will change every 1 seconds
setInterval(tick, 1000 );