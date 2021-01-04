function setup() {

    const container = document.querySelector('#container');

    for (let i = 0; i < 16; i++) {
        const box = document.createElement('div');
        box.classList.add('grid');
        box.addEventListener('mouseover', function() {
            box.style.backgroundColor = 'white';
        });
        box.addEventListener('mouseout', function() {
            box.style.backgroundColor = 'black';
        });
        container.appendChild(box);
    }
}

setup();