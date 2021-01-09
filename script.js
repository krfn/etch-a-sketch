function setup() {

    const container = document.querySelector('#container');

    for (let i = 0; i < 100; i++) {
        const box = document.createElement('div');
        let ink = 0;
        box.classList.add('grid');
        box.addEventListener('mouseover', function() {
            box.style.backgroundColor = 'rgb(' + ink + ', ' + ink + ', ' + ink + ')';
            ink += 60;
        });
        container.appendChild(box);
    }
}

setup();