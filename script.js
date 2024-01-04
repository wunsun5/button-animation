const sum = 100;
const button = document.querySelector('button');

button.addEventListener('click', () => {
    for (let i = 0; i < sum; i++) {
        setTimeout(() => {
            const scale = 0.8 + Math.random() * 0.5;
            const translateX = -500 + Math.random() * 1000;
            const translateY = -500 + Math.random() * 1000;

            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            bubble.style.opacity = 1;
            bubble.style.transform = `
                translate(0, 0) 
                scale(${scale})
            `;

            setTimeout(() => {
                bubble.style.transform = `
                    translate(${translateX}px, ${translateY}px) 
                    scale(0)
                `;
                bubble.style.opacity = 0;
            }, 10);

            if (Math.random() < 0.5) {
                bubble.classList.add('full');
            }

            button.append(bubble);

            setTimeout(() => {
                bubble.remove();
            }, 2000);
        }, 6 * i)
    }
})